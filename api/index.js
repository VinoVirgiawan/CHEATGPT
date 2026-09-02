const KEYS = {
  "JOIN-KE-CHANNEL-@kembungjir": {
    expiry: "2099-12-31 08:33:41",
    package: "com.dts.freefiremax"
  },
  "getzy": {
    expiry: "2099-12-31 08:33:41",
    package: "com.dts.freefiremax"
  }
};

const PAYLOAD_URL = "https://putramode.store/payload/libBEZO.so.xz";

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).send("OK");
  }

  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { p_key = "", p_hdi = "" } = req.body || {};

  if (!p_key) {
    return res.status(200).json({
      message: "Invalid parameters",
      error: "Not Found",
      statusCode: 404
    });
  }

  const keyInfo = KEYS[p_key];
  if (!keyInfo) {
    return res.status(200).json({
      message: "Key is not exist",
      error: "Not Found",
      statusCode: 404
    });
  }

  const response = `${PAYLOAD_URL}\u00D7${keyInfo.expiry}\u00D7${keyInfo.package}`;

  console.log(`Auth OK: key=${p_key} hdi=${p_hdi}`);

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  return res.status(200).send(response);
};
