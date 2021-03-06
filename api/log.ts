import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
      const canLog = ["true", "all", body.Area].includes(
        records?.[0]?.get("Value")
      );

      console.log("Can Log:", {
        canLog,
        Area: body.Area,
        Value: records?.[0]?.get("Value"),
      });

      // Check if we are supposed to log
      if (canLog || body.Override) {
        // Get Date/Time in Denver
        const today = new Date(
          new Date().toLocaleString("en-US", {
            timeZone: "America/Denver",
          })
        );

        // Delete anything one week or older
        base("Logs")
          .select({
            filterByFormula: `DATETIME_DIFF(TODAY(),Date,'d') >= 7`,
          })
          .all()
          .then((records) => {
            base("Logs").destroy(records.map((rec) => rec.id));
          });

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
      } else {
        res.status(202).send(true);
      }
    })
    .catch((err) => res.status(500).send(err));
};

export default handler;
