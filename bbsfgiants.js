const GIANTS = ["David Aardsma",
"Fernando Abad",
"Woody Abernathy",
"Tony Abreu",
"Jeremy Accardo",
"Cristhian Adames",
"Ace Adams",
"Glenn Adams",
"Ricky Adams",
"Ehíré Adríanza",
"Jeremy Affeldt",
"Eddie Ainsmith",
"Kurt Ainsworth",
"Mike Aldrete",
"Vic Aldridge",
"Doyle Alexander",
"Gary Alexander",
"Scott Alexander",
"Edgardo Alfonzo",
"Eliézer Alfonzo",
"Andy Allanson",
"Ethan Allen",
"Johnny Allen",
"Myron Allen",
"Felipe Alou",
"Jesús Alou",
"Matty Alou",
"Moisés Alou",
"Aaron Altherr",
"José Álvarez",
"Wilson Álvarez",
"Joey Amalfitano",
"Red Ames",
"Dave Anderson",
"Fred Anderson",
"Shaun Anderson",
"Tyler Anderson",
"Hub Andrews",
"Nate Andrews",
"Rob Andrews",
"Johnny Antonelli",
"Nori Aoki",
"Luis Aquino",
"Jack Aragon",
"Joaquín Árias",
"Chris Arnold",
"Morrie Arnovich",
"René Arocha",
"Christian Arroyo",
"Scott Atchison",
"Rich Aurilia",
"Tyler Austin",
"Abiatal Avelino",
"Manny Aybar",
"Bill Ayers",
"B",
"Charlie Babb",
"Charlie Babington",
"Lore Bader",
"Cory Bailey",
"Ed Bailey",
"Mark Bailey",
"Patrick Bailey",
"Loren Bain",
"Al Baird",
"Doug Baird",
"Dusty Baker",
"Howard Baker",
"Tom Baker",
"Harry Baldwin",
"Mark Baldwin",
"Jeff Ball",
"George Bamberger",
"Dave Bancroft",
"Tom Bannon",
"Caleb Baragar",
"Steve Barber",
"Curt Barclay",
"Babe Barna",
"Jesse Barnes",
"Virgil Barnes",
"Bob Barr",
"Jim Barr",
"Kyle Barraclough",
"Jose Barrios",
"Shad Barry",
"Joey Bart",
"Dick Bartell",
"Bill Bartley",
"Bob Barthelson",
"Bob Barton",
"Shawn Barton",
"Luis Alexander Basabe",
"Kevin Bass",
"Charley Bassett",
"Bill Bathe",
"Kim Batiste",
"Larry Battam",
"Denny Bautista",
"José Bautista",
"Joe Bean",
"Desmond Beatty",
"Matt Beaty",
"Buck Becannon",
"Rod Beck",
"Tristan Beck",
"Beals Becker",
"Marty Becker",
"Gordon Beckham",
"Jake Beckley",
"Steve Bedrosian",
"Roy Beecher",
"Tyler Beede",
"Chris Begg",
"Joe Beggs",
"Ed Begley",
"Gene Begley",
"Hank Behrman",
"David Bell",
"Hi Bell",
"Brandon Belt",
"Carlos Beltrán",
"Marvin Benard",
"Armando Benítez",
"Mike Benjamin",
"Jack Bentley",
"Larry Benton",
"Rube Benton",
"Todd Benzinger",
"Juan Berenguer",
"Travis Bergen",
"Wally Berger",
"Dave Bergman",
"Jack Berly",
"Curt Bernard",
"Ray Berres",
"Joe Berry",
"Damon Berryhill",
"Dick Bertell",
"Bob Bescher",
"Ty Blach",
"Bud Black",
"Ray Black",
"Travis Blackley",
"Rae Blaemire",
"Dámaso Blanco",
"Gregor Blanco",
"Don Blasingame",
"Buddy Blattner",
"Marv Blaylock",
"Bob Blewett",
"Vida Blue",
"Clint Blume",
"John Boccabella",
"Brett Bochy",
"Randy Bockus",
"Brian Bocock",
"Brian Boehringer",
"Carl Boles",
"Bobby Bolin",
"Skye Bolt",
"Barry Bonds",
"Bobby Bonds",
"Henry Boney",
"Zeke Bonura",
"Greg Booker",
"Ike Boone",
"Pedro Borbón",
"Bill Bordley",
"Andy Boswell",
"Kent Bottenfield",
"Steve Bourgeois",
"Chris Bourjos",
"Chick Bowen",
"Cy Bowen",
"Frank Bowerman",
"John Bowker",
"Bob Bowman",
"Ernie Bowman",
"Joe Bowman",
"Roger Bowman",
"Jack Boyle",
"Jimmy Boyle",
"Vic Bradford",
"Tom Bradley",
"Dave Brain",
"Fred Brainard",
"Jackie Brandt",
"Jeff Brantley",
"Rob Brantly",
"John Brebbia",
"Fred Breining",
"Bob Brenly",
"Don Brennan",
"Roger Bresnahan",
"Eddie Bressoud",
"Jack Brewer",
"Jamie Brewington",
"Al Bridwell",
"Brad Brink",
"Lewis Brinson",
"Mike Broadway",
"Chris Brock",
"Steve Brodie",
"Troy Brohawn",
"Ken Brondell",
"Terry Bross",
"Dan Brouthers",
"Jim Brower",
"Chris Brown",
"Eddie Brown",
"Gary Brown",
"Jake Brown",
"Jim Brown",
"Jumbo Brown",
"Ollie Brown",
"Trevor Brown",
"William Brown",
"George Browne",
"Greg Brummett",
"Kris Bryant",
"Ron Bryant",
"Garland Buckeye",
"Dick Buckley",
"Mike Budnick",
"Charlie Buelow",
"Madison Bumgarner",
"Dave Burba",
"Bob Burda",
"Enrique Burgos",
"Eddie Burke",
"Frank Burke",
"John Burke",
"Jesse Burkett",
"John Burkett",
"Ellis Burks",
"George Burns",
"Oyster Burns",
"Pete Burnside",
"Buster Burrell",
"Pat Burrell",
"Emmanuel Burriss",
"Bullet Joe Bush",
"Brett Butler",
"Frank Butler",
"Bud Byerly",
"Marlon Byrd",
"C",
"Enos Cabell",
"Melky Cabrera",
"Orlando Cabrera",
"Leon Cadore",
"Trevor Cahill",
"Matt Cain",
"Sam Calderone",
"Mike Caldwell",
"Willie Calhoun",
"Orlando Calixte",
"Jim Callahan",
"Mark Calvert",
"Ernie Camacho",
"Johan Camargo",
"Sal Campfield",
"Jay Canizaro",
"Ben Cantwell",
"John Carden",
"José Cardenal",
"Roger Carey",
"Dan Carlson",
"Steve Carlton",
"Bob Carpenter",
"Mark Carreon",
"Bill Carrick",
"Don Carrithers",
"Kid Carsey",
"Blackie Carter",
"Gary Carter",
"Joe Carter",
"Larry Carter",
"Curt Casali",
"Ed Caskin",
"Santiago Casilla",
"Alberto Castillo",
"José Castillo",
"Foster Castleman",
"Slick Castleman",
"Kervin Castro",
"Red Causey",
"Orlando Cepeda",
"Leon Chagnon",
"Tiny Chaplin",
"Hal Chase",
"Ken Chase",
"Tyler Chatwood",
"Ángel Chávez",
"Néstor Chávez",
"Virgil Cheeves",
"Lou Chiozza",
"Don Choate",
"Mike Chris",
"Justin Christian",
"Jason Christiansen",
"Vinnie Chulk",
"Bill Cissell",
"John Clapp",
"Doug Clark",
"Jack Clark",
"Roy Clark",
"Watty Clark",
"Will Clark",
"Willie Clark",
"Artie Clarke",
"Boileryard Clarke",
"Dad Clarke",
"Bill Clarkson",
"Dad Clarkson",
"Royce Clayton",
"Elmer Cleveland",
"Ty Cline",
"Gil Coan",
"Alex Cobb",
"Dick Coffman",
"Dick Cogan",
"Andy Cohen",
"Jimmie Coker",
"Craig Colbert",
"Tom Colcolough",
"Joe Coleman",
"Darnell Coles",
"Tyler Colvin",
"Pete Compton",
"Keith Comstock",
"Michael Conforto",
"Frank Connaughton",
"Joe Connell",
"Bill Connelly",
"Joe Connolly",
"Roger Connor",
"Jim Constable",
"Sandy Consuegra",
"Jack Conway",
"Dennis Cook",
"Bobby Coombs",
"Jimmy Cooney",
"Sam Coonrod",
"Brian Cooper",
"Claude Cooper",
"Mort Cooper",
"Walker Cooper",
"Larry Corcoran",
"Tommy Corcoran",
"Erik Cordier",
"Jeff Cornell",
"Terry Cornutt",
"Kevin Correia",
"Al Corwin",
"Pete Cote",
"Jharel Cotton",
"Roscoe Coughlin",
"Dick Cramer",
"Del Crandall",
"Doc Crandall",
"Ed Crane",
"Sam Crane",
"Brandon Crawford",
"Pat Crawford",
"Doug Creek",
"Pete Cregan",
"Felipe Crespo",
"Kyle Crick",
"Hughie Critz",
"Ray Crone",
"Jack Cronin",
"Buddy Crump",
"Deivi Cruz",
"Héctor Cruz",
"Jacob Cruz",
"José Cruz Jr.",
"Al Cuccinello",
"Tony Cuccinello",
"Johnny Cueto",
"Charlie Culberson",
"Dick Culler",
"John Cumberland",
"Bill Cunningham",
"Harry Curtis",
"John Curtis",
"Mike Cvengros",
"D",
"John D'Acquisto",
"Bill Dahlen",
"Ed Daily",
"Brian Dallimore",
"George Daly",
"Harry Danning",
"Alvin Dark",
"Chase d'Arnaud",
"Danny Darwin",
"Claude Davenport",
"Jim Davenport",
"Chick Davies",
"George Davies",
"Chili Davis",
"Eric Davis",
"George Davis",
"Harry Davis",
"Ira Davis",
"J. D. Davis",
"Jaylin Davis",
"Jim Davis",
"John Davis",
"Kiddo Davis",
"Mark Davis",
"Rajai Davis",
"Red Davis",
"Ron Davis",
"Russ Davis",
"Mike Davison",
"Tomás de la Rosa",
"Austin Dean",
"Paul Dean",
"Wayland Dean",
"Pat Deasley",
"Alejandro De Aza",
"Steve Decker",
"Dummy Deegan",
"Rob Deer",
"Iván DeJesús",
"Paul DeJong",
"Bill Dekoning",
"Miguel del Toro",
"Jim Delahanty",
"Wilson Delgado",
"Rich DeLucia",
"Al Demaree",
"Frank Demaree",
"Mark Dempsey",
"Travis Denker",
"Jerry Denny",
"Roger Denzer",
"Mark DeRosa",
"Anthony DeSclafani",
"Jim Deshaies",
"Mickey Devine",
"Art Devlin",
"Jim Devlin",
"Josh Devore",
"Al DeVormer",
"Mark Dewey",
"Alex Diaz",
"Isan Díaz",
"Alex Dickerson",
"Johnny Dickshot",
"Walt Dickson",
"Chuck Diering",
"Dick Dietz",
"Vince DiMaggio",
"Ed Doheny",
"Cozy Dolan",
"Chris Dominguez",
"Red Donahue",
"Mike Donlin",
"Jim Donnelly",
"Pete Donohue",
"Red Dooin",
"Mickey Doolan",
"Mike Dorgan",
"Phil Douglas",
"Camilo Doval",
"Kelly Downs",
"Matt Downs",
"Jack Doyle",
"Larry Doyle",
"Dave Dravecky",
"Clem Dreisewerd",
"Chuck Dressen",
"Rob Dressler",
"Dan Driessen",
"Louis Drucke",
"Mauricio Dubón",
"Jean Dubuc",
"Jim Duffalo",
"Frank Duffy",
"Matt Duffy",
"Steven Duggar",
"Jack Dunn",
"Andy Dunning",
"Jake Dunning",
"Shawon Dunston",
"Bull Durham",
"Ray Durham",
"Adam Duvall",
"Jim Dwyer",
"Ben Dyer",
"Sam Dyson",
"E",
"Hugh East",
"Steve Edlefsen",
"Bob Elliott",
"Claude Elliott",
"Randy Elliott",
"Jason Ellison",
"Alan Embree",
"Slim Emmerich",
"Charlie English",
"Gil English",
"Eric Erickson",
"Paul Erickson",
"Ángel Escobar",
"Geno Espineli",
"Bobby Estalella",
"Dick Estelle",
"Dude Esterbrook",
"Shawn Estes",
"Thairo Estrada",
"Leo Estrella",
"Bobby Etheridge",
"Darrell Evans",
"Roy Evans",
"Steve Evans",
"Hoot Evers",
"Joe Evers",
"Buck Ewing",
"John Ewing",
"Scott Eyre",
"F",
"Stuart Fairchild",
"Pete Falcone",
"Rikkert Faneyte",
"Paul Faries",
"Bob Farley",
"Doc Farrell",
"Duke Farrell",
"Jeff Fassero",
"Bill Faul",
"Jim Faulkner",
"Charlie Faust",
"Tim Federowicz",
"Mike Felder",
"Harry Feldman",
"Harry Felix",
"Pedro Feliz",
"George Ferguson",
"Osvaldo Fernández",
"Jocko Fields",
"Luis Figueroa",
"Steve Filipowicz",
"Jim Finigan",
"Bill Finley",
"Steve Finley",
"Rube Fischer",
"Leo Fishel",
"Chauncey Fisher",
"Don Fisher",
"Eddie Fisher",
"Jack Fisher",
"John Fitzgerald",
"Matty Fitzgerald",
"Tyler Fitzgerald",
"Freddie Fitzsimmons",
"Tom Fleming",
"Art Fletcher",
"Paul Florence",
"Wilmer Flores",
"Carney Flynn",
"Ray Foley",
"Tim Foli",
"Mike Fontenot",
"Jesse Foppert",
"Darren Ford",
"Mike Ford",
"Frank Foreman",
"Elmer Foster",
"George Foster",
"Pop Foster",
"Reddy Foster",
"Keith Foulke",
"Alan Fowlkes",
"Charlie Fox",
"Enderson Franco",
"Jeff Francoeur",
"Kevin Frandsen",
"Wayne Franklin",
"Herman Franks",
"Lonny Frey",
"Steve Frey",
"Charlie Frisbee",
"Frankie Frisch",
"Art Fromme",
"Tito Fuentes",
"Shorty Fuller",
"Chick Fullis",
"Aaron Fultz",
"G",
"Frank Gabler",
"Len Gabrielson",
"Augie Galan",
"Andrés Galarraga",
"Rich Gale",
"Al Gallagher",
"John Ganzel",
"Joe Garagiola",
"Aramis Garcia",
"Jarlin García",
"Rico Garcia",
"Al Gardella",
"Danny Gardella",
"Art Gardner",
"Billy Gardner",
"Mark Gardner",
"Bob Garibaldi",
"Ryan Garko",
"Phil Garner",
"Willie Garoni",
"Scott Garrelts",
"Gil Garrido",
"Alex Gaston",
"Chad Gaudin",
"Kevin Gausman",
"Gary Gearhart",
"Dinty Gearin",
"Cory Gearrin",
"Johnny Gee",
"Joe Genewich",
"Scooter Gennett",
"Harvey Gentry",
"Bill George",
"Oscar Georgy",
"Mike Gerber",
"Joe Gerhardt",
"Les German",
"Al Gettel",
"Charlie Gettig",
"George Gibson",
"Joe Gibbon",
"Russ Gibson",
"Sam Gibson",
"Paul Giel",
"Dan Giese",
"Billy Gilbert",
"Jack Gilbert",
"Tookie Gilbert",
"Cole Gillespie",
"Conor Gillaspie",
"Pete Gillespie",
"Jim Gladd",
"Dan Gladden",
"Jack Glasscock",
"Kid Gleason",
"Ed Glenn",
"Al Glossop",
"Wayne Gomes",
"Miguel Gómez",
"Pat Gomez",
"Randy Gomez",
"Roberto Gómez",
"Rubén Gómez",
"Luis González",
"Mike González",
"Ed Goodson",
"Tom Goodwin",
"Sid Gordon",
"George Gore",
"Tom Gorman",
"Rich Gossage",
"Jim Gott",
"Trevor Gott",
"Ted Goulait",
"Hank Gowdy",
"Mike Grady",
"Jack Graham",
"Moonlight Graham",
"Eddie Grant",
"Mark Grant",
"George Grantham",
"Mickey Grasso",
"David Green",
"Grant Green",
"Zach Green",
"Todd Greene",
"Kent Greenfield",
"Kenny Greer",
"Hal Gregg",
"Pug Griffin",
"Sandy Griffin",
"Tom Griffin",
"Burleigh Grimes",
"Roy Grimes",
"Marquis Grissom",
"Marv Grissom",
"Dick Groat",
"Heinie Groh",
"Tom Grubbs",
"José Guillén",
"Brad Gulden",
"Harry Gumbert",
"Eric Gunderson",
"Jandel Gustave",
"César Gutiérrez",
"Juan Gutiérrez",
"Edwards Guzman",
"Jesús Guzmán",
"H",
"Yamid Haad",
"Bert Haas",
"Eric Hacker",
"Bump Hadley",
"Bill Haeffner",
"Tom Hafey",
"Odell Hale",
"Ed Halicki",
"Bill Hall",
"Bob Hall",
"Cody Hall",
"Mel Hall",
"Tom Haller",
"Jack Hallett",
"Jim Hamby",
"Darryl Hamilton",
"Steve Hamilton",
"Atlee Hammaker",
"Jeffrey Hammonds",
"Bill Hands",
"Mitch Haniger",
"Frank Hankinson",
"Jack Hannifin",
"Andy Hansen",
"Alen Hanson",
"Scott Hardesty",
"Red Hardy",
"Alan Hargesheimer",
"George Harper",
"John Harrell",
"Ray Harrell",
"Gail Harris",
"Vic Harris",
"Kyle Harrison",
"Jack Harshman",
"Jim Ray Hart",
"Dean Hartgraves",
"Chick Hartley",
"Grover Hartley",
"Fred Hartman",
"Gabby Hartnett",
"Clint Hartung",
"Mickey Haslin",
"Gil Hatfield",
"George Hausmann",
"LaTroy Hawkins",
"Pink Hawley",
"Charlie Hayes",
"Ray Hayworth",
"Fran Healy",
"Francis Healy",
"Bunn Hearn",
"Jim Hearn",
"Dave Heaverlo",
"Jim Hegan",
"Bud Heine",
"Tyler Heineman",
"Tom Heintzelman",
"Bob Heise",
"Heath Hembree",
"Ed Hemingway",
"Dave Henderson",
"Ken Henderson",
"Bob Hendley",
"Ed Hendricks",
"Jack Hendricks",
"Butch Henline",
"Brad Hennessey",
"Bill Henry",
"Doug Henry",
"Dutch Henry",
"John Henry",
"Chuck Hensley",
"Clay Hensley",
"Ron Herbel",
"Fred Herbert",
"Gil Heredia",
"Matt Herges",
"Dustin Hermanson",
"Gorkys Hernández",
"Liván Hernández",
"Roberto Hernández",
"Larry Herndon",
"Tom Herr",
"Orel Hershiser",
"Buck Herzog",
"Larry Hesterfer",
"Chris Heston",
"Joe Heving",
"Jack Hiatt",
"Bryan Hickerson",
"Charlie Hickman",
"Brandon Hicks",
"Kirby Higbe",
"Mahlon Higbee",
"Aaron Hill",
"Carmen Hill",
"Glenallen Hill",
"Marc Hill",
"Shea Hillenbrand",
"Chuck Hiller",
"Frank Hiller",
"Alex Hinshaw",
"Sean Hjelle",
"Billy Hoeft",
"Bobby Hofman",
"Shanty Hogan",
"Walter Holke",
"Al Holland",
"Derek Holland",
"Mul Holland",
"Steve Holm",
"Ducky Holmes",
"Chris Hook",
"Rogers Hornsby",
"Joe Hornung",
"Brian Horwitz",
"Steve Hosey",
"Jim Howarth",
"Shorty Howe",
"Bill Howerton",
"Bob Howry",
"Waite Hoyt",
"Trenidad Hubbard",
"Bill Hubbell",
"Carl Hubbell",
"Willis Hudlin",
"Johnny Hudson",
"Tim Hudson",
"Al Huenke",
"Aubrey Huff",
"David Huff",
"John Humphries",
"Nick Hundley",
"Randy Hundley",
"Bill Hunnefield",
"Ron Hunt",
"Herb Hunter",
"Walt Huntzinger",
"Jae-gyun Hwang",
"I",
"Hooks Iott",
"Monte Irvin",
"Travis Ishikawa",
"Mike Ivie",
"J",
"Ray Jablonski",
"Austin Jackson",
"Jay Jackson",
"Jim Jackson",
"Luke Jackson",
"Mike Jackson",
"Travis Jackson",
"Merwin Jacobson",
"Art Jahn",
"Bernie James",
"Chris James",
"Skip James",
"Larry Jansen",
"Stan Javier",
"Tex Jeanes",
"Mike Jeffcoat",
"Marcus Jensen",
"Ryan Jensen",
"Williams Jerez",
"Dany Jiménez",
"Waldis Joaquín",
"Connor Joe",
"Art Johnson",
"Brian Johnson",
"Bryce Johnson",
"Don Johnson",
"Elmer Johnson",
"Erik Johnson",
"Frank Johnson",
"Fred Johnson",
"Jerry Johnson",
"Jim Johnson",
"Pierce Johnson",
"Randy Johnson",
"Wallace Johnson",
"Youngy Johnson",
"Greg Johnston",
"Jimmy Johnston",
"John Johnstone",
"Roy Joiner",
"Bumpus Jones",
"Chris Jones (1980s outfielder)",
"Chris Jones (1990s outfielder)",
"Dax Jones",
"Gordon Jones",
"Jim Jones",
"Johnny Jones",
"Ryder Jones",
"Sam Jones",
"Sheldon Jones",
"Sherman Jones",
"Tracy Jones",
"Claude Jonnard",
"Buck Jordan",
"Spider Jorgensen",
"Corban Joseph",
"Von Joshua",
"Bill Joyce",
"Bob Joyce",
"Ralph Judd",
"Jeff Juden",
"Jakob Junis",
"Ed Jurak",
"Billy Jurges",
"K",
"Alex Kampouris",
"Ray Katt",
"Benny Kauff",
"Tony Kaufmann",
"Scott Kazmir",
"Bob Kearney",
"Tim Keefe",
"Willie Keeler",
"Duke Kelleher",
"Casey Kelly",
"George Kelly",
"King Kelly",
"Brickyard Kennedy",
"Monte Kennedy",
"Terry Kennedy",
"Jeff Kent",
"Jeff Keppinger",
"Buddy Kerr",
"Mike Kickham",
"Roger Kieschnick",
"Pete Kilduff",
"Red Killefer",
"Jim King",
"Lee King",
"Silver King",
"Mike Kingery",
"Brian Kingman",
"Dave Kingman",
"Matt Kinney",
"Bob Kinsella",
"La Rue Kirby",
"Jay Kirke",
"Willie Kirkland",
"Al Klawitter",
"Ryan Klesko",
"Ron Kline",
"Steve Kline",
"Joe Klinger",
"Clyde Kluttz",
"Andrew Knapp",
"Frank Knauss",
"Bob Knepper",
"Justin Knoedler",
"Jimmy Knowles",
"Brad Kocher",
"Pip Koehler",
"Len Koenecke",
"Mark Koenig",
"Brad Komminsk",
"Alex Konikowski",
"George Kontos",
"Wally Kopf",
"Dave Koslo",
"Jack Kramer",
"Erik Kratz",
"Jack Kraus",
"Red Kress",
"Jason Krizan",
"Ernie Krueger",
"Mike Krukow",
"Harvey Kuenn",
"Duane Kuiper",
"Randy Kutcher",
"L",
"Bob Lacey",
"Mike LaCoss",
"Joe Lafata",
"Mike Laga",
"Dick Lajeskie",
"Tom Lampkin",
"Rick Lancellotti",
"Hobie Landrith",
"Don Landrum",
"Hal Lanier",
"Max Lanier",
"Dave LaPoint",
"Norm Larker",
"Pat Larkin",
"Don Larsen",
"Bill Laskey",
"Tommy La Stella",
"Arlie Latham",
"Tacks Latimer",
"Billy Lauder",
"Gary Lavelle",
"Derek Law",
"Garland Lawing",
"Tim Layana",
"Les Layton",
"Tony Lazzeri",
"Freddy Leach",
"Jalal Leach",
"Rick Leach",
"Mike Leake",
"Fred Lear",
"Ricky Ledée",
"Roy Lee",
"Thornton Lee",
"Al Lefevre",
"Craig Lefferts",
"Hank Leiber",
"Mark Leiter",
"Dummy Leitner",
"Johnnie LeMaster",
"Dick LeMay",
"Bob Lennon",
"Jeffrey Leonard",
"Mark Leonard",
"Dominic Leone",
"Randy Lerch",
"Sam Leslie",
"Al Levine",
"Darren Lewis",
"Fred Lewis",
"Mark Lewis",
"Don Liddle",
"Tim Lincecum",
"Todd Linden",
"Freddie Lindstrom",
"Scott Linebrink",
"Frank Linzy",
"Zack Littell",
"Dick Littlefield",
"Dennis Littlejohn",
"Greg Litton",
"Mickey Livingston",
"Jake Livingstone",
"Mauricio Llovera",
"Hans Lobert",
"Whitey Lockman",
"Billy Loes",
"Kenny Lofton",
"Jack Lohrke",
"Bill Lohrman",
"Ryan Lollis",
"Ernie Lombardi",
"Lou Lombardo",
"Dale Long",
"Sammy Long",
"Evan Longoria",
"Javier López",
"Bill Loughran",
"Shane Loux",
"Terrell Lowery",
"Noah Lowry",
"Hal Luby",
"Red Lucas",
"Ray Lucas",
"Marco Luciano",
"Trey Lunsford",
"Dolf Luque",
"Mike Lynch",
"Red Lynn",
"Denny Lyons",
"Harry Lyons",
"M",
"Malcolm MacDonald",
"Dixon Machado",
"Jean Machi",
"Ken MacKenzie",
"Waddy Macphee",
"Garry Maddox",
"Ed Madjeski",
"Bill Madlock",
"Bill Magee",
"Sal Maglie",
"Freddie Maguire",
"Jack Maguire",
"Jim Mahady",
"Bill Malarkey",
"Joe Malay",
"Candy Maldonado",
"Jim Mallory",
"Sean Manaea",
"Gus Mancuso",
"Jim Mangan",
"Leo Mangum",
"Charlie Manlove",
"Les Mann",
"Kirt Manwaring",
"Georges Maranda",
"Firpo Marberry",
"Joe Margoneri",
"Juan Marichal",
"Rube Marquard",
"Chris Marrero",
"Dave Marshall",
"Doc Marshall (C)",
"Doc Marshall (IF)",
"Jim Marshall",
"Willard Marshall",
"Yunior Marte",
"Frank Martin",
"Jerry Martin",
"Joe Martin",
"Renie Martin",
"Dave Martinez",
"Joe Martinez",
"Ramón Martínez (IF)",
"Don Mason",
"Roger Mason",
"Mike Matheny",
"Christy Mathewson",
"Mark Mathias",
"Luis Matos",
"Osiris Matos",
"Henry Mathewson",
"Gary Matthews",
"Mike Mattimore",
"Al Maul",
"Ernie Maun",
"Bert Maxwell",
"Justin Maxwell",
"Milt May",
"Buster Maynard",
"Brent Mayne",
"Eddie Mayo",
"Carl Mays",
"Willie Mays",
"Vin Mazzaro",
"Algie McBride",
"Windy McCall",
"Randy McCament",
"Roger McCardell",
"Joe McCarthy",
"Johnny McCarthy",
"David McCarty",
"Lew McCarty",
"Scott McClain",
"Paul McClellan",
"Mike McCormick (OF)",
"Mike McCormick (P)",
"Moose McCormick",
"Willie McCovey",
"Tom McCreery",
"Andrew McCutchen",
"Lindy McDaniel",
"Sam McDowell",
"Andy McGaffigan",
"Dan McGann",
"Bill McGee",
"Jake McGee",
"Willie McGee",
"Casey McGehee",
"Joe McGinnity",
"Lynn McGlothen",
"Mickey McGowan",
"John McGraw",
"Bill McKechnie",
"Alex McKinnon",
"Art McLarney",
"Larry McLean",
"Don McMahon",
"Jack McMahon",
"George McMillan",
"Hugh McMullen",
"Jim McNamara",
"Tim McNamara",
"Frank McPartlin",
"Hugh McQuillan",
"Charlie Mead",
"Wade Meckler",
"Brandon Medders",
"Joe Medwick",
"Jouett Meekin",
"Mark Melancon",
"Francisco Meléndez",
"Juan Melo",
"Cliff Melton",
"Bob Melvin",
"Jock Menefee",
"Tony Menendez",
"Conner Menez",
"Luis Mercedes",
"Yermín Mercedes",
"Win Mercer",
"Fred Merkle",
"John Merritt",
"Sam Mertes",
"José Mesa",
"Randy Messenger",
"Butch Metzger",
"Roger Metzger",
"Irish Meusel",
"Chief Meyers",
"Jim Middleton",
"José Mijares",
"Bruce Miller",
"Jim Miller",
"Justin Miller",
"Roscoe Miller",
"Shelby Miller",
"Stu Miller",
"Whitey Miller",
"Billy Milligan",
"Jocko Milligan",
"Willie Mills",
"Pete Milne",
"Eddie Milner",
"Damon Minor",
"Greg Minton",
"Steve Mintz",
"Gino Minutelli",
"Doug Mirabelli",
"Pat Misch",
"Clarence Mitchell",
"Kevin Mitchell",
"Johnny Mize",
"Randy Moffitt",
"Dustan Mohr",
"Bengie Molina",
"Bill Monbouquette",
"Carlos Moncrief",
"Johnny Monell",
"John Monroe",
"Willie Montañez",
"John Montefusco",
"Rich Monteleone",
"Ramon Monzant",
"Jim Mooney",
"Al Moore",
"Bobby Moore",
"Eddie Moore",
"Euel Moore",
"Jo-Jo Moore",
"Matt Moore",
"Joe Morgan",
"Alvin Morman",
"Reyes Moronta",
"Bill Morrell",
"Bryan Morris",
"John Morris",
"Matt Morris",
"Michael Morse",
"Guillermo Moscoso",
"Damian Moss",
"Howie Moss",
"Guillermo Mota",
"Manny Mota",
"Bill Mueller",
"Don Mueller",
"Heinie Mueller",
"Ray Mueller",
"Billy Muffett",
"Terry Mulholland",
"Fran Mullins",
"Van Mungo",
"Scott Munter",
"Masanori Murakami",
"Bobby Murcer",
"Bob Murphy",
"Danny Murphy (C)",
"Danny Murphy (IF)",
"Frank Murphy",
"Pat Murphy",
"Yale Murphy",
"Calvin Murray",
"Red Murray",
"Rich Murray",
"George Myatt",
"Glenn Myatt",
"N",
"Xavier Nady",
"Philip Nastu",
"Joe Nathan",
"Offa Neal",
"Tom Needham",
"Art Nehf",
"Candy Nelson",
"Ray Nelson",
"Robb Nen",
"Charlie Newman",
"Bobo Newsom",
"Chet Nichols, Sr.",
"Roy Nichols",
"Steve Nicosia",
"Bert Niehoff",
"Lance Niekro",
"Bob Nieman",
"Donell Nixon",
"Ray Noble",
"Matt Nokes",
"Nick Noonan",
"Billy North",
"Rafael Novoa",
"Eduardo Núñez",
"O",
"Ken Oberkfell",
"Tom O'Brien",
"Ivan Ochoa",
"Walter Ockey",
"Danny O'Connell",
"Jimmy O'Connell",
"Hank O'Day",
"Ken O'Dea",
"Billy O'Dell",
"Lefty O'Doul",
"Joe Oeschger",
"Bob O'Farrell",
"Jack Ogden",
"Hal O'Hagan",
"Bill O'Hara",
"Steven Okert",
"Al Oliver",
"Nate Oliver",
"Francisco Oliveras",
"Tom O'Malley",
"Randy O'Neal",
"Mickey O'Neil",
"John O'Neill",
"Tip O'Neill",
"Jack Onslow",
"Steve Ontiveros (IF)",
"Joe Orengo",
"Jim O'Rourke",
"Tom O'Rourke",
"Dave Orr",
"John Orsino",
"Luis Ortiz",
"Russ Ortiz",
"Dan Ortmeier",
"Josh Osich",
"Dan Otero",
"Marty O'Toole",
"Mel Ott",
"Phil Ouellette",
"Henry Oxley",
"P",
"Kevin Padlo",
"Ángel Pagán",
"José Pagán",
"Matt Palmer",
"Emilio Palmero",
"Joe Panik",
"Michael Papierski",
"Jarrett Parker",
"Rick Parker",
"Roy Parmelee",
"Gerardo Parra",
"Bronswell Patrick",
"John Patterson",
"Pat Patterson",
"Gene Paulette",
"Jake Peavy",
"Joc Pederson",
"Homer Peel",
"Francisco Peguero",
"Dan Peltier",
"Jim Pena",
"Ramiro Pena",
"Hunter Pence",
"Brad Penny",
"Wandy Peralta",
"Juan Pérez",
"Marty Perez",
"Neifi Pérez",
"Roberto Pérez",
"Tony Perezchica",
"Jon Perlman",
"Pol Perritt",
"Gaylord Perry",
"Cap Peterson",
"Yusmeiro Petit",
"Joe Pettini",
"Charlie Petty",
"Fred Pfeffer",
"Monte Pfyl",
"Dave Philley",
"Dick Phillips",
"Jack Phillips",
"J. R. Phillips",
"Mike Phillips",
"Bill Phyle",
"Mario Picone",
"Billy Pierce",
"Gracie Pierce",
"A. J. Pierzynski",
"Sandy Piez",
"Joe Pignatano",
"Jess Pike",
"Brett Pill",
"Kevin Pillar",
"Skip Pitlock",
"Joe Pittman",
"Emil Planeta",
"Ed Plank",
"Norman Plitt",
"Ray Poat",
"Joe Poetz",
"Hugh Poland",
"Lou Polli",
"A. J. Pollock",
"Drew Pomeranz",
"Sidney Ponson",
"Jim Poole",
"Ned Porter",
"Mark Portugal",
"Buster Posey",
"Brian Powell",
"Dante Powell",
"Les Powers",
"John Pregenzer",
"Joe Price (OF)",
"Joe Price (P)",
"Bob Priddy",
"Ford Proctor",
"Hub Pruett",
"Ron Pruitt",
"Miguel Puente",
"Brandon Puffer",
"John Puhl",
"Ewald Pyle",
"Q",
"Luis Quiñones",
"José Quintana",
"Guillermo Quiróz",
"Dan Quisenberry",
"R",
"John Rabb",
"Dave Rader",
"Pat Ragan",
"John Rainey",
"Gary Rajsich",
"Julio Ramírez",
"Neil Ramirez",
"Ramón Ramírez",
"Heliot Ramos",
"Cody Ransom",
"Jeff Ransom",
"Earl Rapp",
"Goldie Rapp",
"Pat Rapp",
"Bill Rariden",
"Johnny Rawlings",
"Chris Ray",
"Bugs Raymond",
"Frank Reberger",
"Glenn Redmon",
"Jeff Reed",
"Michael Reed",
"Steve Reed",
"Andy Reese",
"Joe Regan",
"Jessie Reid",
"Bill Reidy",
"Ken Reitz",
"Mike Remlinger",
"Marshall Renfroe",
"Édgar Rentería",
"Rick Reuschel",
"Nap Reyes",
"Matt Reynolds",
"Bobby Rhawn",
"Dusty Rhodes",
"Frank Riccelli",
"Gene Richards",
"Paul Richards",
"Danny Richardson",
"Hardy Richardson",
"Joey Rickard",
"Steve Ridzik",
"Dave Righetti",
"Bill Rigney",
"Ernest Riles",
"George Riley",
"Jimmy Ring",
"Armando Ríos",
"Allen Ripley",
"Jimmy Ripple",
"Hank Ritter",
"Rubén Rivera",
"Joe Roa",
"John Roach",
"Dave Roberts (OF)",
"Dave Roberts (P)",
"Daniel Robertson",
"Dave Robertson",
"Rich Robertson",
"Craig Robinson",
"Don Robinson",
"Jack Robinson",
"Jeff Robinson",
"Andre Rodgers",
"Eric Rodin",
"Carlos Rodón",
"Dereck Rodríguez",
"Félix Rodríguez",
"Guillermo Rodríguez",
"José Rodríguez",
"Rich Rodriguez",
"Rick Rodriguez",
"Ron Roenicke",
"Wally Roettger",
"Kevin Rogers",
"Taylor Rogers",
"Tyler Rogers",
"Ryan Rohlinger",
"Sergio Romo",
"John Roper",
"Jimmy Rosario",
"Sandy Rosario",
"Don Rose",
"Goody Rosen",
"Harry Rosenberg",
"Cody Ross",
"George Ross",
"Joe Rosselli",
"Frank Rosso",
"Edd Roush",
"Aaron Rowand",
"Mike Rowland",
"Johnny Rucker",
"Dick Rudolph",
"Ken Rudolph",
"Kirk Rueter",
"Darin Ruf",
"Rudy Rufer",
"Justin Ruggiano",
"Dan Runzler",
"Amos Rusie",
"Blondy Ryan",
"Connie Ryan",
"Rosy Ryan",
"S",
"Blake Sabol",
"Ray Sadecki",
"Mike Sadek",
"Billy Sadler",
"Ryan Sadowski",
"Slim Sallee",
"Jack Salveson",
"Manny Salvo",
"Jeff Samardzija",
"Ron Samford",
"Roger Samuels",
"Aaron Sanchez",
"Alejandro Sánchez",
"Alex Sánchez",
"Freddy Sanchez",
"Héctor Sánchez",
"Jonathan Sánchez",
"Rey Sánchez",
"Deion Sanders",
"Reggie Sanders",
"Scott Sanderson",
"Pablo Sandoval",
"Jack Sanford",
"Andrés Santana",
"F. P. Santangelo",
"Benito Santiago",
"Chad Santos",
"Francisco Santos",
"Gregory Santos",
"Bill Sarni",
"Mackey Sasser",
"Hank Sauer",
"Bill Sayles",
"Skeeter Scalzi",
"Mort Scanlan",
"Steve Scarsone",
"Ray Schalk",
"Bobby Schang",
"Dan Schatzeder",
"Rube Schauer",
"Mike Schemer",
"Hank Schenz",
"Nate Schierholtz",
"Admiral Schlei",
"Bob Schmidt",
"Jason Schmidt",
"Crazy Schmit",
"Casey Schmitt",
"Red Schoendienst",
"Ducky Schofield",
"Hank Schreiber",
"Pop Schriver",
"Bob Schroder",
"Hal Schumacher",
"Ferdie Schupp",
"Marco Scutaro",
"Jack Scott",
"Tim Scott",
"Doc Sechrist",
"Bob Seeds",
"José Segura",
"Kip Selbach",
"Sam Selman",
"Scott Servais",
"Scott Service",
"Frank Seward",
"Cy Seymour",
"Adam Shabala",
"Tillie Shafer",
"Spike Shannon",
"Jack Sharrott",
"Bob Shaw",
"Chris Shaw",
"Danny Shay",
"Red Shea",
"Jim Sheehan",
"Tommy Sheehan",
"Jimmie Sherfy",
"Pat Sheridan",
"Tsuyoshi Shinjo",
"Ralph Shinners",
"Joe Shipley",
"Ernie Shore",
"Bill Shores",
"Ed Sicking",
"Norm Siebern",
"Seth Sigsby",
"Dan Slania",
"Austin Slater",
"Mike Slattery",
"Scottie Slayback",
"Bruce Sloan",
"Al Smith (LHP)",
"Al Smith (RHP)",
"Aleck Smith",
"Billy Smith",
"Burch Smith",
"Chris Smith",
"Earl Smith",
"George Smith",
"Harry Smith",
"Heinie Smith",
"Jimmy Smith",
"Mike Smith (1890s OF)",
"Mike Smith (1920s OF)",
"Red Smith",
"Reggie Smith",
"Will Smith",
"Justin Smoak",
"Drew Smyly",
"D. J. Snelten",
"Duke Snider",
"Fred Snodgrass",
"Colonel Snover",
"J. T. Snow",
"Cory Snyder",
"Frank Snyder",
"Steve Soderstrom",
"Donovan Solano",
"Yangervis Solarte",
"Mose Solomon",
"Andy Sommers",
"Don Songer",
"Lary Sorensen",
"Billy Sorrell",
"Elías Sosa",
"Billy Southworth",
"Warren Spahn",
"Denard Span",
"Tully Sparks",
"Bob Speake",
"Horace Speed",
"Chris Speier",
"Daryl Spencer",
"George Spencer",
"Glenn Spencer",
"Roy Spencer",
"Vern Spencer",
"Harry Spilman",
"Al Spohrer",
"Jerry Spradlin",
"Ebba St. Claire",
"General Stafford",
"Heinie Stafford",
"Al Stanek",
"Eddie Stanky",
"Mike Stanton",
"Ray Starr",
"Jigger Statz",
"Bob Steele",
"Jim Steels",
"Jeff Stember",
"Casey Stengel",
"Rennie Stennett",
"Joe Stephenson",
"John Stephenson",
"Cal Stevenson",
"Chris Stewart",
"Glen Stewart",
"Milt Stock",
"Steve Stone",
"Allyn Stout",
"Joe Strain",
"Sammy Strang",
"Chris Stratton",
"Darryl Strawberry",
"Hunter Strickland",
"Ross Stripling",
"Sailor Stroud",
"Bill Stuart",
"Drew Stubbs",
"Albert Suárez",
"Andrew Suarez",
"Guy Sularz",
"Mike Sullivan",
"Champ Summers",
"Tom Sunkel",
"Eric Surkamp",
"Max Surkont",
"Andrew Susac",
"Bill Swarback",
"Russ Swan",
"Mark Sweeney",
"Bill Swift",
"Ad Swigler",
"Thomas Szapucki",
"T",
"John Tamargo",
"Kensuke Tanaka",
"Jack Taschner",
"Stu Tate",
"Mike Tauchman",
"Don Taussig",
"Julián Tavárez",
"Bill Taylor",
"Bob Taylor",
"Dummy Taylor",
"Jack Taylor",
"Zack Taylor",
"Miguel Tejada",
"Rubén Tejada",
"Jim Tennant",
"Fred Tenney",
"Bill Terry",
"Wayne Terwilliger",
"Jeff Tesreau",
"Nick Testa",
"Ryan Theriot",
"Henry Thielman",
"Derrel Thomas",
"Fay Thomas",
"Herb Thomas",
"Valmy Thomas",
"Gary Thomasson",
"Fresco Thompson",
"Hank Thompson",
"Junior Thompson",
"Robby Thompson",
"Scot Thompson",
"Bobby Thomson",
"Jim Thorpe",
"Erick Threets",
"Mark Thurmond",
"Mike Tiernan",
"Rusty Tillman",
"Clay Timpner",
"Ledell Titcomb",
"Johnny Tobin",
"Ka'ai Tom",
"Andy Tomasic",
"Brett Tomko",
"Kelby Tomlinson",
"Tommy Toms",
"Fred Toney",
"Tony Torcato",
"Yorvit Torrealba",
"Andrés Torres",
"Salomón Torres",
"Red Tramback",
"Red Treadway",
"Alex Treviño",
"Andrew Triggs",
"Manny Trillo",
"Ken Trinkle",
"Chadwick Tromp",
"Nick Tropeano",
"Dasher Troy",
"Michael Tucker",
"Bob Tufts",
"Ty Tyson",
"U",
"Dan Uggla",
"George Uhle",
"George Ulrich",
"Juan Uribe",
"José Uribe",
"V",
"Mike Vail",
"Carlos Valderrama",
"Carlos Valdéz",
"Jose Valdez",
"Merkin Valdéz",
"Sergio Valdéz",
"George Van Haltren",
"William Van Landingham",
"Ike Van Zandt",
"Hy Vandenberg",
"John Vander Wal",
"Andrew Vasquez",
"Eugenio Vélez",
"Pat Veltman",
"Max Venable",
"Pat Venditte",
"Johnny Vergez",
"David Villar",
"Nick Vincent",
"Ozzie Virgil, Sr.",
"José Vizcaíno",
"Omar Vizquel",
"Ryan Vogelsong",
"Stephen Vogt",
"Bill Voiselle",
"Ed Vosberg",
"Jason Vosler",
"W",
"Ham Wade",
"LaMonte Wade Jr.",
"Heinie Wagner",
"Leon Wagner",
"Cole Waites",
"Dick Wakefield",
"Rube Walberg",
"Bill Walker",
"Curt Walker",
"Frank Walker",
"Kevin Walker",
"Ryan Walker",
"Tyler Walker",
"Joe Wall",
"Red Waller",
"Donovan Walton",
"Colin Ward",
"Monte Ward",
"John Warner",
"Bennie Warren",
"Libe Washburn",
"Mark Wasinger",
"George Watkins",
"Allen Watson",
"Mule Watson",
"Tony Watson",
"Roy Weatherly",
"Jim Weaver",
"Earl Webb",
"Logan Webb",
"Red Webb",
"Ben Weber",
"Stump Weidman",
"Jake Weimer",
"Phil Weintraub",
"Mickey Welch",
"Todd Wellemeyer",
"Brad Wellman",
"Jimmy Welsh",
"Lew Wendell",
"Billy Werber",
"Huyler Westervelt",
"Wes Westrum",
"Lew Whistler",
"Steve Whitaker",
"Bill White",
"Fuzz White",
"Burgess Whitehead",
"Eli Whiteside",
"Terry Whitfield",
"Art Whitney",
"Ed Whitson",
"Floyd Wicker",
"Rob Wilfong",
"Hoyt Wilhelm",
"Joe Wilhoit",
"Rick Wilkins",
"Bernie Williams",
"Charlie Williams",
"Davey Williams",
"Frank Williams",
"Jackson Williams",
"Jerome Williams",
"Keith Williams",
"Luke Williams",
"Matt Williams",
"Mac Williamson",
"Jim Willoughby",
"Walt Wilmot",
"Art Wilson",
"Artie Wilson",
"Brian Wilson",
"Desi Wilson",
"George Wilson",
"Hack Wilson",
"Neil Wilson",
"Parke Wilson",
"Trevor Wilson",
"Hooks Wiltse",
"Keaton Winn",
"Randy Winn",
"Jesse Winters",
"Brett Wisely",
"Matt Wisler",
"Jack Wisner",
"Jay Witasick",
"Mickey Witek",
"Johnnie Wittig",
"Jim Wohlford",
"Alex Wood",
"Ted Wood",
"Mike Woodard",
"Pete Woodruff",
"Tim Worrell",
"Al Worthington",
"Jamey Wright",
"Roy Wright",
"Russ Wrightstone",
"Zeke Wrigley",
"Austin Wynns",
"X",
"Y",
"Keiichi Yabu",
"Mike Yastrzemski",
"George Yeager",
"Alex Young",
"Babe Young",
"Eric Young",
"Joel Youngblood",
"Ross Youngs",
"Sal Yvars",
"Z",
"Adrián Zabala",
"Elmer Zacher",
"Dom Zanni",
"Dave Zearfoss",
"Chad Zerbe",
"Heinie Zimmerman",
"Roy Zimmerman",
"Walter Zink",
"Barry Zito"]