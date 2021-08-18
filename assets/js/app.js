import firebaseConfig from "./firebase-config.js";
import { saveData, readData } from "./services.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

readData(db, "productos");

save.addEventListener("click", () => {
  saveData(db, "productos");
});
