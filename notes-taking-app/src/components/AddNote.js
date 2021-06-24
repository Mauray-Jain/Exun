import { useState } from "react";
import "../components-style/AddNote.css";

export default function AddNote(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addNote(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="form">
      <h2>Add a Note</h2>
      <form onSubmit={submit}>
        <div className="input">
          <label htmlFor="title">Add a Title</label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="desc">Add a Description</label>
          <br />
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="input">
          <button type="submit" className="submitBtn">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}
