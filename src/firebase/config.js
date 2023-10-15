import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD6uu9y9tU77vr6YuX5inza4GEYvS8Ocfw",
  authDomain: "paintmylife-1db9a.firebaseapp.com",
  projectId: "paintmylife-1db9a",
  storageBucket: "paintmylife-1db9a.appspot.com",
  messagingSenderId: "707622391417",
  appId: "1:707622391417:web:4aa66afdd108f628020ea8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
