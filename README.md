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
├── vercel.json             # Root Vercel config — builds from web/, no dashboard setup needed
├── web/                    # Customer-facing React web app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── types/          # TypeScript types
│   │   ├── App.tsx         # Main application
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   ├── vercel.json         # Vercel config when Root Directory is set to web/
│   └── package.json
└── README.md
```

## 🌐 Deployment

This project is configured for **Vercel** deployment. The frontend app lives in `web/`.

### Deploy to Vercel (zero-config)

1. Import the GitHub repository in the [Vercel dashboard](https://vercel.com/new)
2. **Leave all build settings at their defaults** — the root-level `vercel.json` handles everything automatically:
   - Runs `npm ci && npm run build` inside `web/`
   - Serves output from `web/dist`
   - Rewrites all routes to `/index.html` so client-side navigation works on refresh

That's it — no manual Root Directory or build command changes required.

### Alternative: set Root Directory in Vercel dashboard

If you prefer to configure Vercel manually instead of relying on `vercel.json`:

| Setting | Value |
|---|---|
| Root Directory | `web` |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

### Environment Variables

No environment variables are required for the current static frontend. When the backend is added, update this section with the required variables (e.g. `VITE_API_URL`).

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
