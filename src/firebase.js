
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgnMnXghYTl-VPRpBo6ao9p3HmtR-PdZg",
  authDomain: "tabaracom-8a459.firebaseapp.com",
  databaseURL: "https://tabaracom-8a459-default-rtdb.firebaseio.com",
  projectId: "tabaracom-8a459",
  storageBucket: "tabaracom-8a459.appspot.com",
  messagingSenderId: "925892739907",
  appId: "1:925892739907:web:a069bdfb5412c0b20e65f6",
  measurementId: "G-Z3019STYE3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };