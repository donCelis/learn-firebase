import firebaseConfig from "./firebase.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const saveData = (nameCollection) => {
  db.collection(nameCollection)
    .add({
      first: "Alex",
      middle: "",
      last: "Celis",
      born: 2021,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

const readData = (nameCollection) => {
  db.collection(nameCollection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { first, last } = doc.data();
        const idProduct = doc.id;
        console.log(`${first} ${last}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

//saveData("productos");
readData("productos");