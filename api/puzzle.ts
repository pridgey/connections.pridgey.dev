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
  "4/12": [
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
