# Toronto Raptors Encyclopedia

## Overview
This mobile application is a comprehensive encyclopedia about the Toronto Raptors, built using React Native and Expo. It provides detailed information about:

- The current 2024 Toronto Raptors roster.
- All-time players who have been part of the Raptors.
- The team’s uniforms over the years.
- Arenas the Raptors have called home.

## Features

1. **Dynamic Data Retrieval**:
    - Utilizes a web service to fetch data dynamically.
    - Incorporates parameters that change based on user input or actions, such as searching for a player or selecting a specific year.

2. **User Interface Components**:
    - **List View Component**: Displays lists of players, uniforms, or arenas in a scrollable format.
    - **TextInput Component**: Allows users to search for specific players or uniforms.
    - **Button Components**: Enables navigation and actions such as searching or filtering data.
    - **Images**: Showcases visuals of players, uniforms, and arenas to enhance user experience.

3. Organized Code Structure:
    - **`assets` folder**: Contains imagery for players, uniforms, and arenas.
    - **`components` folder**: Houses modular JavaScript files for different sections of the application.
    - **`App.js`**: Acts as the main navigation and logic hub of the app.
    - **`package.json`**: Manages dependencies, including React Native and Expo packages.

4. Cross-Platform Compatibility:
    - Built using Expo.dev, ensuring the application runs seamlessly on both iOS and Android platforms.

## Highlights

- Professional design with an intuitive user interface.
- Integration of multiple web service endpoints for comprehensive data retrieval.
- Exceeds basic requirements by including additional features such as visual highlights and a polished UI.

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/toronto-raptors-encyclopedia.git
   cd toronto-raptors-encyclopedia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   expo start
   ```

4. Open the project on your device:
   - Scan the QR code displayed in the terminal using the Expo Go app.

## Demo
Access the project live on Expo Snack:
[Toronto Raptors Encyclopedia](https://snack.expo.dev/@tannedhoneycomb/toronto-raptors-encyclopedia?platform=web)

## Learning Objectives Met

- Implemented a mobile application using React Native.
- Retrieved data from a web service dynamically, responding to user actions.
- Designed and built a professional and user-friendly application interface.

## Future Enhancements

- Add more detailed player statistics.
- Incorporate user authentication for personalized experiences.
- Expand data coverage to include Raptors' game schedules and historical achievements.

## Acknowledgments

This project was created as part of a learning initiative to explore React Native and web services integration. Special thanks to the Expo.dev team and online React Native community for their resources and support.
