import NoteItem from "./NoteItem";

export default function Notes(props) {
  return (
    <div className="container">
      <h2 className="notesTitle">Notes</h2>
      {props.notes.length === 0
        ? "No Notes to display"
        : props.notes.map((note) => {
            return (
              <NoteItem notes={note} key={note.id} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
