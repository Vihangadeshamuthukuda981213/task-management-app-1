# Task Management App

A simple task management application built with Next.js, Supabase, and deployed on Vercel.

## Features

- User authentication (sign up/sign in)
- Create, read, update, and delete tasks
- Mark tasks as completed
- User-specific task management (users can only see their own tasks)
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Supabase (Authentication & Database)
- **Form Management**: React Hook Form
- **Deployment**: Vercel

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a Supabase project and run the migration SQL in `/supabase/migrations`
4. Create `.env.local` with your Supabase credentials
5. Run locally: `npm run dev`

## Database Schema

See `/supabase/migrations/001_initial_schema.sql` for the complete schema with Row Level Security policies.s