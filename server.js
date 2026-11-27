const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// This service is only the VynPhone control API.
// It does not create or host an Android virtual device.
app.get("/", (_req, res) => {
  res.json({
    name: "VynPhone Backend",
    version: "1.0.0",
    message: "VynPhone API is online"
  });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "vynphone-backend" });
});

app.get("/api/cloudphone/status", (_req, res) => {
  res.json({
    connected: false,
    state: "server_not_configured",
    message: "Android CloudPhone server is not connected yet."
  });
});

app.post("/api/cloudphone/start", (_req, res) => {
  res.status(503).json({
    ok: false,
    code: "ANDROID_HOST_NOT_CONFIGURED",
    message: "The API is online, but an Android virtualization host has not been connected."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`VynPhone Backend listening on port ${PORT}`);
});
