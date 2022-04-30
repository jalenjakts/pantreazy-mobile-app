# React-Native Expo Mobile App

Welcome to the Expo Mobile App for SWE 4724. This project utilizes the Expo Library and React-Native Framework to manage the mobile application end point for project.

This application can be ran in several different ways due to the expo application. This README will document all these changes.

## Project Tracking

#### Contributors: Ben Dawit (BD), Tyler Hopkins (TH), Kyle Musgrove (KM), Jalen Springer (JS), and Raeven Whitfiled (RW)

**Features and Project Requests**

- [x] Showing how to do a checked item...
- [ ] Task Item #1

## Initial Project Setup

### Project Requirements: (Make sure these items are installed to PATH)
    
These are the list of applications needed to run and test the applications.
1. [Install NodeJS](https://nodejs.org/en/)
2. [Android Studio](https://developer.android.com/studio/?gclid=Cj0KCQiAxc6PBhCEARIsAH8Hff3Ix4SnIgsJUABrtiNP-Nb2HJwQ6AJMXXTm_koB4yEyjyCc_eEqZAkaAjTKEALw_wcB&gclsrc=aw.ds)
3. Xcode (Mac)(Install in App Store)
4. Preferred Text Editor: [Visual Studio Code](https://code.visualstudio.com/download)
5. Optional Text Editors include: [Sublime](https://www.sublimetext.com/download) and [Atom](https://atom.io)
6. Yarn Package Manager - this can also be used instead of the Node Package Manager (NPM)

- Run the following command for the yarn package manager:

`npm install --global yarn` - This will add it to your global node modules package

### How to Install Package Dependencies for the Project
This is how you will get the expo, react, react-native projects:

- Execute the following command:
    
`npm install` - This will install all the package dependences from package.json file

### How to Start Up Project
Like stated in the description, this project can be ran in several ways. I'll go through each of the different ways that the application can be ran.

1. After cloning the repository to your system. Create a new branch as your name to carry out work separately from the master branch.
2. Switch to your branch, and now you're good to develop and code on the project.
3. Open up your terminal and cd into your current directory for where the project is.
4. Within the terminal run the following command:

`expo start` or `npm start` or `yarn start`

5. This will open a port on your system. http://localhost:19002
6. You will see that are different options listed on your browser for opening the expo app. You are only able to run the IOS emulator if you're using a Mac System and have XCode installed.

#### Run using QR Code Scan

- After starting up the project, you will notice a QR Code get generated in the project.
- Install the Expo App from either your Google Playstore or from the App Store.
- After installing the the Expo App, you can go ahead and scan the the QR Code. This will prompt you to open within the Expo App.
- Once you head to the application, the project should load with the 'Hello World!' and a button that you can click on!

#### Run using Android Studio Simulator
- Make sure you installed Android Studio on your system prior to reading the other set of instructions.
- Once the application is installed, open up Android Studio on your system.
- You want to navigate to click on 'More Actions' dropdown, and click on the 'SDK Manager'.
- When in the SDK Manager, you want to click on the SDK Tools tab.
- You will want to make sure the following tools are installed, 'Android SDK Build-Tools', 'Android Emulator', and 'Android SDK Tools'. (These should be pre-installed on the inital setup of Android Studio).
- You can save those changes, and close out the screen. Navigate to 'More Actions' and click on 'AVD Manager'.
- If you don't have an emulator configured for you, go ahead and click create a new device.
- After setting up a device or using the default, make sure to Start up the mobile emulator.
- Once the emulator has started. Make sure that you have the project running on your system.
- Within the terminal you can either type the letter 'a' to run the 'Android Emulator' or you can in the browser select the option to 'Run Android Emulator'.
- The emulator will automatically install the Expo Application on the device, and then also open up the project.

#### Run using Simulator with XCode
- Uhhh I think I'm the only one using a Mac, but let me know otherwise to see if I need to write this out. I'm tired and feel lazy...

## Resources & Guides
- [Expo Documentation](https://docs.expo.dev)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/#links)
- [React-Native Mobile Guide](https://www.youtube.com/playlist?list=PLOyXYrrVfAI0E0K9IGH2yhwAUCSZb2HAK)
