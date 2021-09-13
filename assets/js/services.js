const saveData = async (db, collection) => {
  const docRef = await db.collection(collection).add({
    name: "Jose",
    last: "Velez",
    age: 2021,
    timestamp: firebase.firestore.Timestamp.now(),
  });
  console.log("Document written with ID: ", docRef.id);
};

const readData = async (db, collection) => {
  const querySnapshot = await db
    .collection(collection)
    .orderBy("timestamp", "asc");

  querySnapshot.onSnapshot((element) => {
    list.innerHTML = "";
    !element.docs.length > 0
      ? (list.innerHTML = "<li>No hay elementos</li>")
      : element.forEach((doc) => {
          const { name, last, timestamp } = doc.data();
          const options = {
            dateStyle: "short",
            timeStyle: "short",
          };
          const converDate = timestamp
            .toDate()
            .toLocaleString("es-CO", options);
          //console.log(`${doc.id} => ${name} ${last} ${converDate}`);
          list.innerHTML += `<li id="${doc.id}">${name}</li>`;
        });
  });
};

export { saveData, readData };
