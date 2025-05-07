# UDS CS Hub Mobile App

A React Native mobile application for the University for Development Studies (UDS) Computer Science Department. This app provides students, faculty, and visitors with easy access to department information, courses, faculty profiles, and announcements.

![UDS CS Hub Mobile App](./assets/splash-icon.png)

## Features

- **Department Information**: Learn about the CS department's history, mission, vision, focus areas, and achievements.
- **Course Catalog**: Browse all courses offered by the department with detailed information.
- **Faculty Directory**: View profiles of faculty members including their contact information and research interests.
- **News & Announcements**: Stay updated with the latest department news, events, and important announcements.
- **Responsive UI**: Clean and intuitive user interface designed for both iOS and Android platforms.

## Screenshots

*Screenshots will be added here*

## Technology Stack

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation library for React Native apps
- **React Query**: Data fetching and state management
- **React Native Paper**: Material Design components
- **React Native Vector Icons**: Icon library

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/uds-cs-hub-mobile-rn.git
   cd uds-cs-hub-mobile-rn
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Run on a specific platform:
   ```bash
   # For Android
   npm run android
   
   # For iOS
   npm run ios
   
   # For web
   npm run web
   ```

## Project Structure

```
uds-cs-hub-mobile-rn/
├── assets/                  # Images, fonts, and other static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/                # Mock data for development
│   ├── lib/                 # Utilities and helpers
│   ├── navigation/          # Navigation configuration
│   ├── pages/               # Screen components
│   └── types/               # TypeScript type definitions
├── App.tsx                  # Main application component
├── index.ts                 # Entry point
├── app.json                 # Expo configuration
├── babel.config.js          # Babel configuration
├── metro.config.js          # Metro bundler configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run start-tunnel` - Start with tunnel option for remote testing
- `npm run android` - Start the app on Android
- `npm run ios` - Start the app on iOS
- `npm run web` - Start the app in a web browser

## Development Notes

### Mock Data

The app currently uses mock data located in `src/data/mockData.ts`. In a production environment, this would be replaced with API calls to a backend server.

### Navigation

The app uses React Navigation with a combination of stack and bottom tab navigators:

- Bottom Tab Navigator for main sections (Home, Courses, Faculty, News)
- Stack Navigator for detailed views and additional screens

### Styling

The app uses a consistent theme defined in `src/lib/theme.ts` with the following key elements:

- Color palette with primary (UDS Navy) and secondary (UDS Gold) colors
- Typography scale
- Spacing system
- Shadow styles

## Building for Production

To create a production build:

1. Configure app.json with your app's details
2. Build for the desired platform:

   ```bash
   # For Android
   eas build -p android
   
   # For iOS
   eas build -p ios
   ```

## Troubleshooting

### Common Issues

- **Error: "The file argument must be of type string. Received null"**:
  This error may occur when using the tunnel option. Use `npm start` instead of `npm run start-tunnel`.

- **Metro Bundler issues**:
  Try clearing the cache with `expo start -c`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- University for Development Studies Computer Science Department
- Expo Team for the excellent React Native development tools
- All contributors and maintainers

---

Developed with ❤️ for UDS Computer Science Department
