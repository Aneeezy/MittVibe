
# My Vite React App

This is a modern React app built with Vite and TypeScript. It features a social feed, profile management, event uploads, a map, notifications, and messaging.

## Features

- Social feed with posts (text and images)
- Upload new posts with images
- Profile page with editable info and post management
- Map view with event locations
- Notifications and inbox
- Responsive, SPA navigation

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

### Install dependencies

```
npm install
```

### Set up environment variables

Create a `.env` file in the root with:

```
VITE_API_BASE=http://localhost:3000
```

Adjust the URL if your backend runs elsewhere.

### Start the development server

```
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```
npm run build
```

### Preview the production build

```
npm run preview
```

## Usage

- Home: View all posts (fetched from backend if available, otherwise uses defaults)
- Upload: Add a new post with images (images are stored as base64 in frontend-only mode)
- Profile: View and manage your posts, edit profile info
- Map: See event locations
- Activity: View notifications
- Inbox: View and search messages

## Notes

- To connect to a backend, ensure your API is running and matches the endpoints used in `src/api.ts`.
- Restart the dev server after editing `.env`.

## License

MIT
