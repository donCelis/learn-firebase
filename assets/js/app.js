import firebaseConfig from "./firebase-config.js";
import { saveData, readData } from "./services.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

try {
  readData(db, "productos");
} catch (error) {
  console.log(error);
}

save.addEventListener("click", async () => {
  try {
    await saveData(db, "productos");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
