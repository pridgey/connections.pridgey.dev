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

  const resBody = {
    Woah: "What you're doing right now is called cheating",
    puzzle: btoa(stringed),
  };

  res.status(200).json({
    body: resBody,
  });
};

export default handler;
