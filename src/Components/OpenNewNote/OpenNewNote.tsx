import { useState } from "react";
import "./OpenNewNote.styles.css";
import { Note } from "../../types";
import extractLocalStorage from "../../Utils/extractLocalStorage";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
//prev = ['type something', 'type something else' ]
function OpenNewNote({ setModal, setNotes }: IProps) {
  const [userInput, setUserInput] = useState<Note>({
    title: "",
    content: "",
    id: Math.random(),
  });

  function saveNote() {
    setNotes((prev) => [...prev, userInput]);
    setModal(false);

    const json = extractLocalStorage<Note[]>();
    if (!json) {
      return localStorage.setItem("notes", JSON.stringify([userInput]));
    }
    json.push(userInput);

    localStorage.setItem("notes", JSON.stringify(json));
  }
  return (
    <div className="new-note">
      <div className="overlay">
        <div className="note-content">
          <input
            className="note-heading"
            type="text"
            maxLength={28}
            autoFocus
            placeholder="New Note"
            onChange={(e) =>
              setUserInput((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              })
            }
          />
          <textarea
            className="note-user-input"
            maxLength={400}
            placeholder="Type something..."
            onChange={(e) =>
              setUserInput((prev) => {
                return {
                  ...prev,
                  content: e.target.value,
                };
              })
            }
          />
          <div className="note-buttons">
            <button
              className="save-btn"
              onClick={userInput.title !== "" ? saveNote : undefined}
            >
              Save
            </button>
            <button className="close-btn" onClick={() => setModal(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenNewNote;
