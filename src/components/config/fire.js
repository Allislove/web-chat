// Your web app's Firebase configuration
// Para tener acceso a firebase
import firebase from "firebase";


 const firebaseConfig = {
    apiKey: "AIzaSyCEAnqBmaD6a1YHUN0RGcnjP2YVpaiIy8k",
    authDomain: "webchat-c9739.firebaseapp.com",
    databaseURL: "https://webchat-c9739.firebaseio.com",
    projectId: "webchat-c9739",
    storageBucket: "webchat-c9739.appspot.com",
    messagingSenderId: "459986265544",
    appId: "1:459986265544:web:54ba76c131f097fd7e8cfd",
    measurementId: "G-9XDD3E0R1L"
};

// Inicializo firabase y tambien el analytics, y eso es
// ahora tengo conectado mi app con firebase
const fire =  firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default fire