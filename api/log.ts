import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Parse the body
  const body = JSON.parse(req.body);

  // Should we be logging?
  const shouldLog = process.env.LOG === "true";

  console.log("log", { shouldLog });

  if (shouldLog) {
    // Create the Airtable connection
    const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY || "" }).base(
      process.env.AIRTABLE_BASE || ""
    );

    // Get Date/Time in Denver
    const today = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "America/Denver",
      })
    );

    try {
      // Delete anything one week or older
      const oneWeekAndOlder = await base("Logs")
        .select({
          filterByFormula: `DATETIME_DIFF(TODAY(),Date,'d') >= 7`,
        })
        .all();

      await base("Logs").destroy(oneWeekAndOlder.map((rec) => rec.id));

      const create = await base("Logs").create([
        {
          fields: {
            Date: today.toString(),
            User: body.User,
            Area: body.Area,
            Event: body.Event,
          },
        },
      ]);

      return res.status(200).send(true);
    } catch (err) {
      return res.status(500).send(false);
    }
  }
  return res.status(200).send(true);
};

export default handler;
