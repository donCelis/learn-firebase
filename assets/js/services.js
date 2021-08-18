const saveData = async (db, nameCollection) => {
  try {
    const docRef = await db.collection(nameCollection).add({
      name: "Alex",
      last: "Celis",
      age: 2021,
      timestamp: firebase.firestore.Timestamp.now(),
      /*  timestamp: firebase.firestore.FieldValue.serverTimestamp(), */
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const readData = async (db, nameCollection) => {
  try {
    const querySnapshot = await db
      .collection(nameCollection)
      .orderBy("timestamp", "asc");

    querySnapshot.onSnapshot((element) => {
      list.innerHTML = "";
      element.forEach(async (doc) => {
        const { name, last, timestamp } = await doc.data();
        const options = {
          dateStyle: "short",
          timeStyle: "short",
        };
        const converDate = timestamp.toDate().toLocaleString("es-CO", options);
        //console.log(`${doc.id} => ${name} ${last} ${converDate}`);
        list.innerHTML += `<li>${name}</li>`;
      });
    });
  } catch (error) {
    console.error("Error read document: ", error);
  }
};

export { saveData, readData };
