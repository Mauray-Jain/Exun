import "./styles.css";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import { useState, useEffect } from "react";

export default function App() {
  let initialNotes = [];
  if (localStorage.getItem("notes") === null) {
    initialNotes = [];
  } else {
    initialNotes = JSON.parse(localStorage.getItem("notes"));
  }

  function addNotes(title, desc) {
    let id;
    if (notes.length === 0) {
      id = 0;
    } else {
      id = notes[notes.length - 1].id + 1;
    }
    let newNote = [{ id: id, title: title, desc: desc }];
    setNotes(notes.concat(newNote));
  }

  function deleteNote(note) {
    setNotes(notes.filter((element) => note !== element));
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const [notes, setNotes] = useState(initialNotes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <AddNote addNote={addNotes} />
      <Notes notes={notes} onDelete={deleteNote} />
    </div>
  );
}
