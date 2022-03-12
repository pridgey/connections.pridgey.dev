import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "./../src/Board/Board";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const puzzle: Category[] = [
    {
      Category: "Ninja Turtles Characters",
      Words: ["Leonardo", "Raphael", "April"],
    },
    {
      Category: "Renaissance Artists",
      Words: ["Michelangelo", "Botticelli", "Bellini"],
    },
    {
      Category: "Mixed Cocktails",
      Words: ["Manhattan", "Margarita", "Old Fashioned"],
    },
    {
      Category: "New York Neighborhoods",
      Words: ["Bronx", "Brooklyn", "Queens"],
    },
  ];

  const stringed = JSON.stringify(puzzle);

  const resBody = {
    Woah: "What you're doing right now is called cheating",
    strin: stringed,
    puzzle: btoa(stringed),
  };

  res.status(200).json({
    body: resBody,
  });
};

export default handler;
