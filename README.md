# Users Dashboard

A responsive users dashboard built with React, featuring pagination, search with debouncing, and a mobile-friendly UI (table → cards).

---

## Features

- Search users (debounced)
- Pagination (Previous / Next)
- Responsive UI (table on desktop, cards on mobile)
- Data fetching with TanStack Query
- Global state with Zustand
- UI built with Chakra UI
- Dark / Light mode support

---

## Tech Stack

- React
- TypeScript
- TanStack Query (React Query)
- Zustand
- Chakra UI
- React Router (for more user details)
- Axios

---

## Getting Started

You can run the project locally using either **npm** or **yarn**.

---

## 1. Clone the repository

```bash
git https://github.com/Bobstyle23/gaba-project
cd gaba-project
```

---

## 2. Install dependencies

### Using npm

```bash
npm install
```

### Using yarn

```bash
yarn install
```

---

## 3. Run the development server

### Using npm

```bash
npm run dev
```

### Using yarn

```bash
yarn dev
```

---

## 4. Open in browser

After starting the server, open:

```
http://localhost:5173
```

---

## Environment Variables

Make sure you have a `.env` file in the root:

```env
VITE_BASE_URL=https://dummyjson.com
```

> Restart the dev server after changing `.env`

---

## Project Structure

```
src/
 ├── components/     # UI components (Users, Search, etc.)
 ├── hooks/          # Custom hooks (useUsers, useDebounce, etc)
 ├── stores/         # Zustand store
 ├── pages/          # Pages (HomePage, UserDetail)
 ├── services/       # API client
 ├── entities/       # Re-usable, single source of truth interfaces

```

---

## Notes

- Server state is managed by TanStack Query
- UI state (page, search) is managed by Zustand
- Search is debounced to reduce API calls
- Pagination resets when search changes

---

## Build for production

### npm

```bash
npm run build
```

### yarn

```bash
yarn build
```

---

## License

This project is for demo purposes.
