CheatGPT Auth Server - Vercel
=============================

Deploy ke Vercel seperti putramode.store.

File:
  api/index.js    Auth server (Node.js)
  vercel.json     Vercel config
  package.json    Dependencies

Setup:
  1. Install Vercel CLI
     npm i -g vercel

  2. Login
     vercel login

  3. Deploy
     cd cheatgpt_local
     vercel

  4. Get URL
     vercel --prod

API:
  POST /
  Body: {"p_hdi": "device-id", "p_key": "PINOK-CHEATGPT"}

  Valid response:
    https://putramode.store/payload/libBEZO.so.xzxexpiryxpackage

  Invalid response:
    {"message":"Key is not exist","statusCode":404}

Add keys:
  Edit api/index.py -> add to KEYS object

Example:
  curl -X POST https://your-app.vercel.app \
    -H "Content-Type: application/json" \
    -d '{"p_hdi":"test","p_key":"PINOK-CHEATGPT"}'
