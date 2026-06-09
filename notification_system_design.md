# Notification App System Design

## Overview
This repository implements the frontend track for a notification system evaluation. The application is designed to display notifications in two modes:

- **All Notifications:** Filterable by type (event, result, placement)
- **Priority Inbox:** Ranked by urgency and recency

A reusable logging middleware package is included at the repository root so the application can report lifecycle events to the evaluation server.

## Structure
- `logging_middleware/`
  - Reusable package exposing `Log(stack, level, package, message)`
  - Designed to be consumed by frontend components and any future service modules
- `notification_app_fe/`
  - Frontend application built with React, TypeScript, Vite, and Material UI
  - Includes app pages, component library, API integration, and sample notification data
- `notification_system_design.md`
  - This design document

## Logging Strategy
The application logs meaningful events such as:
- App startup and route load
- Notification data fetch attempts and failures
- User actions such as marking notifications seen

The `Log` function sends structured log messages to the test server, enabling observability and debugging.

## Frontend Architecture
- **React + TypeScript** for a typed and maintainable UI
- **Material UI** for consistent styling and responsive layout
- **React Router** for page navigation between the notifications list and priority inbox
- **Client-side sorting** for priority ordering using notification metadata

## Deployment Notes
- Install dependencies inside `notification_app_fe/`
- Run the app with `npm run dev`
- The app is designed to mirror the frontend track requirements with mobile and desktop-friendly layout
