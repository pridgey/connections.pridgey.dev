import { NextApiRequest, NextApiResponse } from "next";
import KeenTracking from "keen-tracking";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const client = new KeenTracking({
    projectId: process.env.VITE_KEEN_PROJECT?.toString() || "",
    writeKey: process.env.VITE_KEEN_WRITE?.toString() || "",
  });

  const body = req.body;

  client
    .recordEvent("log", {
      area: body.area,
      event: body.event
    })
    .then((response) => {
      // handle successful responses
      res.status(200);
    })
    .catch((error) => {
      // handle errors
      res.status(500);
    });
};

export default handler;
