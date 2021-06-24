import "../components-style/NoteItem.css";

export default function NoteItem(props) {
  return (
    <>
      <div>
        <h4>{props.notes.title}</h4>
        <p>{props.notes.desc}</p>
        <button
          className="deleteBtn"
          onClick={() => {
            props.onDelete(props.notes);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
}
