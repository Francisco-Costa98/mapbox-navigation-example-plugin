const MapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;
const MapboxDownloadToken = process.env.MAPBOX_SECRET_ACCESS_TOKEN;

export default {
  expo: {
    name: "mapbox-navigation-example-plugin",
    slug: "eas-mapbox-tbt-example",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      infoPlist: {
        UIBackgroundModes: ["location", "audio"],
        MBXAccessToken: MapboxAccessToken,
        NSLocationWhenInUseUsageDescription:
          "Allow us to use your location to provide tbt navigation",
      },
      supportsTablet: true,
      bundleIdentifier: "com.francisco.costa.easmapboxtbtexample",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.francisco.costa.easmapboxtbtexample",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsImpl: "mapbox",
          RNMapboxMapsDownloadToken: MapboxDownloadToken,
        },
      ],
      [
        "./plugins/mapboxNavigation/index",
        {
          RNMapboxAccessToken: MapboxAccessToken,
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "b083d0a5-b1ea-459d-8185-9707f26ecd5e",
      },
    },
    owner: "francisco.costa",
  },
};
