import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-VohQB3E4tZDgFPUOtCJGOqbK0UfuF_o",
    authDomain: "accessitech-77fa6.firebaseapp.com",
    databaseURL: "https://accessitech-77fa6.firebaseio.com",
    projectId: "accessitech-77fa6",
    storageBucket: "accessitech-77fa6.appspot.com",
    messagingSenderId: "607255932408",
    appId: "1:607255932408:web:fd751eed1d81cc0726fa0d",
    measurementId: "G-X9Y2D88KNB"
})

var db = firebaseApp.firestore()

export { db }