# Next.js Authentication Project

This is a [Next.js](https://nextjs.org) application that demonstrates **authentication and authorization mechanisms** using email verification. It is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## ✨ Features

- Email-based sign-up with verification
- JWT-based token generation
- Password protection using bcryptjs
- Nodemailer integration for sending verification emails
- Mailtrap used as a development SMTP service
- Tailwind CSS for UI styling
- MongoDB Atlas for backend database

## 🛠 Technologies Used

- **Next.js**
- **Tailwind CSS**
- **Nodemailer** (with Mailtrap)
- **MongoDB Atlas**

## 📦 Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Environment Variables

Create a `.env` file in the root of your project and provide the following values:

```env
DATABASE_URL="your-mongodb-connection-string"
TOKEN_SECRET="your-jwt-secret-key"
DOMAIN="http://localhost:3000"

# Nodemailer (Mailtrap) Configuration
NODEMAILER_USER_ID="your-mailtrap-username"
NODEMAILER_PASSWORD="your-mailtrap-password"
```

> 🔒 Keep all credentials secret and **do not commit `.env`** to version control.

You must paste your **MongoDB connection URL** (from MongoDB Atlas) into the `DATABASE_URL` field.

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

## 🧪 Project Structure

- `app/` — Main app directory (App Router)
- `src/models/` — MongoDB models (e.g. User schema)
- `src/app/api/` — API routes for signup, login, and verification

## 📘 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Mailtrap Email Testing](https://mailtrap.io)
- [Mongoose Docs](https://mongoosejs.com/)

## 🚀 Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.
