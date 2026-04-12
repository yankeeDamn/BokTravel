# 🚤 BokTravel

**Explore the Sundarban Islands** — Book boat trips from Bokkhali to Mousuni Island, Jammu Deep, and more.

![BokTravel](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6+-646CFF?style=flat&logo=vite)

## ✨ Features

- 🔍 **Search & Browse** - Find available boat schedules to island destinations
- 💳 **Secure Payments** - Pay online via Razorpay (UPI, cards, net banking)
- 🎫 **QR Tickets** - Instant digital tickets — no printout needed
- 📱 **SMS/WhatsApp Notifications** - Operators receive booking alerts even in low connectivity
- ✅ **Real-time Confirmation** - Operators confirm bookings via app or SMS
- 📞 **Admin Support** - Book via phone call with admin assistance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Development

```bash
# Navigate to the web app
cd web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
cd web
npm run build
npm run preview
```

## 📁 Project Structure

```
BokTravel/
├── web/                    # Customer-facing React web app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── types/          # TypeScript types
│   │   ├── App.tsx         # Main application
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json
└── README.md
```

## 🌐 Deployment

This project is configured for **Vercel** deployment. A root-level `vercel.json` handles everything automatically — no dashboard changes required.

### Deploy to Vercel (zero-config)

1. Connect your GitHub repository to Vercel
2. Leave all build settings at their defaults — `vercel.json` at the repo root configures everything
3. Deploy 🚀

Vercel will automatically:
- Run `cd web && npm install && npm run build`
- Serve the output from `web/dist`
- Rewrite all routes to `/index.html` for single-page app navigation

> **Note:** The `web/vercel.json` is kept for local `vercel dev` usage inside the `web/` directory. The root `vercel.json` is what Vercel uses in production.

## 🛠️ Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📖 Planned Features

- [ ] Backend API (Node.js + Express + Prisma)
- [ ] Payment Integration (Razorpay)
- [ ] SMS/WhatsApp Notifications (Twilio)
- [ ] QR Ticket Generation
- [ ] Operator PWA App
- [ ] Admin Dashboard

## 📄 License

MIT

---

Made with ❤️ for Sundarbans tourism
