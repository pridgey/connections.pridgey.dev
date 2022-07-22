import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "@compositions";
import btoa from "btoa";

const puzzles: { [key: string]: Category[] } = {
  "4/4": [
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
  "4/5": [
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
  "4/6": [
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
  "4/7": [
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
  "4/8": [
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
  "4/9": [
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
  "4/10": [
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
  "4/15": [
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
  "4/16": [
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
  "4/17": [
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
  "4/18": [
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
  "4/19": [
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
  "4/20": [
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
  "4/21": [
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
  "4/22": [
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
  "4/23": [
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
  "4/24": [
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
  "4/25": [
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
  "4/26": [
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
  "4/27": [
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
  "4/28": [
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
  "4/29": [
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
  "4/30": [
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
  "5/1": [
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
  "5/2": [
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
  "5/3": [
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
  "5/4": [
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
  "5/5": [
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
  "5/6": [
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
  "5/7": [
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
  "5/8": [
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
  "5/9": [
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
  "5/10": [
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
  "5/11": [
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
  "5/12": [
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
  "5/13": [
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
  "5/14": [
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
  "5/15": [
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
  "5/16": [
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
  "5/17": [
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
  "5/18": [
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
  "5/19": [
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
  "5/20": [
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
  "5/21": [
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
  "5/22": [
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
  "5/23": [
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
  "5/24": [
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
  "5/25": [
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
  "5/26": [
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
  "5/27": [
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
  "5/28": [
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
  "5/29": [
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
  "5/30": [
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
  "5/31": [
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
  "6/1": [
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
  "6/2": [
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
  "6/3": [
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
  "6/4": [
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
  "6/5": [
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
  "6/6": [
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
  "6/7": [
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
  "6/8": [
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
  "6/9": [
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
  "6/10": [
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
  "6/11": [
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
  "6/12": [
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
  "6/13": [
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
  "6/14": [
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
  "6/15": [
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
  "6/16": [
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
  "6/17": [
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
  "6/18": [
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
  "6/19": [
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
  "6/20": [
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
  "6/21": [
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
  "6/22": [
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
  "6/23": [
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
  "6/24": [
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
  "6/25": [
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
  "6/26": [
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
  "6/27": [
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
  "6/28": [
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
  "6/29": [
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
  "6/30": [
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
  "7/1": [
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
  "7/2": [
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
  "7/3": [
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
  "7/4": [
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
  "7/5": [
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
  "7/6": [
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
  "7/7": [
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
  "7/8": [
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
  "7/9": [
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
  "7/10": [
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
  "7/11": [
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
  "7/12": [
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
  "7/13": [
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
  "7/14": [
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
  "7/15": [
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
  "7/16": [
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
  "7/17": [
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
  "7/18": [
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
  "7/19": [
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
  "7/20": [
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
  "7/21": [
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
  "7/22": [
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
  "7/23": [
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
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Base it on Colorado time, for now
  const today = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
    })
  );
  const puzzleKey = `${today.getMonth() + 1}/${today.getDate()}`;

  const puzzle: Category[] = puzzles[puzzleKey];

  const stringed = JSON.stringify(puzzle);

  console.log({ stringed });

  const resBody = {
    Woah: "What you're doing right now is called cheating",
    puzzle: btoa(stringed),
  };

  res.status(200).json({
    body: resBody,
  });
};

export default handler;
