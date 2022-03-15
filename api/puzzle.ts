import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "@compositions";
import btoa from "btoa";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const puzzle: Category[] = [
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
