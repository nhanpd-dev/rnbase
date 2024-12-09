# React Native Base Project

## Features

- Navigation v6
- Theme by restyle
- Splash screen
- State management
- Multi env: dev, stg, prd
- Multi language
- Validate form
- Integrate api
- Git Hooks with Husky

## Tech

##

| Package                                                                        | Version     |
| ------------------------------------------------------------------------------ | ----------- |
| [React navigation](https://reactnavigation.org/)                         | v6          |
| [styled-components](https://styled-components.com/)                         | ^5.3.6      |
| [axios](https://axios-http.com/)                                               | ^0.27.2     |
| [i18next](https://www.i18next.com/)                                            | ^21.8.11    |
| [react-hook-form](https://react-hook-form.com/)                                | ^7.33.0     |
| [react-native](https://reactnative.dev/)                                       | 0.69.1      |
| [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)  | ^4.4.0      |
| [react-native-config](https://github.com/luggit/react-native-config)           | ^1.4.6      |
| [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)             | ^2.4.2      |
| [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) | ^2.9.1      |
| [yup](https://github.com/jquense/yup)                                          | ^0.32.11    |
| [redux-toolkit](https://redux-toolkit.js.org/)                                   | ^1.9.1 |

## Quick Start

#### Require

- XCode >= 13.2.1, Android Studio, JDK 11
- NodeJS v16.17.0, Yarn v1.22.19
- Code editor: VScode, ext (Auto Rename Tag, Code Spell Checker, Color Highlight, Error Lens, ES7+ React/Redux/React-Native snippets, ESLint, Import Cost, Prettier - Code formatter, Rainbow Brackets)
- Setting up the development environment: [React Native](https://reactnative.dev/docs/environment-setup)

#### Run the CLI:

##

```bash
# pull source
git clone https://github.com/bonnguyenitc/react-native-starter.git

# install:
yarn

# run application android development
yarn android:dev
yarn android:stg
yarn android:prod

# run application iOS development
yarn ios:dev
yarn ios:stg
yarn ios:prod

# build release with cmd
./deploy.sh

And more in package.json. Check it!
```

## Rules and Conventions

- Airbnb JavaScript Style Guide [LINK](https://github.com/airbnb/javascript)
- Naming
  - Folder, File : kabab-case (name-file.tsx)
  - Hook file, naming variables, functions, classes, interfaces, types, enums: camelCase (useHook)

## Structure folder app

##

```
├── app.tsx
├── assets
│   ├── fonts
│   ├── images
│   │   └── index.ts
│   ├── index.ts
│   └── jsons
│       └── index.ts
├── components
│   ├── form
│   │   ├── index.ts
│   │   └── input-field
│   ├── modals
│   │   ├── confirm
│   │   └── index.ts
│   └── widgets
├── constants
├── hooks 
├── localization
│   ├── en
│   ├── i18n.ts
│   ├── language.ts
│   └── vi
├── modules
│   ├── auth
│   ├── error
│   └── home
├── routes
├── service
│   ├── API
│   ├── ...
├── slices
├── store
├── themes
├── types
├── utils
```

## Folder for a feature

##

```
├── auth
    ├── assets
    ├── components
    ├── screens
    ├── types
```

## License

MIT
