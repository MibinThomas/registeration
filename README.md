# The Bootroom AE – Team Registration Platform

A full-stack Next.js 14 (App Router) web app for company football team registration, PDF ticket generation, and admin management.

## 🚀 Quick Start
1. `npm install`
2. Copy `.env.example` → `.env.local` and fill in credentials.
3. Run MongoDB Atlas instance.
4. `npx prisma generate`
5. `npm run dev` → open [http://localhost:3000](http://localhost:3000)

## 🛠 Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (Retro theme)
- Prisma ORM + MongoDB Atlas
- AWS S3 for uploads
- NextAuth (Email / Password)
- QR Code + PDF ticket generation

## 🧰 Deployment
Deploy easily on [Vercel](https://vercel.com).  
Add environment variables from `.env.local`.

