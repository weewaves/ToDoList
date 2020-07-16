import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCxYHVu_VsbdutvoEmTq0S16DN0dH74vpc",
  authDomain: "theverysimpletodolist.firebaseapp.com",
  databaseURL: "https://theverysimpletodolist.firebaseio.com",
  projectId: "theverysimpletodolist",
  storageBucket: "theverysimpletodolist.appspot.com",
  messagingSenderId: "907646272429",
  appId: "1:907646272429:web:7c42dfd318be29daea9724",
};

firebase.initializeApp(config);

const databaseStore = firebase.firestore();

export const workListCollection = databaseStore.collection("WorkList");

export function addWorkItem(workItem) {
  return workListCollection.add({
    ...workItem,
    isDone: false,
    isDisabled: false,
  });
}

export function removeWorkItem(workItemId) {
  return workListCollection.doc(workItemId).delete();
}

export function updateWorkItem(workItem) {
  return workListCollection.doc(workItem.id).set(
    {
      ...workItem,
    },
    { merge: true }
  );
}
