async function openQuery(query, win, msDelay) {
  const url = `https://www.bing.com/search?q=${query}&form=QBLH&sp=-1&ghc=1&lq=0&sc=11-14&qs=n&sk=&ghsh=0&ghacc=0&ghpl=`;
  win.location.href = url;
  await new Promise((r) => setTimeout(r, msDelay));
}