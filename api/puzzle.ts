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

  const resBody = {
    "Look Away": "What you're doing right now is called cheating",
    puzzle: btoa(JSON.stringify(puzzle)),
  };

  res.status(200).json({
    body: resBody,
  });
};

export default handler;
