import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "./../src/Board/Board";
import btoa from "btoa";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const puzzle: Category[] = [
    {
      Category: "D&D Classes",
      Words: ["Paladin", "Druid", "Bard", "Cleric"],
    },
    {
      Category: "Nissan Models",
      Words: ["Pathfinder", "Rogue", "Altima", "Juke"],
    },
    {
      Category: "Computer Magazines",
      Words: ["Wired", "PC World", "Antic", "Byte"],
    },
    {
      Category: "Words for Excited",
      Words: ["Charged", "Hysterical", "Eager", "Frantic"],
    },
  ];

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
