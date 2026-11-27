# VynPhone Backend v1

This is the first control-API scaffold for VynPhone.

## Important limitation

This backend is an API service only. It does **not** run Android 15, provide 6 GB RAM / 64 GB storage, or stream/control a virtual phone. Those features require a separate Linux host capable of Android virtualization and a remote-display/control service.

## Endpoints

- `GET /` - service information
- `GET /health` - health check
- `GET /api/cloudphone/status` - current CloudPhone status
- `POST /api/cloudphone/start` - returns a clear 503 until an Android host is connected

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm start
```

Then open `http://localhost:3000/health`.

## Deploy

The included `render.yaml` can be used as a starting point for a Render web service. A free web service may sleep when idle and is not suitable for hosting the Android virtual device itself.
