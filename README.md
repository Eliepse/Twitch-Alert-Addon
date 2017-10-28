# Twitch Alert

[![GitHub version](https://badge.fury.io/gh/Eliepse%2FTwitch-Alert-Addon.svg)](https://badge.fury.io/gh/Eliepse%2FTwitch-Alert-Addon) [![license](https://img.shields.io/github/license/Eliepse/Twitch-Alert-Addon.svg)](https://github.com/Eliepse/Twitch-Alert-Addon/blob/master/LICENSE)

_Twitch Alert_ is an web browser addon that notify the user when a defined streamer is in live on Twitch.

This plugin is related to the project [Twitch Live Checker](https://github.com/Eliepse/Twitch-Live-Checker) who actually clusterize plugin requests to Twitch.
However, you can use/fork this addon base and adapt it to your needs !

## Compatibility

Tested on :
- Firefox >= 45
- Chrome

## Dependencies

- npm
- gulp

## Flexibility

This addon attempt to be flexible in the way it makes requests. You can modify the the config file in that way.

## Workflow

### Configure

The workflow

Copy `src/config.js` to `src/config.dev.js`
Copy `src/manifest.json` to `src/manifest.dev.json`

Write your development configurations in the new files, and your production configurations in the others.

### Build

You have two way to build the addon

#### Develop

1. Run `npm install`
2. Run `gulp make` or `gulp watch`
3. The addon is build in the `addon/` folder. You can use it to test your addon with your browser.

#### Production

To let the app build with the non-development files (config.js instead of config.dev.js, etc), siply run the following :

`gulp make --production`


## Attribution

- [iconmonstr](http://iconmonstr.com/) : default icons
