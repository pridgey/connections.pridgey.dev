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
  "4/11": [
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
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const today = new Date();
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
