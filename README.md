# Frontend Notification System

This repository implements the frontend track for a notification system evaluation.

## Repository structure
- `logging_middleware/` — reusable logging package for structured lifecycle events
- `notification_system_design.md` — architecture and design notes for the frontend solution
- `notification_app_fe/` — React + TypeScript application with Material UI styling

## App features
- All-notifications view with type filters
- Priority inbox ranked by urgency and recency
- Reusable logging middleware integrated into the frontend
- Responsive layout for desktop and mobile views

## Run locally

1. Navigate to the frontend folder:

```bash
cd notification_app_fe
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the URL shown in the terminal.

## Notes
- The application imports the root-level logging package from `logging_middleware/`.
- The `notification_system_design.md` file documents the architecture and logging strategy.
- The app still uses the evaluation server endpoint for notification fetching.
