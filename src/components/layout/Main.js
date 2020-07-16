import React, { useState } from "react";
import "./Main.css";
import InputForm from "../control/InputForm";
import Table from "../control/Table";
import {
  workListCollection,
  addWorkItem,
  removeWorkItem,
  updateWorkItem,
} from "../config/databaseStore";

function BackDrop() {
  return (
    <div className="backdrop">
      <div className="loader"></div>
    </div>
  );
}

export default function Main() {
  var [loadingData, setLoadingData] = useState(true);
  var [works, setWorks] = useState([]);

  workListCollection.onSnapshot((querySnapshot) => {
    if (!loadingData) {
      return null;
    }

    var _workList = [];
    querySnapshot.forEach((doc) => {
      _workList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setWorks(_workList);
    setLoadingData(false);
  });

  function onRemove(removedItemId) {
    removeWorkItem(removedItemId)
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error deleting document: ", error);
      })
      .finally(function () {
        setLoadingData(true);
      });
  }

  function onAdd(addedItem) {
    addWorkItem(addedItem)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      })
      .finally(function () {
        setLoadingData(true);
      });
  }

  function onComplete(updatedItem) {
    updateWorkItem(updatedItem)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      })
      .finally(function () {
        setLoadingData(true);
      });
  }

  return (
    <main>
      <InputForm onAdd={onAdd} />
      <Table data={works} onRemove={onRemove} onComplete={onComplete} />
      {loadingData ? <BackDrop /> : null}
    </main>
  );
}
