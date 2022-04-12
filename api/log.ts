import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ req, body: req.body });

  const today = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
    })
  );

  const body = JSON.parse(req.body);

  const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY || "" }).base(
    process.env.AIRTABLE_BASE || ""
  );

  base("Logs")
    .create([
      {
        fields: {
          Date: today.toString(),
          User: "",
          Area: body.area,
          Event: body.event,
        },
      },
    ])
    .then(() => res.status(200).send(true))
    .catch((err) => res.status(500).send(err));
};

export default handler;
