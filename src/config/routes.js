import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// redux imports

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  TabBarBottom
} from "react-navigation";
import tabsOptions from "./tabs";
//User signup screens
import CreateUserProfile from "../screens/SignUp/UserSignUp/userSignUp";
import Login from "../screens/SignUp/UserSignUp/login";
import Phone from "../screens/SignUp/UserSignUp/phoneNumber";
import Location from "../screens/SignUp/UserSignUp/location";

//User side of the app
import Applications from "../screens/UserMainFlow/Application/applications";
import Profile from "../screens/UserMainFlow/Profile/profile";
import JobsDisplayScreen from "../screens/UserMainFlow/Jobs/jobs";
import Clock_in_out from "../screens/UserMainFlow/ClockIN_OUT/clock";
import DetailsJobPage from "../screens/UserMainFlow/Jobs/details";

//create company profile
import CreateCompanyProfile from "../screens/SignUp/CompanySignUp/createCompanyProfile";
import CompanyCreaterProfile from "../screens/SignUp/CompanySignUp/companyCreatorProfile";
import ImageScreen from "../screens/SignUp/CompanySignUp/imageScreen";

// screens at the intro part
import IntroScreen from "../screens/IntroScreen";
//import CompanyName from './screens/companySignUp/companyName';

//The main flow contains 5 tabs each is listed below

//Employees
import CurrentlyClockIn from "../screens/CompanyMainFlow/Employees/currentlyClockIn";

//Inbox
import Messages from "../screens/CompanyMainFlow/Inbox/messages";

//Candidate
import Candidates from "../screens/CompanyMainFlow/Candidate/candidates";
import Filter from "../screens/CompanyMainFlow/Candidate/filter";

//Applicants
import Applicants from "../screens/CompanyMainFlow/Applicants/applicants";
import Details from "../screens/CompanyMainFlow/Applicants/details";
import Jobs from "../screens/CompanyMainFlow/Applicants/jobs";

//More
import More from "../screens/CompanyMainFlow/More/more";
import Notification from "../screens/CompanyMainFlow/More/notification";
import CompanyProfile from "../screens/CompanyMainFlow/More/companyProfile";
import PostJob from "../screens/CompanyMainFlow/More/postJob";
import AppBugReport from "../screens/CompanyMainFlow/More/reportAppBug";
import RequestFeature from "../screens/CompanyMainFlow/More/requestForNewFeature";
import Settings from "../screens/CompanyMainFlow/More/settings";
import AddManager from "../screens/CompanyMainFlow/More/addManager";
import Employees from "../screens/CompanyMainFlow/Employees/employees";
import hoursOfOperation from "../components/hoursOfOperation";
import applicants from "../screens/CompanyMainFlow/Applicants/applicants";
import compensation from "../components/compensation";
import experience from "../components/experience";
import QrGeneratorScreen from "../screens/CompanyMainFlow/More/qrscreen";

//user side of the app
const UserSideNavigator = TabNavigator(
  {
    clock: { screen: Clock_in_out },
    messages: { screen: Messages },
    Jobs: {
      screen: StackNavigator(
        {
          job: { screen: JobsDisplayScreen },
          display: { screen: DetailsJobPage }
        },
        {
          navigationOptions: {
            header: null
          }
        }
      )
    },
    applications: { screen: Applications },
    profile: { screen: Profile }
  },
  {
    lazyLoad: true
  }
);

const UserSignUp = TabNavigator(
  {
    location: { screen: Location },
    login: { screen: Login },
    phoneNumber: { screen: Phone },
    userRegistration: { screen: CreateUserProfile }
  },
  { navigationOptions: { tabBarVisible: false } }
);

const CompanySideNavigator = TabNavigator(
  {
    employees: { screen: Employees }, // 1
    inbox: { screen: Messages }, // 2
    candidates: { screen: Candidates }, // 3
    applicants: {
      // 4
      screen: StackNavigator({
        applicants: { screen: Jobs },
        details: { screen: Details }
      })
    },
    more: {
      // 5
      screen: StackNavigator(
        {
          more: { screen: More },
          postJob: { screen: PostJob },
          companyProfile: { screen: CompanyProfile },
          addManager: { screen: AddManager },
          settings: { screen: Settings },
          requestFeature: { screen: RequestFeature },
          appBugReport: { screen: AppBugReport },
          notification: { screen: Notification },
          qrpage: { screen: QrGeneratorScreen }
        },
        {
          navigationOptions: {
            header: null
          }
        }
      ),
      navigationOptions: {
        tabBarLabel: "More",
        header: null,
        tabBarIcon: ({ tintColor }) => <Icon name={"bars"} size={22} />
      }
    }
  },
  {
    backBehavior: "none",
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    ...tabsOptions({
      showLabel: true,
      showIcon: true
    })
  }
);

const SignUpNavigator = TabNavigator(
  {
    introScreen: { screen: IntroScreen },
    createCompanyProfile: { screen: CreateCompanyProfile },
    companyCreaterProfile: { screen: CompanyCreaterProfile },
    imageScreen: { screen: ImageScreen }
  },
  {
    lazyLoad: true,
    animationEnabled: false,
    swipeEnabled: false,
    navigationOptions: { tabBarVisible: false }
  }
);

const MainNavigator = TabNavigator(
  {
    //introScreen: { screen: IntroScreen },
    //companySignUp: { screen: SignUpNavigator }
    //userSignUp: { screen: UserSignUp }
    companySide: { screen: CompanySideNavigator },
    userSide: { screen: UserSideNavigator }
  },
  {
    lazyLoad: true,
    swipeEnabled: false,
    animationEnabled: false,
    navigationOptions: { tabBarVisible: false }
  }
);
export default MainNavigator;

// 1  -->  3
// 2  -->  4,
// 3  -->  5,
// 4  -->  6
// {
//   name: "Tiradito";
//   address: "adress";
//   hoursOfOperation: [];
//   phoneNo: '+1 412-288-3389';
//   website: 'wesite';
//   images: [];
//   jobsPosted: {
//     Diswasher: {
//       compensation: '';
//       date: '';
//       description: '';
//       compensationAmount: '';
//       experience: '';
//       position: '';
//       timeSchedule: '';
//       applicants: {
//         '1jyQHu3nzYS7LIe1vCYRcOTPDpF3': true;
//         '2rcQowthSghC0eSJ9CfDrSsqUGg2': true;
//         wXK62qbY9fNusulkhHwZSqBqx3K3: true;
//         AwDdENEQ63TefQk75ijXTshPmP13: true;
//       }
//     }
//     Cook: {
//       compensation: '';
//       date: '';
//       description: '';
//       compensationAmount: '';
//       experience: '';
//       position: '';
//       timeSchedule: '';
//       applicants: {
//         '1jyQHu3nzYS7LIe1vCYRcOTPDpF3': true;
//         '2rcQowthSghC0eSJ9CfDrSsqUGg2': true;
//         wXK62qbY9fNusulkhHwZSqBqx3K3: true;
//         AwDdENEQ63TefQk75ijXTshPmP13: true;
//       }
//     }
//   }
//   managers: {
//     wXK62qbY9fNusulkhHwZSqBqx3K3: true;
//     AwDdENEQ63TefQk75ijXTshPmP13: true;
//   }
// }
