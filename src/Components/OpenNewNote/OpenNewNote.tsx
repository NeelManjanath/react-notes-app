import "./OpenNewNote.styles.css";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  s
}

function OpenNewNote({ setModal }: IProps) {
  return (
    <div className="new-note">
      <div className="overlay">
        <div className="note-content">
          <input
            className="note-heading"
            type="text"
            maxLength={28}
            placeholder="New Note"
          />
          <textarea
            className="note-user-input"
            maxLength={400}
            autoFocus
            placeholder="Type something..."
          />
          <div className="note-buttons">
            <button
              onClick={() => {
                setModal(false);

              }}
            >
              Save
            </button>
            <button onClick={() => setModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenNewNote;
