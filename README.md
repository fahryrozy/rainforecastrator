# Rain Forecastrator

Rain Forecastrator is a React Native mobile application that allows users to monitor weather using the [WeatherAPI](https://www.weatherapi.com). Stay informed about current weather conditions, get forecasts, and plan your activities accordingly.

## Features

- **Current Weather:** View real-time weather conditions at your location.
- **Forecast:** Get a detailed weather forecast for the upcoming days.
- **Location-based:** Automatically fetch weather information based on the user's location.
- **Custom Locations:** Search and add custom locations to check weather conditions for different places.

## Screenshots

<img src="https://firebasestorage.googleapis.com/v0/b/myportfolio-frs.appspot.com/o/rainforecastrator%2Fhome-day.png?alt=media&token=f832a477-47e9-4723-b641-a6710395542c" width="auto" height="350px"/> <img src="https://firebasestorage.googleapis.com/v0/b/myportfolio-frs.appspot.com/o/rainforecastrator%2Fhome-night.png?alt=media&token=deb9598c-aef3-4ffe-8fbf-ac6c7209b41a" width="auto" height="350px"/> <img src="https://firebasestorage.googleapis.com/v0/b/myportfolio-frs.appspot.com/o/rainforecastrator%2Fsearch-query.png?alt=media&token=cf5cb9fe-fdf4-4f58-aa07-00219065e0b2" width="auto" height="350px"/> <img src="https://firebasestorage.googleapis.com/v0/b/myportfolio-frs.appspot.com/o/rainforecastrator%2Fsearch-page.png?alt=media&token=fda160cc-a9d9-4e62-942a-e10cd5c26f4d" width="auto" height="350px"/>

## Demo

You can download the [demo apk here](https://drive.google.com/file/d/1ijDuD43koG_zIFAdvwzKlEeM7FNS6uob/view?usp=sharing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm or yarn installed
- React Native development environment set up
- WeatherAPI key (Sign up at [WeatherAPI](https://www.weatherapi.com) to obtain your API key)
- Sentry DSN key (Sign up at [Sentry](https://sentry.io) to obtain your key)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rain-forecastrator.git

   ```

2. Navigate to the project directory

   ```bash
   cd RainForecastRator

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create a .env file in the project root and add your Config like this:

   ```bash
   BASE_URL=<WEATHER_API_BASE_URL>
   API_KEY=<YOUR_KEY>
   SENTRY_DSN=<YOUR_SENTRY_DSN>

   ```

5. Run the application :

   ```bash
   npx react-native run-android

   ```

## Acknowledgement

Thanks to WeatherAPI for providing the weather data.

## Contact

For any questions or concerns, feel free to reach out to [fahryrozysrg@gmail.com].

## LIMITATION

Currently, Rain Forecastrator has been tested only on Android devices.
