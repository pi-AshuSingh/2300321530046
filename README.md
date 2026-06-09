# AFFORDMED Campus Notifications Frontend

This is a React + Material UI frontend app built to match the campus notification dashboard design implied by the provided screenshots.

## Features
- All Notifications page with filter controls for event, result, and placement updates
- Priority Inbox page showing the most urgent notifications first
- Local fallback sample data if the remote notification API is unavailable
- Live refresh and seen/unseen toggles for each notification
- Runs on `http://localhost:3000`

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Notes
- The app attempts to fetch from `https://4.224.186.213/evaluation-service/notifications`.
- If that endpoint is unavailable or returns an error, the app displays local sample notifications.
