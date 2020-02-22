# oil_spot

![Not Maintained](https://img.shields.io/badge/Maintenance%20Level-Not%20Maintained-yellow.svg)

This project was last worked on in earnest in 2018. Since then I've been developing a React Native app professionally, and I've learned a lot. If/when I find time to play with it again, here's what I'll do:
- Restructure directories. Put all React Native JavaScript files into an `app` directory. Inside of that directory, separate the files by component/feature so a component and its associated files (styling, test specs, snapshots, etc.) are housed together.
- Clean up dead code! So many logs and unused variables and imports... Gross.
- Add linting (likely `eslint`), which will help with identifying dead code, and will also standardize the code style.
- Add/improve tests (`jest` and `enzyme`). Even just some snapshots and decent unit test coverage can help protect against unintended changes and potential bug introductions when updating the code.
- Convert to TypeScript.
- Continue to _not_ use Redux or any other external state management tool. React's state management is perfectly adequate for this app.
- Deploy on the Play Store; I'm sure Android users are dying to get their hands on this!

---

### The Oil Spot is a utility application for the oil & gas industry that includes common field calculations and convenient unit conversions. 

#### Built with React Native. Deployed on the iOS App Store. 

<div> 
<a href="https://itunes.apple.com/us/app/the-oil-spot/id1358428753?mt=8">
<img style="display:inline-block;overflow:hidden;width:135px;height:40px;background-size:contain;" src="https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg" alt="App Store">
</a>
</div>

## App Structure

```
 Globals, Formulas, Units, Style
 App 
  ├── FormulaView
  │    └── FormulaItem 
  └── UnitConverter
       └── UnitConverterItem 
```

## Developer's Guide

Requires an iOS machine with Xcode >=9.0 installed

- Clone the repo to your local machine 
- `cd` into the `OilSpot` directory 
- `npm install` to install the required modules 
- Make sure `react-native-cli` is installed 
  - `react-native -v` to check if it's installed 
  - `npm install -g react-native-cli` to install (might have to run as admin)
- In `./ios/OilSpot/AppDelegate.m`, ensure the 'react-native jsCodeLocation' is uncommented, and the 'Xcode jsCodeLocation' is commented
- `react-native run-ios` to compile and run the application in Simulator

