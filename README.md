# TaskScheduler

TaskScheduler is a simple fullstack web application built using Next.js, with user authentication powered by Clerk. It allows users to schedule tasks and manage their time effectively.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/tasks.git`
2. Navigate to the project directory: `cd tasks`
3. Install dependencies: `npm install`

## Configuration

Before running the application, you need to set up the environment variables. Create a `.env.local` file in the root directory and add the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

DATABASE_URL=your_database_url
```

Replace `your_clerk_publishable_key`, `your_clerk_secret_key`, and `your_database_url` with the appropriate values obtained from Clerk and your MongoDB Atlas database.

## Usage

Generate a prisma client:

```
npx prisma generate
```

Run the application in development mode:

```
npm run dev
```

This will start the development server. Go to `localhost:3000` to access the application in your browser.

## Live Application

You can test the live application by visiting [TaskScheduler](https://task.sapkotanarayan.com.np/). You can create a new account using your email or sign up with your Google account.

## Summary of Dependencies

- Clerk: User authentication library for Next.js
- Prisma: ORM for database access
- Axios: HTTP client for making requests
- Moment.js: Library for manipulating dates
- React Hot Toast: Toast notifications for React applications
- Styled Components: Library for styling React components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
