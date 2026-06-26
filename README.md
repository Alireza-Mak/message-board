# Hi, I'm Alireza! 👋

## 🚀 About Me

I'm a full stack developer who builds modern, type-safe web applications — from interactive React front ends to the APIs and data behind them.

# About the Project: Message Board (Front-end) 💬

**Message Board** is a real-time message board application where authenticated users can post, edit, and delete their own messages. It communicates with a dedicated REST API back end and uses JWT-based authentication to protect user actions.

The project was built to explore **full-stack integration in Next.js** using the App Router, React Context for global state, and Zod for runtime form validation. All server communication is handled through Axios, keeping the service layer clean and separate from UI concerns.

### Key Features

- **JWT authentication** — Users log in and receive a token stored in `sessionStorage`. All write operations attach the token as a Bearer header; expired tokens are detected client-side and the user is treated as logged out.
- **Live message feed** — All messages are fetched from the API on load and kept in sync with local state after every add, edit, or delete.
- **Add messages** — Authenticated users can post a new message. Duplicate detection prevents submitting a message that already exists in the board.
- **Edit messages** — Owners can update the text of their own messages inline.
- **Delete messages** — Owners can remove their own messages; the list updates immediately without a page refresh.
- **Filter messages** — The board can be filtered to show only the logged-in user's messages.
- **Ownership enforcement** — Edit and delete controls are only shown to the message owner.
- **Form validation** — Zod schemas validate input on the client before any request is made.
- **Loading states** — A loading indicator is shown while API requests are in flight.

### Architecture Highlights

- **App Router (Next.js)** with a `RootLayout` wrapping the app in a single `MessageProvider` context.
- **`MessagesContext`** manages the full message list and exposes `addMessage`, `editMessage`, and `deleteMessage` to the component tree.
- **Custom `useMessages` hook** to consume the context cleanly across components.
- **Service layer** (`messageService`, `loginService`) isolates all Axios calls from UI logic.
- **Auth utility** (`auth.js`) wraps `jwt-decode` to read the token, check expiry, and extract the logged-in username.
- **Zod schemas** (`messageSchema`, `userSchema`) for type-safe form validation.

## Tech Stack

**Client:** Next.js (App Router), React, TypeScript, Tailwind CSS

**State Management:** React Context API

**HTTP:** Axios

**Validation:** Zod

**Auth:** JWT (`jwt-decode`)

**Build Tool:** Next.js / Turbopack

## 🛠 Skills

React, Next.js, TypeScript, JavaScript, Tailwind CSS, Zod, Axios, JWT, Context API, HTML, CSS

## Installation

Clone and run the front end locally (requires the back-end server to be running):

```bash
git clone https://github.com/Alireza-Mak/message-board.git
```

```bash
cd message-board
```

```bash
npm install
```

Copy the environment file and fill in your back-end host and port:

```bash
cp .env.example .env
```

```env
NEXT_PUBLIC_HOSTNAME=localhost
NEXT_PUBLIC_PORT=3004
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Support

For support, email Info@alirezamak.com.

## Authors

- [@Alireza-Mak](https://www.github.com/Alireza-Mak)

![Logo](https://alirezamak.com/wp-content/uploads/fav-icon-final-e1685159385524.png)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://alirezamak.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alireza-mak/)
[![email](https://img.shields.io/badge/email-1DA1F2?style=for-the-badge&logo=mail.Ru&logoColor=white)](mailto:info@alirezamak.com)

## Related

Here are related projects:

- [Message Board — Back-end](https://github.com/Alireza-Mak/message-board-server)
- [WorldWise](https://github.com/Alireza-Mak/WorldWise)
