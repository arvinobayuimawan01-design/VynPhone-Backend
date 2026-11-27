const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("VynPhone Backend aktif");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/cloudphone/status", (req, res) => {
  res.json({
    connected: false,
    message: "Android host belum terhubung"
  });
});

app.listen(process.env.PORT || 3000);
