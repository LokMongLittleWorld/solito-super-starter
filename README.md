# Solito Super Starter

A powerful and scalable cross-platform super starter kit for building React and React Native applications using Solito.

## Description

Solito Super Starter is a comprehensive boilerplate that combines the best of web and mobile development. It leverages Solito to create a unified codebase for both React (Next.js) and React Native (Expo) applications, providing a seamless development experience across platforms.

## Live Demo

Check out the live demo of the web version [here](https://solito-super-starter-next.vercel.app/).

## Features

- 🔐 JWT Authentication
- 🎨 Tailwind CSS for consistent styling
- 🗃️ Redux for state management
- 📝 Zod and React Hook Form for robust form handling
- 💾 Persistent storage for tokens
- 🚀 Scalable file structure
- 🍞 Toast notifications
- 📱 Cross-platform compatibility (Web and Mobile)

## Built with

- [Solito](https://solito.dev/): For cross-platform navigation
- [Next.js](https://nextjs.org/): React framework for web
- [Expo](https://expo.dev/): React Native framework for mobile
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/): State management
- [Zod](https://github.com/colinhacks/zod): TypeScript-first schema validation
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms
- [JWT](https://jwt.io/): JSON Web Tokens for authentication

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/LokMongLittleWorld/solito-super-starter.git
   ```

2. Set Up Environment Variables
   Create a new `.env` file by copying from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Open the newly created `.env` file and configure your own JWT_SECRET. For example:
   ```
   ENVIRONMENT=development
   JWT_SECRET=your_jwt_secret_here
   ```


3. Install dependencies:
   ```bash
   cd solito-super-starter
   yarn install
   ```

4. Start the development servers:

   For web (Next.js):
   ```bash
   yarn web
   ```

   For mobile (Expo):
   ```bash
   yarn native
   ```

## Project Structure

```
.
├── apps
│   ├── expo (React Native app)
│   └── next (Next.js app)
├── packages
│   └── app (Shared components and logic)
│       ├── components
│       ├── features
│       ├── navigation
│       ├── provider
│       ├── redux
│       ├── service
│       ├── types
│       └── utils
├── package.json
└── README.md
```

### Key Directories

- `apps/expo`: Expo-specific code and configurations
- `apps/next`: Next.js-specific code and pages
- `packages/app`: Shared business logic, components, and utilities
  - `components`: Reusable UI components
  - `features`: Feature-specific screens and logic
  - `navigation`: Navigation setup for both platforms
  - `provider`: Context providers and HOCs
  - `redux`: Redux store, slices, and actions
  - `service`: API services and data fetching logic
  - `types`: TypeScript type definitions
  - `utils`: Utility functions and helpers

## Development Practices

- Use the shared `packages/app` directory for cross-platform code
- Platform-specific implementations are handled in `apps/expo` and `apps/next`
- Utilize TypeScript for type safety across the project
- Follow the established file structure for scalability
- Leverage Tailwind CSS for consistent styling across platforms
- Implement new features in the `features` directory
- Use the `services` directory for API calls and data management
- Keep business logic separate from UI components for better testability

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.