import { ExpoConfig, ConfigContext } from '@expo/config';
import 'dotenv/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
    "name": "My Fitness",
    "slug": "fitness-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/dummy-logo.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_MAPS_APIKEY
        }
      },
      "package": "com.nefarioum.fitnessapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "sentry-expo"
    ],
    "hooks": {
      "postPublish": [
        {
          "file": "sentry-expo/upload-sourcemaps",
          "config": {
            "organization": process.env.SENTRY_ORG,
            "project": process.env.SENTRY_PROJECT,
            "authToken": process.env.SENTRY_AUTH_TOKEN
          }
        }
      ]
    }
});