# oil_spot

### The Oil Spot is a utilities application for the oil & gas industry that includes common field calculations and convenient unit conversions. ß

#### Built with React Native. Deployed on the App Store (iOS). 

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
- `react-native run-ios` to compile and run the application in Simulator

