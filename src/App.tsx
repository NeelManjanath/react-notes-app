import { useEffect, useState } from "react";
import "./App.css";
import OpenNewNote from "./Components/OpenNewNote/OpenNewNote.tsx";
import { Note } from "./types.ts";
import extractLocalStorage from "./Utils/extractLocalStorage.ts";

function App() {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState<Note[]>([
    { title: "", content: "", id: Math.random() },
  ]);

  if (modal) {
    document.body.classList.add("modal-active");
  } else {
    document.body.classList.remove("modal-active");
  }
  function removeNote(index: number) {
    setNotes((prev) => {
      const notesCopy = [...prev];
      notesCopy.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesCopy));
      return notesCopy;
    });
  }
  useEffect(() => {
    const json = extractLocalStorage<Note[]>();
    if (!json) return;
    setNotes(json);
  }, []);

  return (
    <>
      <div className="main-body">
        <div className="top-bar">
          <h1>
            My Notes (<span id="note-cnt">{notes.length - 1}</span>)
          </h1>
          <button id="add-note" onClick={() => setModal(true)}>
            +
          </button>
          {modal ? (
            <OpenNewNote setNotes={setNotes} setModal={setModal} />
          ) : null}
        </div>

        <div className="notes-section">
          <ul className="notes-list">
            {notes.map(({ title, content, id }, index) => {
              if (title === "" && content === "") return null;
              return (
                <li key={id}>
                  <div className="note-details">
                    <h2>{title}</h2>
                    <p>{content}</p>
                  </div>
                  <div className="note-manage-buttons">
                    {/* <button className="edit-btn">Edit</button> */}
                    <button
                      className="delete-btn"
                      onClick={() => {
                        removeNote(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
