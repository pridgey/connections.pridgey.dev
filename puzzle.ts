import { Category } from "@compositions";

const puzzles: Array<Category[]> = [
  [
    {
      Category: "MTG Land Types",
      Words: ["Mountains", "Plains", "Swamps", "Islands"],
    },
    {
      Category: "Forrest Gump Characters",
      Words: ["Jenny", "Forrest", "Lt. Dan", "Benjamin"],
    },
    {
      Category: "Types of Cookies",
      Words: ["Snickerdoodle", "Biscotti", "Linzer", "Gingersnap"],
    },
    {
      Category: "Cities in California",
      Words: ["Sausalito", "Irvine", "Fresno", "Modesto"],
    },
  ],
  [
    {
      Category: "Fictional Small Towns",
      Words: ["Sunnydale", "Stars Hollow", "Twin Peaks", "Smallville"],
    },
    {
      Category: "Midwestern Capitals",
      Words: ["Springfield", "Lansing", "Madison", "St. Paul"],
    },
    {
      Category: "American Painters",
      Words: ["O'Keeffe", "Pollock", "Rockwell", "Beirstadt"],
    },
    {
      Category: "Fourteeners",
      Words: ["Pikes", "Denali", "Rainier", "Huron"],
    },
  ],
  [
    {
      Category: "London Neighborhoods",
      Words: ["Hyde Park", "Mayrlebone", "Knightsbridge", "Kennsington"],
    },
    {
      Category: "Children's Characters",
      Words: ["Paddington", "Peter Pan", "Miffy", "Peter Rabbit"],
    },
    {
      Category: "Types of Collars",
      Words: ["Chelsea", "Cowl", "Turtleneck", "Mandarin"],
    },
    {
      Category: "Types of Oranges",
      Words: ["Valencia", "Navel", "Cara Cara", "Clementine"],
    },
  ],
  [
    {
      Category: "Card Games",
      Words: ["Rummy", "Poker", "Hearts", "Solitaire"],
    },
    {
      Category: "Pokemon Professors",
      Words: ["Oak", "Elm", "Kukui", "Willow"],
    },
    {
      Category: "Trees",
      Words: ["Pine", "Poplar", "Ginko", "Maple"],
    },
    {
      Category: "Words for: Happy",
      Words: ["Jocular", "Jovial", "Joyous", "Jubulant"],
    },
  ],
  [
    {
      Category: "Outdoor Clothing Brands",
      Words: ["North Face", "Patagonia", "Columbia", "Marmot"],
    },
    {
      Category: "South American Rivers",
      Words: ["Amazon", "Parana-Rio", "Orinoco", "Rio de la Plata"],
    },
    {
      Category: "Shipping Companies",
      Words: ["UPS", "Fedex", "DHL", "USPS"],
    },
    {
      Category: "Stock Market Abbreviations",
      Words: ["AMZN", "GOOG", "TSLA", "AAPL"],
    },
  ],
  [
    {
      Category: "Types of Coffee Drinks",
      Words: ["Americano", "Cappucinno", "Macchiato", "Mocha"],
    },
    {
      Category: "JoJo's Bizarre Adventure Characters",
      Words: ["Doppio", "Jotaro", "Dio Brando", "Giorno"],
    },
    {
      Category: "Steven King Books",
      Words: ["It", "Cujo", "Carrie", "Dreamcatcher"],
    },
    {
      Category: "Words for: Sad",
      Words: ["Dismal", "Agony", "Dispair", "Misery"],
    },
  ],
  [
    {
      Category: "Breeds of Cat",
      Words: ["Persian", "Ragdoll", "Scottish Fold", "Maine Coon"],
    },
    {
      Category: "Egyptian Mythology",
      Words: ["Ammit", "Medjed", "Sphinx", "Griffin"],
    },
    {
      Category: "Psychopomps",
      Words: ["Charon", "Shinigami", "Anubis", "Azrael"],
    },
    {
      Category: "Moons of Pluto",
      Words: ["Styx", "Nix", "Kerberos", "Hydra"],
    },
  ],
  [
    {
      Category: "Collective Nouns",
      Words: ["Clowder", "Swarm", "School", "Pride"],
    },
    {
      Category: "Military Groupings",
      Words: ["Troop", "Battalion", "Regiment", "Brigade"],
    },
    {
      Category: "Words for: Time",
      Words: ["Score", "Fortnight", "Decade", "Eon"],
    },
    {
      Category: "Online PVP Games",
      Words: ["Call of Duty", "Overwatch", "Destiny", "Apex"],
    },
  ],
  [
    {
      Category: "Batman Characters",
      Words: ["Riddler", "Robin", "Catwoman", "Poison Ivy"],
    },
    {
      Category: "Flightless Birds",
      Words: ["Penguin", "Ostrich", "Emu", "Kiwi"],
    },
    {
      Category: "Fruit You Don't Peel",
      Words: ["Peach", "Plum", "Apple", "Pear"],
    },
    {
      Category: "Poisonous Plants",
      Words: ["Jimsonweed", "Oleander", "Mistletoe", "Nightshade"],
    },
  ],
  [
    {
      Category: "Short For William",
      Words: ["Bill", "Will", "Liam", "Willie"],
    },
    {
      Category: "Slang For Money",
      Words: ["Bucks", "Dough", "Green", "Loot"],
    },
    {
      Category: "NBA Eastern Conference Teams",
      Words: ["Nets", "Heat", "Bulls", "Knicks"],
    },
    {
      Category: "MLB West Coast Teams",
      Words: ["Dodgers", "Padres", "Giants", "Mariners"],
    },
  ],
  [
    {
      Category: "Sweeteners",
      Words: ["Stevia", "Aspartame", "Agave", "Sorbitol"],
    },
    {
      Category: "Metallica Songs",
      Words: ["Black End", "Fuel", "Enter Sandman", "Battery"],
    },
    {
      Category: "Speakers of the House",
      Words: ["Foley", "Gingrich", "Pelosi", "Bochner"],
    },
    {
      Category: "Desert Plants",
      Words: ["Yucca", "Saguaro", "Joshua Trees", "Prickly Pear"],
    },
  ],
  [
    {
      Category: "Layers of the Rainforest",
      Words: ["Emergent", "Canopy", "Understory", "Forest Floor"],
    },
    {
      Category: "Types of Clouds",
      Words: ["Cirrus", "Stratus", "Cummulonimbus", "Nimbostratus"],
    },
    {
      Category: "Harry Potter Brooms",
      Words: ["Nimbus", "Cleansweep", "Comet", "Firebolt"],
    },
    {
      Category: "Dungeons & Dragons Spells",
      Words: ["Thunderclap", "Prestidigitation", "Arcane Eye", "Frostbite"],
    },
  ],
  [
    {
      Category: "European Capitals",
      Words: ["Helsinki", "Berlin", "Rome", "Paris"],
    },
    {
      Category: "Romeo & Juliet Characters",
      Words: ["Tybalt", "Mercutio", "Benvolio", "Friar Lawrence"],
    },
    {
      Category: "Nato Alphabet",
      Words: ["Romeo", "Yankee", "Whiskey", "Foxtrot"],
    },
    {
      Category: "Types of Dance",
      Words: ["Waltz", "Samba", "Flamenco", "Swing"],
    },
  ],
  [
    {
      Category: "Types of Triangles",
      Words: ["Isosceles", "Acute", "Scalene", "Obtuse"],
    },
    {
      Category: "Words For Small",
      Words: ["Modest", "Meager", "Paltry", "Slight"],
    },
    {
      Category: "DC Superheroes",
      Words: ["Zatanna", "Nightwing", "Shazam", "Starfire"],
    },
    {
      Category: "Publishers",
      Words: ["Random House", "HarperCollins", "Penguin", "Pearson"],
    },
  ],
  [
    {
      Category: "World Deserts",
      Words: ["Mojave", "Arabian", "Gobi", "Sahara"],
    },
    {
      Category: "Guitar Brands",
      Words: ["Gibson", "Fender", "Takamine", "Ibanze"],
    },
    {
      Category: "Regions of Japan",
      Words: ["Hokkaido", "Kyushu", "Honshu", "Okinawa"],
    },
    {
      Category: "Regions in Pokemon",
      Words: ["Kanto", "Alola", "Sinnoh", "Kalos"],
    },
  ],
  [
    {
      Category: "Beatles Songs",
      Words: ["Let It Be", "Yesterday", "Love Me Do", "Hey Jude"],
    },
    {
      Category: "Modern Aircraft",
      Words: ["Blackbird", "Super Hornet", "Goshawk", "Raptor"],
    },
    {
      Category: "Corvids",
      Words: ["Crow", "Blue Jay", "Magpie", "Raven"],
    },
    {
      Category: "Edgar Allen Poe Stories",
      Words: ["The Black Cat", "Lenore", "Annabel Lee", "The Tell Tale Heart"],
    },
  ],
  [
    {
      Category: "Women Authors",
      Words: ["Austen", "Woolf", "Bronte", "Shelly"],
    },
    {
      Category: "English Poets",
      Words: ["Wordsworth", "Byron", "Keets", "Blake"],
    },
    {
      Category: "Types of Rabbit",
      Words: ["Holland Lop", "Flemish Giant", "Cottontail", "Cashmere"],
    },
    {
      Category: "States of India",
      Words: ["Kerala", "Rajathan", "Orissa", "Uttar Pradesh"],
    },
  ],
  [
    {
      Category: "Rivers in Asia",
      Words: ["Yangtze", "Indus", "Ganges", "Tigris"],
    },
    {
      Category: "Gods related to Water",
      Words: ["Euphrates", "Anuket", "Poseidon", "Lir"],
    },
    {
      Category: "Replaced by the Euro",
      Words: ["Franc", "Lira", "Guilder", "Drachma"],
    },
    {
      Category: "National Flowers of in Europe",
      Words: ["Cornflower", "Iris", "Tulip", "Saxifage"],
    },
  ],
  [
    {
      Category: "Flowers That Symbolize Death",
      Words: ["Spider Lily", "Marigolds", "Chrysanthemum", "Red Poppy"],
    },
    {
      Category: "Love Dieties",
      Words: ["Freyja", "Cupid", "Aphrodite", "Yue-Lao"],
    },
    {
      Category: "Foo Fighters Songs",
      Words: ["Everlong", "Run", "Best of You", "My Hero"],
    },
    {
      Category: "Final Fantasy IX Characters",
      Words: ["Zidane", "Vivi", "Kuja", "Beatrix"],
    },
  ],
  [
    {
      Category: "Temptations Albums",
      Words: ["Legacy", "Wing of Love", "Cloud Nine", "Puzzle People"],
    },
    {
      Category: "Subaru Models",
      Words: ["Impreza", "Ascent", "Forester", "Outback"],
    },
    {
      Category: "Casual Dining Restaurants",
      Words: ["Applebees", "Chili's", "J. Alexander", "Olive Garden"],
    },
    {
      Category: "Famous Ships",
      Words: ["Santa Maria", "Mayflower", "Lusitania", "Titanic"],
    },
  ],
  [
    {
      Category: "Fictional Camps",
      Words: ["Wannaweep", "Campbell", "Tikihama", "Chippewa"],
    },
    {
      Category: "Native American Tribes",
      Words: ["Cherokee", "Iroquois", "Mojave", "Pawnee"],
    },
    {
      Category: "Red Dead Redemption States",
      Words: ["Ambarino", "New Hanover", "Lemoyne", "New Austin"],
    },
    {
      Category: "Types of Jeeps",
      Words: ["Renegade", "Gladiator", "Wrangler", "Compass"],
    },
  ],
  [
    {
      Category: "TV Shows with Trios",
      Words: ["Beetleborgs", "Pajama Masks", "Ed, Edd & Eddy", "PB&J Otter"],
    },
    {
      Category: "Children's Shows",
      Words: [
        "Bananas in Pajamas",
        "Rugrats",
        "Teletubbies",
        "Bear in the Big Blue House",
      ],
    },
    {
      Category: "Point & Click Video Games",
      Words: ["Pajama Sam", "Papers, Please", "Myst", "Sam & Max"],
    },
    {
      Category: "Full-Bodied Muppet",
      Words: [
        "Big Bird",
        "The Gorgs",
        "Ghost of Christmas Yet to Come",
        "Mr. Snuffleupagus",
      ],
    },
  ],
  [
    {
      Category: "Modern Slang Words",
      Words: ["Cap", "Bet", "Based", "Wig"],
    },
    {
      Category: "Parts of a Flower",
      Words: ["Stem", "Petal", "Pistil", "Stamen"],
    },
    {
      Category: 'Preceded By "Ear"',
      Words: ["Buds", "Worm", "Wax", "Plugs"],
    },
    {
      Category: "Byproducts of Insects",
      Words: ["Silk", "Honey", "Shellac", "Cochineal"],
    },
  ],
  [
    {
      Category: "Characters from Friends",
      Words: ["Rachel", "Ross", "Chandler", "Monica"],
    },
    {
      Category: "Baby Animals",
      Words: ["Joey", "Cub", "Gosling", "Piglet"],
    },
    {
      Category: "Winnie-The-Pooh Characters",
      Words: ["Tigger", "Rabbit", "Eeyore", "Kanga"],
    },
    {
      Category: "Last Four World Series Champions",
      Words: ["Braves", "Dodgers", "Nationals", "Red Sox"],
    },
  ],
  [
    {
      Category: "Common Words for Dumplings",
      Words: ["Jiaozi", "Gyoza", "Potsticker", "Dumpling"],
    },
    {
      Category: "Lady Gaga Songs",
      Words: ["Applause", "Bad Romance", "Just Dance", "Paparazzi"],
    },
    {
      Category: "Rhythm Games",
      Words: [
        "Guitar Hero",
        "Dance Dance Revolution",
        "PaRappa the Rapper",
        "Osu!",
      ],
    },
    {
      Category: "Voiced by Christopher Sabat",
      Words: ["Yamcha", "All Might", "Alex Louis Armstrong", "Piccolo"],
    },
  ],
  [
    {
      Category: "Fictional Sports",
      Words: ["Baseketball", "Quidditch", "Blernsball", "Calvinball"],
    },
    {
      Category: "Featuring Trey Parker",
      Words: [
        "South Park",
        "Despicable Me 3",
        "Team America: World Police",
        "Orgazmo",
      ],
    },
    {
      Category: "Philosophers",
      Words: ["Hobbes", "Kant", "Nietzsche", "Plato"],
    },
    {
      Category: "Fast & Furious Characters",
      Words: ["Shaw", "Toretto", "Yashar", "Parker"],
    },
  ],
  [
    {
      Category: "Banjo-Kazooie Characters",
      Words: ["Banjo", "Kazooie", "Mumbo Jumbo", "Gruntilda"],
    },
    {
      Category: "Folk Instruments",
      Words: ["Fiddle", "Harmonica", "Accordion", "Guitar"],
    },
    {
      Category: "Gibberish Words",
      Words: ["Blabber", "Prattle", "Gobbledygook", "Rigmarole"],
    },
    {
      Category: "Language Learning Services",
      Words: ["Babbel", "Rosetta Stone", "Duolingo", "Memrise"],
    },
  ],
  [
    {
      Category: "Mexican Holidays Relating to Military Battles",
      Words: [
        "Cinco De Mayo",
        "Niños Héroes",
        "Heroica Defensa de Veracruz",
        "Dia de la Armada de Mexico",
      ],
    },
    {
      Category: "Character's from Coco",
      Words: ["de la Cruz", "Rivera", "Héctor", "Dante"],
    },
    {
      Category: "Circles of Hell in Dante's Inferno",
      Words: ["Heresy", "Wrath", "Fraud", "Treachery"],
    },
    {
      Category: "2D side-scrolling Video Games",
      Words: ["Limbo", "Hollow Knight", "Ori and the Blind Forest", "Braid"],
    },
  ],
  [
    {
      Category: "Types of Sharks",
      Words: ["Hammerhead", "Blue", "Lemon", "Pyjama"],
    },
    {
      Category: "Subtractive Color Model keys",
      Words: ["Cyan", "Magenta", "Yellow", "Key"],
    },
    {
      Category: "Slang for Defective Items",
      Words: ["Bust", "Dud", "Clunker", "Flop"],
    },
    {
      Category: "Parts of a Door",
      Words: ["Jamb", "Latch", "Handle", "Hinge"],
    },
  ],
  [
    {
      Category: "Pixar Movies Main Characters",
      Words: ["Luca", "Woody", "Lightning", "Remy"],
    },
    {
      Category: "NHL Teams",
      Words: ["Senators", "Avalanche", "Stars", "Red Wings"],
    },
    {
      Category: "Government Titles",
      Words: ["Ambassador", "Secretary", "Governor", "Mayor"],
    },
    {
      Category: "Natural Disasters",
      Words: ["Tornadoes", "Earthquakes", "Wildfires", "Tsunami"],
    },
  ],
  [
    {
      Category: "Game Show Hosts",
      Words: ["Drew Carey", "Alex Trebek", "Pat Sajak", "Bob Barker"],
    },
    {
      Category: "Titular TV Sitcom",
      Words: [
        "Jerry Seinfeld",
        "Roseanne Barr",
        "Raven-Symoné",
        "Lucille Ball",
      ],
    },
    {
      Category: "Actors That Changed Their Names",
      Words: ["Vin Diesel", "Ice Cube", "Charlie Sheen", "Ben Kingsley"],
    },
    {
      Category: "Animal Characters",
      Words: ["Hooch", "Mr. Ed", "Lassie", "Willy"],
    },
  ],
  [
    {
      Category: "To Rid Fairies",
      Words: [
        "Wear clothes inside out",
        "St John's Wort",
        "Bells",
        "Four-Leaf Clovers",
      ],
    },
    {
      Category: 'Things preceded by "Flying"',
      Words: ["Buttress", "Dutchman", "Spaghetti Monster", "Blind"],
    },
    {
      Category: "Pirates of the Caribbean Ships",
      Words: [
        "HMS Interceptor",
        "The Black Pearl",
        "The Empress",
        "Queen Anne's Revenge",
      ],
    },
    {
      Category: "Possessive Media Titles",
      Words: [
        "The Emperor's New Groove",
        "Jennifer's Body",
        "Wayne's World",
        "The Queen's Gambit",
      ],
    },
  ],
  [
    {
      Category: "Words for Ghost",
      Words: ["Specter", "Spirit", "Spook", "Ghoul"],
    },
    {
      Category: "Types of Liquor",
      Words: ["Brandy", "Gin", "Rum", "Whiskey"],
    },
    {
      Category: "Creatures found in the Fallout Games",
      Words: ["Deathclaw", "Radscorpion", "Super Mutant", "Centaur"],
    },
    {
      Category: "Greek Mythological Creatures",
      Words: ["Cyclops", "Gorgon", "Harpy", "Sphinx"],
    },
  ],
  [
    {
      Category: "Named Greek Beasts",
      Words: ["Echidna", "Orthrus", "Typhon", "Cerberus"],
    },
    {
      Category: "Hades geography",
      Words: ["Styx", "Elysium", "Tartarus", "Asphodel"],
    },
    {
      Category: "Animated Disney Movies",
      Words: [
        "Hercules",
        "Lion King",
        "The Hunchback of Notre Dame",
        "Lilo & Stitch",
      ],
    },
    {
      Category: "Duo TV Shows",
      Words: ["Rick & Morty", "Starsky & Hutch", "Kenan & Kel", "Will & Grace"],
    },
  ],
  [
    {
      Category: "Music Genres",
      Words: ["Blues", "Funk", "Country", "Punk"],
    },
    {
      Category: "Region of Jurisdiction",
      Words: ["Province", "State", "County", "City"],
    },
    {
      Category: "Parts of a Golf Course",
      Words: ["Greens", "Fairway", "Rough", "Sand Traps"],
    },
    {
      Category: "Synonyms for Mafia",
      Words: ["Crew", "Gang", "Ring", "Syndicate"],
    },
  ],
  [
    {
      Category: "Brass Instruments",
      Words: ["French", "Bugle", "Tuba", "Trombone"],
    },
    {
      Category: "Types of Mustard",
      Words: ["Dijon", "Yellow", "Honey", "Beer"],
    },
    {
      Category: "Fictional Newspapers",
      Words: [
        "Daily Planet",
        "The Gotham Gazette",
        "The Daily Prophet",
        "The Arlen Bystander",
      ],
    },
    {
      Category: "Things to be King of",
      Words: ["The Hill", "England", "Kings", "The Jungle"],
    },
  ],
  [
    {
      Category: "U.S. National Parks",
      Words: ["Arches", "Badlands", "Grand Canyon", "Yosemite"],
    },
    {
      Category: "Mountain Monuments",
      Words: [
        "Mengshan Giant Buddha",
        "Mount Rushmore",
        "Leshan Giant Buddha",
        "Crazy Horse Memorial",
      ],
    },
    {
      Category: "Dr. Horrible's Sing-Along Blog Characters",
      Words: ["Bad Horse", "Billy", "Penny", "Moist"],
    },
    {
      Category: "Words relating to a Penny Coin",
      Words: ["Pence", "Cent", "p", "Tuppence"],
    },
  ],
  [
    {
      Category: "Chronicles",
      Words: [
        "Scotichronicon",
        "Chronicon Scotorum",
        "Wielkopolska Chronicle",
        "Croyland Chronicle",
      ],
    },
    {
      Category: "Fictional Books in Books",
      Words: [
        "Necronomicon",
        "The Princess Bride",
        "Hamster Huey & The Gooey Kablooie",
        "Fillory and Further",
      ],
    },
    {
      Category: "Conventions",
      Words: ["Comic Con", "Comiket", "Crypticon", "PAX"],
    },
    {
      Category: "Children's Books",
      Words: [
        "Chicka Chicka Boom Boom",
        "Llama Llama Red Pajama",
        "The Very Hungry Caterpillar",
        "Where the Wild Things Are",
      ],
    },
  ],
  [
    {
      Category: "Jennifer Lawrence Movies",
      Words: [
        "X-Men: First Class",
        "Silver Linings Playbook",
        "The Hunger Games",
        "Don't Look Up",
      ],
    },
    {
      Category: "YA Novels",
      Words: [
        "Twilight",
        "The Golden Compass",
        "Turtles All the Way Down",
        "Chain of Gold",
      ],
    },
    {
      Category: "MCU Movies",
      Words: [
        "Captain America: Civil War",
        "Shang-Chi and the Legend of the Ten Rings",
        "Spider-Man: Homecoming",
        "Avengers: Age of Ultron",
      ],
    },
    {
      Category: "90's Cartoons",
      Words: [
        "Teenage Mutant Ninja Turtles",
        "Darkwing Duck",
        "Talespin",
        "Gargoyles",
      ],
    },
  ],
  [
    {
      Category: "Fictional Schools",
      Words: [
        "Riverdale High",
        "Wagstaff School",
        "Greendale",
        "The Academy of Unseen Arts",
      ],
    },
    {
      Category: 'Relating to "Prime"',
      Words: ["Optimus", "Number", "Amazon", "Time"],
    },
    {
      Category: "Transformers Characters",
      Words: ["Megatron", "Bumblebee", "Starscream", "Grimlock"],
    },
    {
      Category: 'Words containing "Lock"',
      Words: ["Hemlock", "Anti-Lock", "Lockdown", "Dreadlock"],
    },
  ],
  [
    {
      Category: "Last 4 States Admitted Into the Union",
      Words: ["New Mexico", "Arizona", "Alaska", "Hawaii"],
    },
    {
      Category: "Places named after People / Places",
      Words: ["New Zealand", "New York", "New Orleans", "New Brunswick"],
    },
    {
      Category: "U.S. Airlines",
      Words: ["Delta", "Southwest", "Spirit", "United"],
    },
    {
      Category: "Countries that share a name with their Capital City",
      Words: ["Mexico", "Monaco", "Panama", "San Marino"],
    },
  ],
  [
    {
      Category: "State Flowers",
      Words: ["Columbine", "Peony", "Violet", "Magnolia"],
    },
    {
      Category: "Cities in Johto",
      Words: ["Goldenrod", "Ecruteak", "Cherrygrove", "Olivine"],
    },
    {
      Category: "Types of Waves",
      Words: ["Radio", "Ultraviolet", "Infrared", "Gamma"],
    },
    {
      Category: "Ways to get Superpowers",
      Words: ["Spider Bite", "Radiation", "Artifact ", "Chemical Exposure"],
    },
  ],
  [
    {
      Category: "London Tube Stations",
      Words: ["Blackfriars", "Picadilly", "Seven Sisters", "Baker Street"],
    },
    {
      Category: "Constellations",
      Words: ["Cassiopia", "Orion", "Ursa Mjor", "Canis Major"],
    },
    {
      Category: "Fictional Streets",
      Words: ["Jump Street", "Wisteria Lane", "Sesame Street", "Avenue Q"],
    },
    {
      Category: "Musicals",
      Words: ["Chorus Line", "Phantom of the Opera", "Cats", "Wicked"],
    },
  ],
  [
    {
      Category: "Famous Classical Art",
      Words: [
        "Mona Lisa",
        "Birth of Venus",
        "Guernica",
        "Girl with the Pearl Earing",
      ],
    },
    {
      Category: "British Super Heroes",
      Words: ["Night Hawk", "Captain Britain", "Bananaman", "Betsy Braddock"],
    },
    {
      Category: "Expatriate Newspapers",
      Words: ["Union Jack", "Gringo Gazette", "Le Millitant", "Amerika Woche"],
    },
    {
      Category: "Names for the US Flag",
      Words: [
        "Stars and Bars",
        "Old Glory",
        "Star Spangled Banner",
        "Stars and Stripes",
      ],
    },
  ],
  [
    {
      Category: "Preceded by 'Red'",
      Words: ["Flag", "Herring", "Ink", "Letter Day"],
    },
    {
      Category: "Idioms for Anger",
      Words: ["Red Mist", "Blow Up", "Rage Quit", "Blow a Fuse"],
    },
    {
      Category: "Kick-Ass Characters",
      Words: ["Hit Girl", "Big Daddy", "Johnny G", "Skull and Bones"],
    },
    {
      Category: "Secret Societies ",
      Words: ["Bohemian Club", "Freemasons", "Illuminati", "Knights Templar"],
    },
  ],
  [
    {
      Category: "Foods with different names in UK",
      Words: ["Biscuit", "Chips", "Crisps", "Aubergine"],
    },
    {
      Category: "Gordon Ramsey Restaurants ",
      Words: ["Amaryllis ", "Bread Street", "Foxtrot Oscar", "Murano"],
    },
    {
      Category: "Islands in Venice",
      Words: ["Chioggia", "Burano", "Tronchetto", "Troncello"],
    },
    {
      Category: "Flowering Bulbs",
      Words: ["Tulips", "Lily", "Crocus", "Daffodils"],
    },
  ],
  [
    {
      Category: "Teen Titans Characters",
      Words: ["Raven", "Cyborg", "Kid Flash", "Starfire"],
    },
    {
      Category: "Phone Operating Systems",
      Words: ["Android", "iPhone", "Windows Mobile", "Ubuntu Touch"],
    },
    {
      Category: "Resembling Humans",
      Words: ["Automaton", "Humanoid", "Robot", "Homunculus"],
    },
    {
      Category: "Corvidae Birds",
      Words: ["Crow", "Blue Jay", "Magpie", "Rook"],
    },
  ],
  [
    {
      Category: "Chess Pieces",
      Words: ["King", "Bishop", "Rook", "Knight"],
    },
    {
      Category: "Relating to Knighthood",
      Words: ["Banneret", "Page", "Squire", "Chivalry"],
    },
    {
      Category: "Inception Actors",
      Words: ["DiCaprio", "Gordon-Levitt", "Watanabe", "Hardy"],
    },
    {
      Category: "Christian Religious Titles",
      Words: ["Priest", "Abbot", "Nun", "Patriarch"],
    },
  ],
  [
    {
      Category: "Architecture Terms",
      Words: ["Portico", "Veranda", "Louvers", "Mezzanine"],
    },
    {
      Category: "Dragon Ball Z Characters",
      Words: ["Piccolo", "Raditz", "Frieza", "Marron"],
    },
    {
      Category: "Plurals ending in -i",
      Words: ["Octopi", "Platypi", "Cacti", "Alumni"],
    },
    {
      Category: "Babies are called a calf",
      Words: ["Elephant", "Moose", "Giraffe", "Cow"],
    },
  ],
  [
    {
      Category: 'Proceeded by "Cake"',
      Words: ["Cup", "Pan", "Cheese", "Fish"],
    },
    {
      Category: "Aesop's Fables",
      Words: [
        "The Boy Who Cried Wolf",
        "The Lion, The Bear, and the Fox",
        "The Fox, The Flies, and the Hedgehog",
        "The Tortoise and The Hare",
      ],
    },
    {
      Category: "Hand-Drawn Disney Movies",
      Words: [
        "The Lion King",
        "The Fox and The Hound",
        "The Princess and The Frog",
        "Aladdin",
      ],
    },
    {
      Category: "Books of The Chronicles of Narnia",
      Words: [
        "The Lion, The Witch, and the Wardrobe",
        "The Silver Chair",
        "The Horse and His Boy",
        "The Magician's Nephew",
      ],
    },
  ],
  [
    {
      Category: "Italian City-States of the Middle Ages and the Renaissance",
      Words: ["Florence", "Milan", "Ferrara", "Urbino"],
    },
    {
      Category: "Demonyms of the United States",
      Words: ["Usonia", "United Stater", "Columbian", "Colonican"],
    },
    {
      Category: "United States Bioregions",
      Words: ["Cascadia", "Prairies", "Laurentia", "California"],
    },
    {
      Category: "US State Flags Featuring Birds",
      Words: ["Illinois", "Iowa", "Louisiana", "North Dakota"],
    },
  ],
  [
    {
      Category: "Songs from the Longest Running Broadway Musicals",
      Words: [
        "The Music of The Night",
        "Cell Block Tango",
        "Be Prepared",
        "Old Deuteronomy",
      ],
    },
    {
      Category: "Songs Performed by Hugh Jackman",
      Words: [
        "The Greatest Show",
        "Who Am I?",
        "I Go To Rio",
        "Once Before I Go",
      ],
    },
    {
      Category: "Biographical Films",
      Words: ["Hamilton", "I, Tonya", "Stardust", "Goodbye Christopher Robin"],
    },
    {
      Category: "Films Featuring Margot Robbie",
      Words: [
        "About Time",
        "Birds of Prey",
        "The Suicide Squad",
        "Peter Rabbit",
      ],
    },
  ],
  [
    {
      Category: "Roles in Baseball",
      Words: ["Pitcher", "Umpire", "Outfielder", "Pinch Hitter"],
    },
    {
      Category: "Foods Made from Grains",
      Words: ["Cereal", "Tortillas", "Pasta", "Bread"],
    },
    {
      Category: 'Starts with "Dream"',
      Words: ["Catcher", "Cast", "Walker", "Job"],
    },
    {
      Category: "Types of Westerns",
      Words: ["Spaghetti", "Space", "Australian", "Chili"],
    },
  ],
  [
    {
      Category: 'Preceding "Wolf"',
      Words: ["Big Bad", "Were", "Dire", "Timber"],
    },
    {
      Category: "Synonyms of Wood",
      Words: ["Lumber", "Kindling", "Logs", "Planks"],
    },
    {
      Category: "Causing Fear",
      Words: ["Foreboding", "Dreadful", "Hair-Raising", "Fightful"],
    },
    {
      Category: "Adjectives involving Body Parts",
      Words: ["Thick-Skinned", "Toe-Tapping", "Hard Headed", "Tight-Lipped"],
    },
  ],
  [
    {
      Category: '"Untranslatable" Words',
      Words: ["Tartle", "L'appel Du Vide", "Kilig", "Gluggavedur"],
    },
    {
      Category: "Words That Can Be Plural or Singular",
      Words: ["Moose", "Bison", "Deer", "Offspring"],
    },
    {
      Category: "California Rock Bands",
      Words: ["The Eagles", "The Beach Boys", "Van Halen", "Journey"],
    },
    {
      Category: `Referenced in the Song "We Didn't Start the Fire"`,
      Words: ["Bardot", "Budapest", "Alabama", "Krushchev"],
    },
  ],
  [
    {
      Category: "Ages of European Development",
      Words: [
        "Age of Discovery",
        "Age of Enlightenment",
        "Age of Absolutism",
        "Age of Revolution",
      ],
    },
    {
      Category: "More Well Known by Their Initials",
      Words: [
        "Joanne Kathleen Rowling",
        "Jeffrey Jacob Abrams",
        "Howard Phillips Lovecraft",
        "Jonathan Kimble Simmons",
      ],
    },
    {
      Category: "Famous Directors",
      Words: [
        "Wes Anderson",
        "Steven Spielberg",
        "Christopher Nolan",
        "Guillermo del Toro",
      ],
    },
    {
      Category: "Games from the Age of Empires Series",
      Words: ["Age of Empires", "Age of Kings", "Mythologies", "The Titans"],
    },
  ],
  [
    {
      Category: "Same Row on a Qwerty Keyboard",
      Words: ["Z", "V", "B", "N"],
    },
    {
      Category: "Standard Base Tuning",
      Words: ["E", "D", "A", "G"],
    },
    {
      Category: "Pokemon Games",
      Words: ["X", "Y", "Sun", "Moon"],
    },
    {
      Category: "Solar System Objects",
      Words: ["Phobos", "Mercury", "Io", "Titan"],
    },
  ],
  [
    {
      Category: "Ikea Furniture Names",
      Words: ["Runnen", "Billy", "Kallax", "Hemnes"],
    },
    {
      Category: "Characters from The Lorax",
      Words: ["Lorax", "Ted Wiggins", "Audrey", "Aloysius O'Hare"],
    },
    {
      Category: "Produced By Bees",
      Words: ["Honey", "Beeswax", "Bee Bread", "Royal Jelly"],
    },
    {
      Category: "Characters from Billy Elliot",
      Words: ["Jackie", "Tony", "Michael", "Sandra"],
    },
  ],
  [
    {
      Category: "Love Dieties",
      Words: ["Laka", "Rati", "Hathor", "Freyja"],
    },
    {
      Category: "Santa's Reindeer",
      Words: ["Dasher", "Dancer", "Cupid", "Prancer"],
    },
    {
      Category: "Edible Weeds",
      Words: ["Dandelion", "Purslane", "Wood Sorrel", "Garlic Mustard"],
    },
    {
      Category: "Condiments on Chicago Hot Dog",
      Words: [
        "Sweet Relish",
        "White Onions",
        "Celery Salt",
        "Pickled Sport Peppers",
      ],
    },
  ],
  [
    {
      Category: "Hosted SNL more than 5 times",
      Words: ["Bill Murray", "Elliot Gould", "Christopher Walken", "Tom Hanks"],
    },
    {
      Category: "Successful child stars",
      Words: [
        "Drew Barrymore",
        "Neil Patrick Harris",
        "Leonardo Dicaprio",
        "Natalie Portman",
      ],
    },
    {
      Category: "Non-Alcoholic Drinks",
      Words: [
        "Shirley Temple",
        "Arnold Palmer",
        "Virgin Mary",
        "Safe Sex on the Beach",
      ],
    },
    {
      Category: "Ladies of the Bible",
      Words: [
        "Deborah the Judge",
        "Huldah ",
        "Miriam the Prophetess",
        "Ruth the Moabite",
      ],
    },
  ],
  [
    {
      Category: "Relating to Financial Markets",
      Words: ["Bear", "Bull", "Limit Order", "Short"],
    },
    {
      Category: "Animals of the Constellations",
      Words: ["Crab", "Big Dog", "Little Dog", "Ram"],
    },
    {
      Category: "NBA Player Nicknames",
      Words: ["Iceman", "Air Jordan", "Big Honey", "Black Mamba"],
    },
    {
      Category: "Relating to Electricity",
      Words: ["Fuse", "Ground", "Current", "Surge"],
    },
  ],
  [
    {
      Category: "Famous World Fountains",
      Words: ["The Trevi", "The Apollo", "The Cascada", "The Stravinsky"],
    },
    {
      Category: "Harlem Landmarks",
      Words: [
        "Mother Zion",
        "Hotel Theresa",
        "Harlem YMCA",
        "Minton's Playhouse",
      ],
    },
    {
      Category: "Famous Music Venues",
      Words: ["Radio City", "The Bluebird", "The Fillmore", "Red Rocks"],
    },
    {
      Category: "National Parks",
      Words: ["Arches", "Grand Canyon", "Bryce Canyon", "Badlands"],
    },
  ],
  [
    {
      Category: 'US Cities Beginning with "San"',
      Words: ["Diego", "Antonio", "Francisco", "Jose"],
    },
    {
      Category: "Characters from Dora The Explorer",
      Words: ["Dora", "Boots", "Swiper", "Backpack"],
    },
    {
      Category: "Common School Supplies",
      Words: ["No. 2 Pencils", "Highlighters", "Spiral Notebook", "Folders"],
    },
    {
      Category: "Characters from Encanto",
      Words: ["Julieta", "Agustin", "Pedro", "Dolores"],
    },
  ],
  [
    {
      Category: "Preceded by Solar",
      Words: ["Eclipse", "Panel", "Wind", "Telescope"],
    },
    {
      Category: "Avatar: The Last Airbender Elements",
      Words: ["Fire", "Earth", "Water", "Air"],
    },
    {
      Category: 'Solar System Bodies That Start With "M"',
      Words: ["Moon", "Mars", "Mercury", "Mimas"],
    },
    {
      Category: "Neighborhood Abbreviations",
      Words: ["SoHo", "Tribeca", "Dumbo", "Nolita"],
    },
  ],
  [
    {
      Category: "Monogamous Animals",
      Words: ["Vole", "Beaver", "Wolf", "Coyote"],
    },
    {
      Category: "Synonyms of Spy",
      Words: ["Mole", "Double Agent", "Inside Man", "Infiltrator"],
    },
    {
      Category: "Types of Teeth",
      Words: ["Molar", "Premolars", "Canines", "Incisors"],
    },
    {
      Category: 'Words for "Dog"',
      Words: ["Pooch", "Hound", "Mutt", "Fido"],
    },
  ],
  [
    {
      Category: "Homonyms",
      Words: ["Carat", "Karat", "Caret", "Carrot"],
    },
    {
      Category: "Named Symbols on the  Keyboard",
      Words: ["Ampersand", "Asterisk", "Tilde", "Pipe"],
    },
    {
      Category: "Relating to Gemstones",
      Words: ["Faceting", "Hardness", "Clarity", "Lustre"],
    },
    {
      Category: "New World Plants",
      Words: ["Tomato", "Potato", "Corn", "Blueberry"],
    },
  ],
  [
    {
      Category: "British Rock Bands",
      Words: ["The Police", "Led Zeppelin", "Pink Floyd", "Black Sabbath"],
    },
    {
      Category: 'Famous "Who"\'s',
      Words: ["The Who", "Doctor Who", "Whoville", "World Health Organization"],
    },
    {
      Category: "Non-Numbered Playing Cards",
      Words: ["Queen", "King", "Jack", "Ace"],
    },
    {
      Category: "Mother Goose Characters",
      Words: ["Mary", "Peter", "Miss Muffet", "Bo Peep"],
    },
  ],
  [
    {
      Category: "Types of Turtles",
      Words: ["Painted", "Box", "Snapping", "Pond"],
    },
    {
      Category: "Types of Horses",
      Words: ["Arabian", "Friesian", "Appaloosa", "Mustang"],
    },
    {
      Category: "Provinces of The Netherlands",
      Words: ["Drenthe", "Flevoland", "Gelderland", "Utrecht"],
    },
    {
      Category: "Bodies of Water",
      Words: ["Lake", "Puddle", "Ocean", "Sea"],
    },
  ],
  [
    {
      Category: 'Things with "Eyes"',
      Words: ["Potatoes", "Hurricane", "Needle", "Tornado"],
    },
    {
      Category: 'Vegetables in the dish "Ratatouille"',
      Words: ["Eggplants", "Tomatoes", "Yellow Squashes", "Zucchinis"],
    },
    {
      Category: "Natural Disasters",
      Words: ["Earthquake", "Tsunami", "Flood", "Landslide"],
    },
    {
      Category: "Sewing Tools",
      Words: ["Scissors", "Chalk", "Pins", "Thread"],
    },
  ],
  [
    {
      Category: '"Spheres" of the Earth',
      Words: ["Atmosphere", "Hydrosphere", "Geosphere", "Biosphere"],
    },
    {
      Category: "Units of Measurement",
      Words: ["Pascal", "Bar", "Farenheit", "Newton"],
    },
    {
      Category: "Notable Figures During The Enlightenment",
      Words: ["Bacon", "Hobbes", "Locke", "Voltaire"],
    },
    {
      Category: 'Synonyms of "Bar"',
      Words: ["Pub", "Tavern", "Cafe", "Saloon"],
    },
  ],
  [
    {
      Category: "Types of Bags",
      Words: ["Punching", "Shopping", "Hand", "Duffle"],
    },
    {
      Category: "Types of Punches",
      Words: ["Haymaker", "Jab", "Cross", "Hook"],
    },
    {
      Category: "Parts of a Fishing Rod",
      Words: ["Pole", "Reel", "Line", "Guide"],
    },
    {
      Category: "Robin Williams Movies",
      Words: ["What Dreams May Come", "Flubber", "Patch Adams", "Robots"],
    },
  ],
  [
    {
      Category: 'Types of "Lines"',
      Words: ["Bottom", "Tree", "Fault", "Air"],
    },
    {
      Category: "Elements in the Chinese Zodiac",
      Words: ["Metal", "Fire", "Wood", "Earth"],
    },
    {
      Category: 'Synonyms of "Fault"',
      Words: ["Blunder", "Fumble", "Slipup", "Mistake"],
    },
    {
      Category: "American Football Terminology",
      Words: ["Huddle", "Blitz", "Safety", "Scrimmage"],
    },
  ],
  [
    {
      Category: "Famous Dragons",
      Words: ["Fafnir", "Shenron", "Smaug", "Discord"],
    },
    {
      Category: "Team Chat Applications",
      Words: ["Slack", "Teams", "Skype", "Mattermost"],
    },
    {
      Category: "Rock Type Pokemon",
      Words: ["Golem", "Onyx", "Boldore", "Tyranitar"],
    },
    {
      Category: "Lord of the Rings Characters",
      Words: ["Gandalf", "Arwen", "Celeborn", "Elendil"],
    },
  ],
  [
    {
      Category: "Dr. Who Enemies",
      Words: ["Daleks", "Davros", "The Silence", "Weeping Angels"],
    },
    {
      Category: "Dragonball Z Alien Races",
      Words: ["Saibamen", "Namekian", "Saiyan", "Makyan"],
    },
    {
      Category: "Alfred Hitchcock Movies",
      Words: ["The Birds", "Rope", "Psycho", "Suspicion"],
    },
    {
      Category: 'Preceded by "American"',
      Words: ["Dream", "Woman", "Pie", "Cheese"],
    },
  ],
  [
    {
      Category: "Infinity Stones",
      Words: ["Space", "Mind", "Time", "Soul"],
    },
    {
      Category: "Pokemon Evolution Stones",
      Words: ["Thunder", "Fire", "Moon", "Water"],
    },
    {
      Category: "Non-Character Keyboard Keys",
      Words: ["Tab", "Shift", "Alt", "Enter"],
    },
    {
      Category: "Discontinued Soft Drinks",
      Words: ["Crystal Pepsi", "Storm", "Cherry Coke", "Jazz"],
    },
  ],
  [
    {
      Category: "Eukaryotic Cells",
      Words: ["Animal", "Plant", "Fungi", "Protist"],
    },
    {
      Category: "Muppets",
      Words: ["Gonzo", "Fozzie", "Scooter", "Honeydew"],
    },
    {
      Category: "Types of Melons",
      Words: ["Watermelon", "Cantaloupe", "Winter", "Bitter"],
    },
    {
      Category: "Human Powered Vehicles",
      Words: ["Skateboard", "Bicycle", "Rollerblades", "Handcar"],
    },
  ],
  [
    {
      Category: "Neil Gaiman Characters",
      Words: ["Lucifer Morningstar", "Crowley", "Coraline", "Death"],
    },
    {
      Category: "Named Angels",
      Words: ["Arakiel", "Gabriel", "Sandalphon", "Michael"],
    },
    {
      Category: "Horsemen of the Apocolypse",
      Words: ["War", "Famine", "Pollution", "Pestilence"],
    },
    {
      Category: "Clay Animated Characters",
      Words: ["Wallace", "Zero", 'Edgar "E" Gore', "Norman"],
    },
  ],
  [
    {
      Category: "Famous Black Cats",
      Words: ["Binx", "Jiji", "Salem", "Snowball II"],
    },
    {
      Category: "US State Capitols",
      Words: ["Springfield", "Topeka", "Austin", "Madison"],
    },
    {
      Category: "Fictional Cartoon Cities",
      Words: ["Arlen", "Beach City", "Duckburg", "Gravity Falls"],
    },
    {
      Category: "Digimon Adventure Characters",
      Words: ["Tai", "Matt", "Joe", "Mimi"],
    },
  ],
  [
    {
      Category: "Fictional Grandmothers",
      Words: ["Fa", "Tala", "Gertie", "Endora"],
    },
    {
      Category: "Characters from The Nanny",
      Words: ["Fran", "Maxwell", "Yetta", "Sylvia"],
    },
    {
      Category: "Legendary Old Women",
      Words: ["Day", "Parton", "Fonda", "White"],
    },
    {
      Category: 'Ways to Say "Grandma"',
      Words: ["Nonna", "Farmor", "Oma", "Lola"],
    },
  ],
  [
    {
      Category: "Areas of Chakra",
      Words: ["Root", "Throat", "Heart", "Crown"],
    },
    {
      Category: "Nerve Plexuses",
      Words: ["Solar", "Cervical", "Brachial", "Lumbar"],
    },
    {
      Category: "Types of Renewable Energy",
      Words: ["Wind", "Hydro", "Geothermal", "Biomass"],
    },
    {
      Category: "Historical Currency",
      Words: ["Florin", "Mark", "Farthing", "Ducat"],
    },
  ],
  [
    {
      Category: "Mario Sports Games",
      Words: ["Golf", "Tennis", "Strikers", "Kart"],
    },
    {
      Category: "Soccer Positions",
      Words: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
    },
    {
      Category: "Types of Protectors",
      Words: ["Guardian", "Sentry", "Patrol", "Watchdog"],
    },
    {
      Category: 'Ending in "ward"',
      Words: ["Backward", "Wayward", "Skyward", "Awkward"],
    },
  ],
  [
    {
      Category: "Grades in Harry Potter",
      Words: ["Outstanding", "Acceptable", "Dreadful", "Troll"],
    },
    {
      Category: "Mythological Creatures",
      Words: ["Ogre", "Griffin", "Minotaur", "Banshee"],
    },
    {
      Category: "Characters from Shrek",
      Words: ["Donkey", "Dragon", "Gingerbread Man", "Fiona"],
    },
    {
      Category: "Italian Folk Tales",
      Words: [
        "Pinocchio",
        "Puss In Boots",
        "Bella Venezia",
        "Penta of the Chopped-off Hands",
      ],
    },
  ],
  [
    {
      Category: "Trophies Named After Athletes",
      Words: [
        "Kobe Bryant",
        "Rodman Wannamaker",
        "John Heisman",
        "Clarence Campbell",
      ],
    },
    {
      Category: "Founders of Self-Named Brands",
      Words: [
        "Giorgio Armani",
        "William Boeing",
        "William Colgate",
        "Pietro Ferrero",
      ],
    },
    {
      Category: "Skater Characters in Tony Hawk's Pro Skater",
      Words: ["Tony Hawk", "Rodney Mullen", "Bob Burnquist", "Kareem Campbell"],
    },
    {
      Category: "Alliterative Celebrities",
      Words: ["Amy Adams", "Federico Fellini", "Hugh Hefner", "Marilyn Monroe"],
    },
  ],
  [
    {
      Category: "Last Four Stanley Cup Winners",
      Words: ["Colorado", "Tampa Bay", "St. Louis", "Washington"],
    },
    {
      Category: "Cities that Cross State Borders",
      Words: ["Texarkana", "Kansas City", "Bristol", "Union City"],
    },
    {
      Category: "Presidents on US Currency",
      Words: ["Jefferson", "Madison", "Lincoln", "Taft"],
    },
    {
      Category: "Peanuts Characters",
      Words: ["Franklin", "Pig-Pen", "Peppermint Patty", "Lucy"],
    },
  ],
  [
    {
      Category: "Semiaquatic Mammals",
      Words: ["Platypus", "Beaver", "Capybara", "Mink"],
    },
    {
      Category: "Animals in Sonic the Hedgehog",
      Words: ["Hedgehog", "Echidna", "Bat", "Fox"],
    },
    {
      Category: "Monotypic Taxon Animals",
      Words: [
        "Beluga Whale",
        "Dugong",
        "Narwhal",
        "Cream-Spotted Cardinal Fish",
      ],
    },
    {
      Category: "Venomous Mammals",
      Words: [
        "Short Tailed Shrew",
        "Vampire Bats",
        "Slow Loris",
        "European Mole",
      ],
    },
  ],
  [
    {
      Category: "Songs Over 10 Minutes",
      Words: [
        "Coma",
        "Rise of the Ancient Mariner",
        "Rosetta Stoned",
        "Voodoo Chile",
      ],
    },
    {
      Category: "Poems by Samual Taylor Coleridge",
      Words: [
        "Christabel",
        "Kubla Khan",
        "Frost at Midnight",
        "Fears in Solitude",
      ],
    },
    {
      Category: "Types of Chili Peppers",
      Words: ["Pot Chili", "Aji Chili", "Ancho Chili", "Bird's Eye Chili"],
    },
    {
      Category: "Language Programs",
      Words: ["Duolingo", "Babbel", "Pimsleur", "Lingoda"],
    },
  ],
  [
    {
      Category: "Plants Poisonous to Touch",
      Words: ["Manchineel", "Stinging Nettle", "Hog Weed", "Tread-Softly"],
    },
    {
      Category: "Remote Access Trojan Viruses",
      Words: ["PoisonIvy", "Beast", "Blackshades", "DarkComet"],
    },
    {
      Category: "Mythical Bridges",
      Words: ["Chinvat", "Gjallarbru", "Silat", "Bifrost"],
    },
    {
      Category: "Furry Superheroes",
      Words: ["Krypto", "Lockjaw", "Rocket Racoon", "Tigra"],
    },
  ],
  [
    {
      Category: "Fictional Fruit",
      Words: ["Rowa", "Paupu", "Wumpa", "Mutfruit"],
    },
    {
      Category: "Islands of Samoa",
      Words: ["Upolu", "Manono", "Apolima", "Fanuatapu"],
    },
    {
      Category: "Video Game Cities",
      Words: ["Rapture", "Novigrad", "Linblum", "Pelican"],
    },
    {
      Category: "Extreme Happiness",
      Words: ["Ecstasy", "Euphoria", "Bliss", "Delectation"],
    },
  ],
  [
    {
      Category: 'Things that are "right"',
      Words: ["The Price", "The Customer", "A Broken Clock", "Mr"],
    },
    {
      Category: "Things on a Product Sticker",
      Words: ["Barcode", "The Weight", "Company Branding", "Expiration Date"],
    },
    {
      Category: "Common Idioms",
      Words: [
        "A Wild Goose Chase",
        "The Cold Shoulder",
        "Break a Leg",
        "On The Ball",
      ],
    },
    {
      Category: "Common Honorifics",
      Words: ["Mrs", "Dr", "Madam", "Esq"],
    },
  ],
  [
    {
      Category: 'Rhymes with "Ladder"',
      Words: ["Bladder", "Adder", "Matter", "Batter"],
    },
    {
      Category: "Ingredients in Haggis",
      Words: ["Heart", "Liver", "Lungs", "Onion"],
    },
    {
      Category: "Types of Snakes",
      Words: ["Garter", "Copperhead", "Viper", "Cottonmouth"],
    },
    {
      Category: "Side Effects of Marijuana",
      Words: [
        "Drowsiness",
        "Headaches",
        "Disorientation",
        "Increased Appetite",
      ],
    },
  ],
  [
    {
      Category: "Executed by guillotine",
      Words: [
        "Marie Antoinette",
        "Louis XVI",
        "Maximilien Robespierre",
        "Eugen Weidmann",
      ],
    },
    {
      Category: "Current Ruling Monarchs",
      Words: [
        "Elizabeth II",
        "Carl XVI Gustaf",
        "Vajiralongkorn",
        "Mohammed VI",
      ],
    },
    {
      Category: "Fictional Kings",
      Words: ["North Kai", "Triton", "Louie", "Edmund Pevensie"],
    },
    {
      Category: 'Containing "King"',
      Words: ["Burger King", "The King and I", "Kingsman", "The Lion King"],
    },
  ],
  [
    {
      Category: "Worn Around The Neck",
      Words: ["Lei", "Foulard", "Collar", "Tie"],
    },
    {
      Category: "Parts of a Railroad",
      Words: ["Rail", "Ballast", "Spike", "Plate"],
    },
    { Category: "Slang for Jewelry", Words: ["Ice", "Bling", "Rock", "Grill"] },
    { Category: "Cooking Methods", Words: ["Broil", "Roast", "Bake", "Poach"] },
  ],
  [
    { Category: "Vitamins", Words: ["B12", "C", "K", "A"] },
    {
      Category: "Plant Based Meat Ingredients",
      Words: ["Peas", "Potato Starch", "Beet Juice", "Coconut Oil"],
    },
    { Category: "K-Pop Bands", Words: ["BTS", "2NE1", "Blackpink", "Exo"] },
    {
      Category: "Coca-Cola Brand Juice",
      Words: ["Hi-C", "Fanta", "Lift", "Maaza"],
    },
  ],
  [
    {
      Category: "Immediate Family of Barack Obama",
      Words: ["Michelle", "Malia", "Sasha", "Marian"],
    },
    {
      Category: "First Ladies",
      Words: [
        "Martha Washington",
        "Louisa Adams",
        "Emily Donelson",
        "Ellen Arthur",
      ],
    },
    {
      Category: "Character's from Charlotte's Web",
      Words: ["Wilbur", "Charlotte", "Templeton", "Dr. Dorian"],
    },
    {
      Category: "Scrubs Characters",
      Words: ["Dr. Reid", "Dr. Turk", "Espinosa", "Buckland, Esq."],
    },
  ],
  [
    {
      Category: "Titles with Street Names",
      Words: ["21 Jump", "Q", "Nightmare on Elm", "Sesame"],
    },
    {
      Category: "James Bond Recurring Characters",
      Words: ["James Bond", "M", "Miss MoneyPenny", "Felix Leiter"],
    },
    {
      Category: "Beginnings of Famous Addresses",
      Words: [
        "221B Baker",
        "1313 Mockingbird",
        "1600 Pennsylvania",
        "62 West Wallaby",
      ],
    },
    { Category: "Seeds", Words: ["Flax", "Poppy", "Chia", "Pumpkin"] },
  ],
  [
    {
      Category: 'All "Land"s',
      Words: ["Portland", "Cleveland", "Finland", "Iceland"],
    },
    {
      Category: "Countries in the UK",
      Words: ["England", "Scotland", "Wales", "Northern Ireland"],
    },
    {
      Category: "African Countries with Red, Yellow & Green Flags",
      Words: ["Mali", "Guinea", "Republic of Congo", "Benin"],
    },
    {
      Category: "Island Nations with 10,000,000+ Population",
      Words: ["Cuba", "Java", "Taiwan", "New Guinea"],
    },
  ],
  [
    {
      Category: "Boating Occupations",
      Words: ["Skipper", "Coxswain", "Helmsman", "Deck Cadet"],
    },
    {
      Category: "Types of Sailing Vessels",
      Words: ["Schooner", "Brig", "Brigantine", "Clipper"],
    },
    {
      Category: "Characters from Gravity Falls",
      Words: ["Dipper", "Mabel", "Soos", "Bill"],
    },
    {
      Category: "Dr. Who Companions",
      Words: ["Rose", "Rory", "Clara", "Nyssa"],
    },
  ],
  [
    {
      Category: "Exonyms of London",
      Words: ["Londres", "Londino", "Londen", "Lontoo"],
    },
    {
      Category: "Dragons in the Legend of Zelda Series",
      Words: ["Valoo", "Dinraal", "Farosh", "Naydra"],
    },
    {
      Category: "Voiced by Phil Harris",
      Words: ["Baloo", "Little John", "Patou", "O'Malley"],
    },
    {
      Category: "Planets in the Star Wars Universe",
      Words: ["Naboo", "Tatooine", "Bespin", "Lah'mu"],
    },
  ],
  [
    {
      Category: "Destructured Portmanteaus",
      Words: [
        "Golden Retriever Poodle",
        "Animation Electronics",
        "Zoo Utopia",
        "Britain Exit",
      ],
    },
    {
      Category: "Godzilla Monsters",
      Words: ["Hedorah", "King Caesar", "Anguirus", "King Kong"],
    },
    {
      Category: "Kaiju in Pacific Rim",
      Words: ["Trespasser", "Slattern", "Leatherback", "Knifehead"],
    },
    {
      Category: "English Pubs",
      Words: [
        "Jolly Taxpayer",
        "Poosie Nansies",
        "Skiving Scholar",
        "Pyrotechnists Arms",
      ],
    },
  ],
  [
    {
      Category: "Arthropods",
      Words: ["Ant", "Barnacle", "Daddy Longlegs", "Mantis"],
    },
    {
      Category: "Chinese Animal Style Martial Arts",
      Words: ["Tiger", "Snake", "Dragon", "Crane"],
    },
    {
      Category: "Diseases in Spongebob Squarepants",
      Words: [
        "Grouchy Snailitis",
        "Suds",
        "Mad Snail Disease",
        "Head-Go-Boom-Boom-Itis",
      ],
    },
    {
      Category: "Over the Garden Wall Characters",
      Words: ["Auntie Whispers", "Wirt", "Dog", "Fred"],
    },
  ],
  [
    {
      Category: "Scored by John Williams",
      Words: ["Tom Sawyer", "Dracula", "Jurassic Park", "Return of the Jedi"],
    },
    {
      Category: "Christina Ricci Movies",
      Words: ["Penelope", "Casper", "Sleepy Hollow", "Speed Racer"],
    },
    {
      Category: "Movies Based on Short Stories",
      Words: [
        "The Killers",
        "The Secret Life of Walter Mitty",
        "The Curious Case of Benjamin Button",
        "Rashomon",
      ],
    },
    {
      Category: "Named Vampires",
      Words: ["Lestat", "Edward Cullen", "Angel", "Jean-Claude"],
    },
  ],
  [
    {
      Category: "US States with Panhandles",
      Words: ["Florida", "Texas", "Oklahoma", "Idaho"],
    },
    {
      Category: "Countries that Border the Black Sea",
      Words: ["Georgia", "Turkey", "Bulgaria", "Romania"],
    },
    {
      Category: "North American Birds",
      Words: ["Flamingo", "Pelican", "Woodcock", "Bald Eagle"],
    },
    {
      Category: "Fictional Butlers",
      Words: ["Woodhouse", "Pennyworth", "Cogsworth", "Belvedere"],
    },
  ],
  [
    {
      Category: "Words That Contain Currency",
      Words: ["Pennywise", "Nickelback", "Headquarters", "Dimeter"],
    },
    {
      Category: "Foreign Lines in English Songs",
      Words: [
        "Unos, dos, tres, catorce",
        "Mazal Tov! L'chayim",
        "Bismillah",
        "Hasta Manjana",
      ],
    },
    {
      Category: "Various Names for the Sand Dollar Sea Urchin",
      Words: ["Sand Dollar", "Sea Cookie", "Snapper Biscuit", "Pansy Shell"],
    },
    {
      Category: "Horror Movie Monsters",
      Words: ["Freddy Krueger", "Chucky", "Bughuul", "Clover"],
    },
  ],
  [
    {
      Category: "Named Creatures That Went to Space",
      Words: ["Albert II", "Tsygan & Dezik", "Gordo", "Yuri Gagarin"],
    },
    {
      Category: "Stop-Motion Animation Studios",
      Words: ["Mackinnon and Saunders", "Laika", "Cosgrove Hall", "Aardman"],
    },
    {
      Category: "Lizzie McGuire Characters",
      Words: ["Lizzie", "Miranda", "Kate", "Matt"],
    },
    {
      Category: 'Contains "Hall"',
      Words: [
        "Carnegie Hall",
        "Arsenio Hall",
        "The Monty Hall Problem",
        "National Baseball Hall of Fame",
      ],
    },
  ],
  [
    { Category: "Leap Years", Words: ["2068", "2072", "1920", "1988"] },
    {
      Category: "Dystopian Literature",
      Words: [
        "1984",
        "Brave New World",
        "Fahrenheit 451",
        "The Handmaid's Tale",
      ],
    },
    {
      Category: '"Brave"',
      Words: [
        "The Brave Little Toaster",
        "The Brave and the Bold",
        "Atlanta Braves",
        "Brave",
      ],
    },
    {
      Category: "Cartoon Hangover Cartoons",
      Words: [
        "Bravest Warriors",
        "Bee and PuppyCat",
        "Fin Punch",
        "Shadowstone Park",
      ],
    },
  ],
  [
    {
      Category: "Types of Chef Knives",
      Words: ["Paring", "Bread", "Cleaver", "Salmon"],
    },
    {
      Category: "Sushi Rolls",
      Words: ["Rainbow", "California", "Spicy Tuna", "Spider"],
    },
    {
      Category: "Compound Words",
      Words: ["Bookcase", "Jellyfish", "Butterfly", "Shipyard"],
    },
    { Category: "Baked Goods", Words: ["Brownie", "Pie", "Torte", "Bagel"] },
  ],
  [
    {
      Category: "Stranger Things Characters",
      Words: [
        "Will Byers",
        "Steve Harrington",
        "Nancy Wheeler",
        "Robin Buckley",
      ],
    },
    {
      Category: "Pirates of the Caribbean Characters",
      Words: [
        "Jack Sparrow",
        "Hector Barbossa",
        "Davy Jones",
        "Elizabeth Swan",
      ],
    },
    {
      Category: "Yu-Gi-Oh! Characters",
      Words: [
        "Joey Wheeler",
        "Tristan Taylor",
        "Maximillion Pegasus",
        "Serenity Wheeler",
      ],
    },
    {
      Category: "How I Met Your Mother Characters",
      Words: [
        "Robin Scherbatsky",
        "Quinn Garvey",
        "Sandy Rivers",
        "Tracy McConnell",
      ],
    },
  ],
  [
    {
      Category: "Roman Emperors",
      Words: [
        "Caesar Augustus",
        "Tiberius",
        "Vespasian",
        "Constantine the Great",
      ],
    },
    {
      Category: "Shakespeare Plays",
      Words: [
        "Julius Caesar",
        "Antony and Cleopatra",
        "Troilus and Cressida",
        "Othello",
      ],
    },
    {
      Category: 'The "Great"s',
      Words: [
        "Catherine the Great",
        "Alexander the Great",
        "Gertrude the Great",
        "Hanno the Great",
      ],
    },
    {
      Category: "TV Duos",
      Words: [
        "Troy and Abed",
        "Bert and Ernie",
        "Crowley and Aziraphale",
        "Turk and J.D.",
      ],
    },
  ],
  [
    {
      Category: "Handheld Video Game Devices",
      Words: ["Game Gear", "Game Boy", "Nomad", "PSP"],
    },
    {
      Category: "Mobile Music Device",
      Words: ["Walkman", "iPod", "Zune", "Zen"],
    },
    { Category: "NBA Acronyms", Words: ["MVP", "PPG", "PER", "RAPTOR"] },
    {
      Category: "Fictional Video Game Currencies",
      Words: ["Zeni", "Bells", "Rupee", "Munny"],
    },
  ],
  [
    {
      Category: "Types of Skating",
      Words: ["Ice", "Inline", "Roller", "Speed"],
    },
    { Category: "Scalars", Words: ["Volume", "Density", "Mass", "Time"] },
    { Category: "Rhymes", Words: ["Brass", "Grass", "Pass", "Lass"] },
    { Category: "Pokemon Types", Words: ["Dark", "Fire", "Flying", "Water"] },
  ],
  [
    {
      Category: "YouTube Creator Play Button Awards",
      Words: ["Silver", "Gold", "Diamond", "Red Diamond"],
    },
    {
      Category: "Dungeons & Dragons Coins",
      Words: ["Copper", "Electrum", "Iron", "Platinum"],
    },
    {
      Category: "Igneous Rocks",
      Words: ["Obsidian", "Diorite", "Granite", "Pumice"],
    },
    {
      Category: "Minecraft Minerals",
      Words: ["Redstone", "Lapis lazuli", "Emerald", "Nether Quartz"],
    },
  ],
  [
    {
      Category: "Polynesian Gods",
      Words: ["Maui", "Motoro", "Kohara", "Ulupoka"],
    },
    {
      Category: "Islands of Hawaii",
      Words: ["Kauai", "Lanai", "O'ahu", "Hawaii"],
    },
    {
      Category: "Characters from Moana",
      Words: ["Moana", "Tamatoa", "Hei Hei", "Tala"],
    },
    {
      Category: "Lilo & Stitch Characters",
      Words: ["Lilo", "Stitch", "Jumba", "Gantu"],
    },
  ],
  [
    {
      Category: "Types of Pokeballs in Pokemon",
      Words: ["Great", "Ultra", "Master", "Luxury"],
    },
    {
      Category: "Digivolution Levels in Digimon",
      Words: ["Rookie", "Champion", "Ultimate", "Mega"],
    },
    {
      Category: "Years of High School / College",
      Words: ["Freshman", "Sophomore", "Junior", "Senior"],
    },
    {
      Category: "Rotten Tomatoes Rating Systems",
      Words: ["Fresh", "Certified Fresh", "Rotten", "No Score"],
    },
  ],
  [
    {
      Category: "Teletubbies",
      Words: ["Tinky-Winky", "Dipsy", "Laa-Laa", "Po"],
    },
    {
      Category: "Played by Jack Black",
      Words: ["Dewey Finn", "Nacho", "Barry Judd", "Carl Denham"],
    },
    {
      Category: "Types of Chips",
      Words: ["Corn", "Potato", "Pita", "Tortilla"],
    },
    {
      Category: "Ashlee Simpson Songs",
      Words: ["Pieces of Me", "Boyfriend", "Shadow", "Ragdoll"],
    },
  ],
  [
    {
      Category: "International Multi-Sport Competitions",
      Words: [
        "Commonwealth Games",
        "Francophone Games",
        "Lusophony Games",
        "Pan Arab Games",
      ],
    },
    {
      Category: "Video Game Studios",
      Words: ["4A Games", "Telltale Games", "Niantic", "Rare"],
    },
    {
      Category: "Stages of Doneness",
      Words: ["Blue", "Medium", "Well Done", "Medium Well"],
    },
    {
      Category: "Synonyms of Psychic",
      Words: ["Channeler", "Spiritist", "Clairvoyant", "Mentalist"],
    },
  ],

  [
    {
      Category: "Beard Styles",
      Words: ["Mutton Chops", "Goatee", "Ducktail", "Anchor"],
    },
    {
      Category: "Cuts of Pork",
      Words: ["Pork Chop", "Hock", "Ham", "Pork Belly"],
    },
    {
      Category: "Fictional / Mislabeled Martial Arts Techniques",
      Words: [
        "Buddha Palm",
        "Five point Palm Exploding Heart",
        "Crane Kick",
        "Karate Chop",
      ],
    },
    {
      Category: "Used to Keep Things in Place",
      Words: ["Bike Lock", "Wheel Chocks", "Deadman", "Tie Rod"],
    },
  ],
  [
    {
      Category: "Types of  Mustaches",
      Words: ["Handlebar", "Dali", "Walrus", "Pencil"],
    },
    {
      Category: "Surrealist Artists",
      Words: ["Breton", "Arp", "Ernst", "Tanguy"],
    },
    {
      Category: "Animals Mentioned in Beatles Song Titles",
      Words: ["Blackbird", "Pony", "Bulldog", "Octopus"],
    },
    {
      Category: "Common School Supplies",
      Words: ["Highlighter", "Three-ring Binder", "Eraser", "Index Card"],
    },
  ],
  [
    {
      Category: "Native Names of Countries",
      Words: ["Nippon", "Hellas", "Suomi", "Sverige"],
    },
    {
      Category: "Cthulhu Mythos Great Old Ones",
      Words: ["Cthulhu", "Aylith", "Han", "Ithaqua"],
    },
    {
      Category: "Chinese Ethnic Groups",
      Words: ["Zhuang", "Uyghurs", "Hui", "Manchu"],
    },
    {
      Category: "Alkali metal",
      Words: ["Lithium", "Sodium", "Francium", "Caesium"],
    },
  ],
  [
    {
      Category: "Adjectives Preceding Famous Birds",
      Words: ["Angry", "Flappy", "Big", "Song"],
    },
    {
      Category: "Places Named Twice",
      Words: [
        "Sing Sing",
        "Bora Bora",
        "New York, New York ",
        "Circus Circus ",
      ],
    },
    {
      Category: "Musical Children's TV Shows",
      Words: [
        "Gullah Gullah Island ",
        "Yo Gabba Gabba",
        "The Wiggles ",
        "The Doodlebops",
      ],
    },
    {
      Category: "TV Shows set on Islands",
      Words: ["Love Island ", "Gilligan's Island ", "Survivor ", "Lost"],
    },
  ],
  [
    {
      Category: "Types of Grass",
      Words: ["Bent", "Bermuda", "Kentucky Blue", "Centipede"],
    },
    {
      Category: "Islands of the Caribbean",
      Words: ["Barbados", "Grenada", "Honduras", "Panama"],
    },
    {
      Category: "Contains Metric Prefixes",
      Words: ["Microphone", "Gigabyte", "Decibel", "PETA"],
    },
    {
      Category: "World Canals",
      Words: [
        "Beijing-Hangzhou Grand",
        "Suez",
        "Corinth",
        "White Sea-Baltic Sea",
      ],
    },
  ],
  [
    {
      Category: "Workouts in Rocky Movies",
      Words: [
        "Running With Bricks in Your Hands",
        "Distance Running",
        "Punching Meat",
        "Chasing a Chicken",
      ],
    },
    {
      Category: "Olympic Events",
      Words: ["Rhythmic Gymnastics", "Swimming", "Judo", "Weightlifting"],
    },
    {
      Category: "Martial Arts",
      Words: ["Karate", "Taekwondo", "Kickboxing", "Kung Fu"],
    },
    {
      Category: "Chasing Idioms",
      Words: [
        "A Goose Chase",
        "Don't Go Chasing Waterfalls",
        "Chasing Your Tail",
        "Ambulance Chasing",
      ],
    },
  ],
  [
    {
      Category: "Root Tubers",
      Words: ["Sweet Potato", "Cassava", "Dahlia", "Carrot"],
    },
    {
      Category: "Foods That Can Generate Electricity",
      Words: ["Potato", "Orange", "Lemon", "Pickle"],
    },
    {
      Category: "Common Aztec Crops",
      Words: ["Maize", "Beans", "Squash", "Tomato"],
    },
    {
      Category: "Food Idioms",
      Words: ["Piece of Cake", "Bread and Butter", "Cup of Tea", "Cheesy"],
    },
  ],
  [
    {
      Category: "Plants That Have Animals in Their Names",
      Words: ["Salmonberry", "Elephant Garlic", "Gooseberry", "Kiwi"],
    },
    {
      Category: "National Flowers",
      Words: ["Thyme", "Dogwood Tree Flower", "Maple Leaf", "Rose"],
    },
    {
      Category: "Featured on Flags",
      Words: ["Stars", "Crescents", "Sun", "Coat of Arms"],
    },
    {
      Category: "Types of Patterns",
      Words: ["Stripes", "Argyle", "Plaid", "Polka Dot"],
    },
  ],
  [
    {
      Category: "Common Amusement Park Rides",
      Words: ["Ferris Wheel", "Bumper Cars", "Carousel", "Pirate Ship"],
    },
    {
      Category: "Annual Music Festivals",
      Words: [
        "Rollercoaster",
        "Coachella",
        "Electric Daisy Carnival",
        "Tomorrowland",
      ],
    },
    {
      Category: 'Contains "Electric"',
      Words: [
        "Electric Light Orchestra",
        "Do Androids Dream of Electric Sheep?",
        "Electric Avenue",
        "Electric Eel",
      ],
    },
    {
      Category: "Disneyland Lands",
      Words: [
        "Adventureland",
        "Star Wars: Galaxy's Edge",
        "Main Street, U.S.A.",
        "Frontierland",
      ],
    },
  ],
  [
    {
      Category: "Types of Cheese",
      Words: ["Cheddar", "American", "Bleu", "Munster"],
    },
    {
      Category: "Yankee Candle Company Scents",
      Words: ["Edelweiss", "Dogwood", "Moroccan", "Cactus"],
    },
    {
      Category: "District-Free German Cities",
      Words: ["Frankfurt", "Berlin", "Dresden", "Cologne"],
    },
    {
      Category: "U.S. Sitcom Families",
      Words: ["Addams", "Brady", "Bundy", "Cleaver"],
    },
  ],
  [
    {
      Category: "TV Show Titles That Use a Single Letter",
      Words: ["A-Team", "X-Files", "Dragon Ball Z", "K-On!"],
    },
    {
      Category: "Shows aired by Fox Kids",
      Words: ["7th Heaven", "Robot Wars", "X-Men", "Sailor Moon"],
    },
    {
      Category: "Science Fiction Anthology TV Shows",
      Words: [
        "The Twilight Zone",
        "Tales of Tomorrow",
        "Science Fiction Theatre",
        "Black Mirror",
      ],
    },
    {
      Category: "Robot Combat Competitions",
      Words: ["BattleBots", "Robotica", "RoboGames", "RoboMaster"],
    },
  ],
  [
    {
      Category: "Members of the Olive Oyl Family",
      Words: ["Olive", "Castor", "Cole", "Diesel"],
    },
    {
      Category: "Types of Oil",
      Words: ["Flaxseed", "Sesame", "Coconut", "Canola"],
    },
    {
      Category: "Liquid Fuels",
      Words: ["Kerosene", "Liquefied Petroleum", "Ethanol", "Butanol"],
    },
    {
      Category: 'Preceded by "Open"',
      Words: ["Book", "House", "Armed", "Minded"],
    },
  ],
  [
    {
      Category: "Played Jim Hawkins in Treasure Island Movie Adaptations",
      Words: [
        "Francis Carpenter",
        "Kevin Bishop",
        "Joseph Gordon-Levitt",
        "Bobby Driscoll",
      ],
    },
    {
      Category: "Golden Globe Award Winner for Best Actor",
      Words: [
        "Andrew Garfield",
        "Sacha Baron Cohen",
        "Taron Egerton",
        "Christian Bale",
      ],
    },
    {
      Category: "Actors who played an Avenger",
      Words: [
        "Tom Holland",
        "Robert Downey Jr",
        "Scarlett Johansson",
        "Jeremy Renner",
      ],
    },
    {
      Category: "Cast of Pleasantville",
      Words: [
        "Tobey Maguire",
        "Reese Witherspoon",
        "Jeff Daniels",
        "Paul Walker",
      ],
    },
  ],
  [
    {
      Category: "EGOT Winners",
      Words: ["John Legend", "Jennifer Hudson", "Mel Brooks", "Audrey Hepburn"],
    },
    {
      Category: "America's Got Talent Judges",
      Words: ["Terry Crews", "Simon Cowell", "Sofía Vergara", "Howie Mandel"],
    },
    {
      Category: "Brooklyn 99 Cast Members",
      Words: [
        "Andy Samberg",
        "Melissa Fumero",
        "Andre Braugher",
        "Jason Mantzoukas",
      ],
    },
    {
      Category: "In The Heights Cast Members",
      Words: [
        "Stephanie Beatriz",
        "Melissa Barrera",
        "Anthony Ramos",
        "Lin-Manuel Miranda",
      ],
    },
  ],
  [
    {
      Category: "Crypto Currencies",
      Words: ["Ethereum", "Tether", "Dogecoin", "Bitcoin"],
    },
    {
      Category: "Climbing Equipment",
      Words: ["Harness", "Carabiner", "Quickdraw", "Chalk"],
    },
    {
      Category: "Hanna Barbera Characters",
      Words: ["Birdman", "Captain Caveman", "Dick Dastardly", "Droopy"],
    },
    {
      Category: "Generic Types of Limestone",
      Words: ["Coquina", "Oolite", "Shelly Limestone", "Tufa"],
    },
  ],
  [
    {
      Category: "Famous Stones",
      Words: [
        "Blarney Stone",
        "Rosetta Stone",
        "Stone of Destiny",
        "London Stone",
      ],
    },
    {
      Category: "WWE Wrestler Ring Names",
      Words: ["Stone Cold", "Macho Man", "Dr. Death", "The Dragon"],
    },
    {
      Category: "Marvel Villains",
      Words: ["Doctor Doom", "Galactus", "Red Skull", "Juggernaut"],
    },
    {
      Category: "Village People Songs",
      Words: ["Y.M.C.A.", "In The Navy", "Action Man", "Fire Island"],
    },
  ],
  [
    {
      Category: "Fictional Lands of Hyrule",
      Words: ["Hebra", "Gerudo", "Lanayru", "Central Hyrule"],
    },
    {
      Category: "Striped Animals",
      Words: ["Zebra", "Okapi", "Tiger", "Bumblebee"],
    },
    { Category: "Zodiac Signs", Words: ["Libra", "Scorpio", "Leo", "Taurus"] },
    { Category: "Famous Lions", Words: ["Cecil", "Simba", "Aslan", "Alex"] },
  ],
  [
    {
      Category: "Songs Featuring Colors",
      Words: [
        "Black Magic",
        "Yellow Submarine",
        "Brown Eyed Girl",
        "Goodbye Yellow Brick Road",
      ],
    },
    {
      Category: "Stereotypically Evil Magic",
      Words: ["Necromancy", "Voodoo", "Maleficium", "Ya Sang"],
    },
    {
      Category: "Characters from The Wizard of Oz",
      Words: ["The Wizard", "Tin Man", "Lion", "Toto"],
    },
    {
      Category: "Movies with Facial Features in the Title",
      Words: [
        "Hairspray",
        "Read My Lips",
        "Rudolph the red-nosed Reindeer",
        "Eyes Wide Shut",
      ],
    },
  ],
  [
    {
      Category: "Types of Archery Bows",
      Words: ["Short", "Long", "Compound", "Cross"],
    },
    {
      Category: "Types of Butter",
      Words: ["Clarified", "Brown", "Salted", "Irish"],
    },
    {
      Category: "Religious Symbols",
      Words: ["Star and Crescent", "Eye of Horus", "Mjolnir", "Torii"],
    },
    {
      Category: "Associated with Luck",
      Words: ["Horeshoe", "Black Cat", "Broken Glass", "4 Leaf Clover"],
    },
  ],
  [
    {
      Category: "Hot Sauces Featured on Hot Ones",
      Words: ["Island Wings", "Collards n Ghost", "Tyrfing's Curse", "Da Bomb"],
    },
    {
      Category: "Dungeons & Dragons Adventures",
      Words: [
        "Lost Mine of Phandelver",
        "Curse of Strahd",
        "Ghosts of Saltmarsh",
        "Locathan Rising",
      ],
    },
    {
      Category: "Commonly Considered Outdated Slang",
      Words: ["Phat", "Home Skillet", "Fugly", "Shiz"],
    },
    {
      Category: "Often Eaten Off a Stick",
      Words: ["Popsicle", "Kebab", "Caramel Apple", "Marshmallow"],
    },
  ],
  [
    {
      Category: "Mario Kart 64 Items",
      Words: ["Green Shell", "Red Shell", "Triple Mushroom", "Thunderbolt"],
    },
    {
      Category: "Video Game Invincibility Items",
      Words: ["Power Pellet", "Starman", "Golden Feather", "Laurel"],
    },
    {
      Category: "Greek Mythological Items",
      Words: ["Golden Fleece", "Winged Helmet", "Caduceus", "Cornucopia"],
    },
    {
      Category: 'Songs About a "Man"',
      Words: ["Rocket Man", "Sugar Man", "Piano Man", "Preacher Man"],
    },
  ],
  [
    {
      Category: "Cups with Handles",
      Words: ["Coffee Cup", "Measuring Cup", "Sippy Cup", "Loving Cup"],
    },
    {
      Category: "Types of Poodles",
      Words: ["Teacup", "Toy", "Miniature", "Klein"],
    },
    {
      Category: "International Competitions",
      Words: ["World Cup", "World Twenty20", "Masters", "Grands Prix"],
    },
    {
      Category: "Bands with Numbers in their Names",
      Words: ["3 Doors Down", "Eiffel 65", "Five for Fighting", "Apartment 26"],
    },
  ],
  [
    { Category: "Fa-So-La-Ti", Words: ["Faugh", "Sow", "Law", "Tea"] },
    {
      Category: "MLB Team Names in Movie Titles",
      Words: [
        "Christmas in the Rockies",
        "We're No Angels",
        "Pirates of the Caribbean",
        "Twins",
      ],
    },
    {
      Category: "Of Related to Farming",
      Words: ["Plow", "Grow", "Tillage", "Reap"],
    },
    {
      Category: "Professions That Require a License",
      Words: ["Dentistry", "Architecture", "Plumbing", "Nursing"],
    },
  ],
  [
    {
      Category: "Chapter Names in Harry Potter Books",
      Words: ["The Boy Who Lived", "Nicholas Flamel", "Aragog", "The Cave"],
    },
    {
      Category: "Characters from The Inheritance Cycle Series",
      Words: ["Eragon", "Saphira", "Arya", "Nasuada"],
    },
    {
      Category: "Lord of the Rings: Members of the Elendil Family",
      Words: ["Aragorn", "Elendil", "Elwing", "Arwen"],
    },
    {
      Category: "Connected to Immortality via Myth or Legend",
      Words: [
        "Count of St. Germain",
        "Merlin",
        "Olumba Olumba",
        "John the Apostle",
      ],
    },
  ],
  [
    {
      Category: "Characters from Sleepy Hollow",
      Words: ["Ichabod Crane", "Abbie Mills", "Jenny Mills", "Frank Irving"],
    },
    {
      Category: "Fictional Characters Named Crane",
      Words: ["Frasier Crane", "Seneca Crane", "Master Crane", "Scarecrow"],
    },
    {
      Category: "Headless Characters",
      Words: [
        "Headless Horseman",
        "The Blemmyes",
        "Agnew",
        "Sir Patrick Delaney-Podmore",
      ],
    },
    {
      Category: "Characters from The Hunger Games",
      Words: [
        "Peeta Mellark",
        "Rue",
        "Haymitch Abernathy",
        "Caesar Flickerman",
      ],
    },
  ],
  [
    { Category: "Capitonyms", Words: ["Cancer", "Hamlet", "March", "Polish"] },
    {
      Category: "Constellations",
      Words: ["Centaurus", "Draco", "Ursa Major", "Serpens"],
    },
    {
      Category: "Shakespeare Characters",
      Words: ["Polonius", "Macduff", "Lysander", "Puck"],
    },
    {
      Category: "Months of the Year",
      Words: ["May", "August", "October", "June"],
    },
  ],
  [
    {
      Category: "Landlocked Countries",
      Words: ["Switzerland", "Afghanistan", "Nepal", "South Sudan"],
    },
    {
      Category: "Red & White Country Flags",
      Words: ["Denmark", "Bahrain", "Canada", "Indonesia"],
    },
    {
      Category: "Dreamworks Films",
      Words: ["Madagascar", "Trolls", "Megamind", "Shrek"],
    },
    {
      Category: "Played Will Ferrell",
      Words: ["Ron Burgundy", "Mugatu", "Jackie Moon", "Liebkind"],
    },
  ],
  [
    {
      Category: "Alliterative US Presidents",
      Words: [
        "Calvin Coolidge",
        "Herbert Hoover",
        "Woodrow Wilson",
        "Ronald Reagan",
      ],
    },
    {
      Category: "Silent Film Stars",
      Words: ["Greta Garbo", "Max Linder", "Charlie Chaplin", "Harold Lloyd"],
    },
    {
      Category: "Famous Charles",
      Words: [
        "Charles Darwin",
        "Le Corbusier",
        "Chuck Berry",
        "Charles Dickens",
      ],
    },
    {
      Category: "Bird Names",
      Words: ["Robin Williams", "Jay Leno", "Larry Bird", "Russell Crowe"],
    },
  ],
  [
    {
      Category: "Digital Assistants",
      Words: ["Rover", "Clippy", "Alexa", "Siri"],
    },
    {
      Category: 'Preceded by "Red"',
      Words: ["Panda", "Bull", "Dwarf", "Hot Chili Peppers"],
    },
    {
      Category: "Types of Peppers",
      Words: ["Bell Pepper", "Jalapeno", "Habanero", "Poblano"],
    },
    {
      Category: "Races in Lord of the Rings",
      Words: ["Elf", "Ent", "Hobbit", "Goblin"],
    },
  ],
  [
    {
      Category: "Longest Rivers in their Respective Countries",
      Words: ["Mackenzie", "Nile", "Loire", "Shinano"],
    },
    {
      Category: "Most Subway Riders in their Respective Countries",
      Words: ["Shanghai", "Tokyo", "Seoul", "Moscow"],
    },
    {
      Category: "Host cities of Commonwealth Games",
      Words: ["Delhi", "Birmingham", "Gold Coast", "Glasgow"],
    },
    {
      Category: "Curiosity Rover's Drill Sites on Gale Crater, Mars",
      Words: ["Cumberland", "Mojave", "Big Sky", "Duluth"],
    },
  ],
  [
    {
      Category: "Scott Pilgrim Characters",
      Words: ["Pilgrim", "Wells", "Chau", "Stills"],
    },
    {
      Category: "Characters who have been Spider-Man",
      Words: ["Octavius", "Morales", "Stacy", "Parker"],
    },
    {
      Category: "Cartoon Family Surnames",
      Words: ["Pines", "Duck", "Thornberry", "Shortman"],
    },
    {
      Category: "Disney Channel Original Movie Main Characters",
      Words: ["Brinker", "Griffin", "Kapahala", "Thompson"],
    },
  ],
  [
    {
      Category: "Styles of Pizza",
      Words: ["Margherita", "Deep Dish", "Sicilian", "New York"],
    },
    {
      Category: "Alcoholic Cocktails",
      Words: ["Cosmopolitan", "Mojito", "Martini", "Manhattan"],
    },
    {
      Category: "New York Neighborhoods",
      Words: ["Harlem", "Port Morris", "Hell's Kitchen", "Astoria"],
    },
    {
      Category: "Gordon Ramsay TV Shows",
      Words: [
        "MasterChef",
        "Kitchen Nightmares",
        "Hotel Hell",
        "Gordon Behind Bars",
      ],
    },
  ],
  [
    {
      Category: "Characters with Traveling Houses",
      Words: [
        "Howl Pendragon",
        "Baba Yaga",
        "Carl Fredricksen",
        "Zachary Comstock",
      ],
    },
    {
      Category: "Russian Fairy Tales",
      Words: [
        "Kikimora",
        "The Frog Princess",
        "Father Frost",
        "Vasilisa the Beautiful",
      ],
    },
    {
      Category: "Characters from Rise of the Guardians",
      Words: [
        "Pitch Black",
        "Nicholas St. North",
        "E. Aster Bunnymund",
        "Toothiana",
      ],
    },
    {
      Category: "Characters from Up",
      Words: ["Dug", "Alpha", "Russell", "Ellie Fredricksen"],
    },
  ],
  [
    {
      Category: "Preceded by Weeping",
      Words: ["Angel", "Willow", "Crucifix", "Water, NE"],
    },
    {
      Category: "Papal Garments",
      Words: ["Mozzetta", "Camauro", "White Cassock", "Red Mantle"],
    },
    {
      Category: "Buffy the Vampire Slayer Characters",
      Words: ["Buffy", "Xander", "Spike", "Dawn"],
    },
    {
      Category: "Most Populous Cities in Nebraska",
      Words: ["Omaha, NE", "Lincoln, NE", "Bellevue, NE", "Grand Island, NE"],
    },
  ],
  [
    {
      Category: "Sprouts",
      Words: ["Brussels", "Mung Bean", "Broccoli", "Alfalfa"],
    },
    {
      Category: "Most Populous Cities in Belgium",
      Words: ["Antwerp", "Ghent", "Charleroi", "Liege"],
    },
    {
      Category: "Words that Repeat Themselves",
      Words: ["Couscous", "Murmur", "Dodo", "Tartar"],
    },
    {
      Category: "Extinct Animals",
      Words: [
        "Sabre-tooth Cat",
        "Woolly Mammoth",
        "Great Auk",
        "Tasmanian Tiger",
      ],
    },
  ],
  [
    {
      Category: "Types of Planes",
      Words: ["Aero", "Hydro", "Astral", "Geometric"],
    },
    {
      Category: "Chocolate Bars",
      Words: ["Tony's", "Kinder", "Milka", "Hershey's"],
    },
    {
      Category: "Fictional Business Owners",
      Words: ["Wonka", "McDuck", "Hawthorne", "Burns"],
    },
    {
      Category: "Characters from The Simpsons",
      Words: ["Simpson", "Flanders", "Houten", "Wiggum"],
    },
  ],
  [
    {
      Category: "Fictional Clowns",
      Words: ["Krusty", "McDonald", "Pennywise", "The Joker"],
    },
    {
      Category: "Fast-Food Franchises",
      Words: ["Burger King", "Wendy's", "Chick-Fil-A", "Subway"],
    },
    {
      Category: "4, 5, 6, 7",
      Words: ["Five Guys", "Four Seasons", "Motel 6", "7-11"],
    },
    {
      Category: "Common Hotel Brands",
      Words: ["Days Inn", "Hyatt", "Hampton", "Sheraton"],
    },
  ],
  [
    {
      Category: "Fictional Hotels",
      Words: [
        "The Tipton",
        "The Brandenham",
        "The Grand Budapest",
        "The Great Northern",
      ],
    },
    {
      Category: "Played by Brenda Song",
      Words: ["Wendy Wu", "Anne Boonchuy", "Madison Maxwell", "Christy"],
    },
    {
      Category: "Asian-American Cartoon Characters",
      Words: ["Jake Long", "Juniper Lee", "Hiro Hamada", "Phoebe Heyerdahl"],
    },
    {
      Category: "Famous Companies' Original Names",
      Words: ["TheFacebook", "Firebird", "Stag Party", "BackRub"],
    },
  ],
  [
    { Category: "Notable Jedi", Words: ["Yoda", "Dooku", "Jinn", "Tano"] },
    {
      Category: "Wishing Granting Creatures",
      Words: [
        "Genie",
        "Leprechaun",
        "The Fisherman's Fish",
        "The Eternal Dragon",
      ],
    },
    {
      Category: "Played by Frank Oz",
      Words: ["Cookie Monster", "Bert", "Miss Piggy", "Subconcious Guard Dave"],
    },
    {
      Category: "Puppeteered Characters in Movies",
      Words: ["Gremlins", "Audrey II", "Terror Dogs", "E.T."],
    },
  ],
];