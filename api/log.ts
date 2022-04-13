import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Parse the body
  const body = JSON.parse(req.body);

  // Create the Airtable connection
  const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY || "" }).base(
    process.env.AIRTABLE_BASE || ""
  );

  // Check if we should log
  base("Controls")
    .select({
      filterByFormula: `Setting = "Log"`,
    })
    .all()
    .then((records) => {
      const canLog = records?.[0]?.get("Value") === "true";

      // Check if we are supposed to log
      if (canLog || body.Override) {
        // Get Date/Time in Denver
        const today = new Date(
          new Date().toLocaleString("en-US", {
            timeZone: "America/Denver",
          })
        );

        // Log the thing
        return base("Logs")
          .create([
            {
              fields: {
                Date: today.toString(),
                User: body.User,
                Area: body.Area,
                Event: body.Event,
              },
            },
          ])
          .then(() => res.status(200).send(true))
          .catch((err) => res.status(500).send(err));
      }
    })
    .catch((err) => res.status(500).send(err));
};

export default handler;
