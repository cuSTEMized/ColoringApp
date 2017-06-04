# INSTALLATION INSTRUCTIONS FOR MAC

```
sudo npm install -g cordova
cordova create coloring com.custemized.coloring Coloring
cd coloring
cordova platforms add ios
cordova platforms add android
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-console
cordova plugin add cordova-plugin-splashscreen
```

# BUILDING YOUR APP

```
cordova build ios
cordova emulate ios
```
# Generate splash screen
https://github.com/AlexDisler/cordova-splash
