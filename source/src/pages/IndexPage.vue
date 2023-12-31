<template>
  <q-page class="column items-center justdify-evenly" padding>
    <q-card class="q-pa-md q-mb-lg">
      <q-select v-model="list" :options="LISTS" filled dense label="List" />
    </q-card>
    <q-card class="q-pa-md column q-mb-lg">
      <div>
        If you have not been rate limited yet, you can use the 10 second button.
        This will run {{ limit }} queries, one every 10 seconds.
      </div>
      <div class="q-pt-xl q-pb-md">
        <q-slider v-model="limit" :min="1" :max="50" labelAlways dense />
      </div>
      <q-btn label="10 seconds" @click="runQueries(1)" color="blue" />
    </q-card>

    <q-card class="q-pa-md column">
      <div>
        If you have been rate limited (RIP), you need to have this open in a
        browser in the background for a few hours. This will run 5 searches with
        10 second delays, followed by a {{ rated }} minute delay.
      </div>
      <div class="q-pt-xl q-pb-md">
        <q-slider v-model="rated" :min="1" :max="31" labelAlways dense />
      </div>
      <q-btn
        label="Rate Limited Queries"
        @click="runRateLimited"
        color="blue"
      />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash';
import { GIANTS } from './Giants';
import { ANIMALS } from './Animals';
import { computed, ref } from 'vue';

const DEFAULT_DELAY = 10000;
const LISTS = ['Giants', 'Animals', 'Mixed'];
const limit = ref(35);
const rated = ref(16);
const list = ref('Mixed');

const listValues = computed(() => {
  switch (list.value) {
    case 'Giants':
      return GIANTS.slice();
    case 'Animals':
      return ANIMALS.slice();
  }
  return GIANTS.slice().concat(ANIMALS);
});
function queries(limit: number) {
  return shuffle(listValues.value).slice(0, limit);
}
async function runQueries(iterations: number) {
  const rateDelay = 1000 * 60 * rated.value;
  const w = window.open('', '_blank');
  if (!w) return;
  for (let i = 0; i < iterations; i++) {
    const shuffled = queries(limit.value);
    for (const q of shuffled) {
      if (!w) break;
      await openQuery(q, w, DEFAULT_DELAY);
    }
    if (i < iterations - 1) {
      await new Promise((r) => setTimeout(r, rateDelay));
    }
  }
  if (w) w.close();
}

async function runRateLimited() {
  limit.value = 5;
  runQueries(10);
}
async function openQuery(query: string, win: Window, msDelay: number) {
  const url = `https://www.bing.com/search?q=${query}&form=QBLH&sp=-1&ghc=1&lq=0&sc=11-14&qs=n&sk=&ghsh=0&ghacc=0&ghpl=`;
  win.location.href = url;
  await new Promise((r) => setTimeout(r, msDelay));
}
</script>
