import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCpwHjxPIjCem9KFKc1jKV6hcmawR81OoI",
  authDomain: "expensify-13c36.firebaseapp.com",
  databaseURL: "https://expensify-13c36.firebaseio.com",
  projectId: "expensify-13c36",
  storageBucket: "expensify-13c36.appspot.com",
  messagingSenderId: "807525711637"
};

firebase.initializeApp(config);

const database = firebase.database();

firebase.database().ref().set({
  name: 'Eric Anderson',
  age: 31,
  isSingle: false,
  location: {
    city: 'Charlotte',
    country: 'United States'
  }
});

// firebase.database().ref().set('This is my data.')

database.ref('age').set(32);
database.ref('location/city').set('Greenville')
database.ref('attributes').set({
  height: 77,
  weight: 215
});