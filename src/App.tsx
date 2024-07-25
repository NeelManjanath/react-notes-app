import { useState } from "react";
import "./App.css";
import OpenNewNote from "./Components/OpenNewNote/OpenNewNote.tsx";
import AddNewNote from "./Components/NotesList/NotesList.tsx";

interface NoteProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function App() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('')
  
  if (modal) {
   document.body.classList.add('modal-active')
  } else {
    document.body.classList.remove('modal-active')
  }
  return (
    
    <>
      <div className="main-body">
        <div className="top-bar">
          <h1>
            My Notes (<span>-</span>)
          </h1>
          <button id="add-note" onClick={() => setModal(true)}>
            +
          </button>
          {modal ? <OpenNewNote setModal={setModal}/> : null}
        </div>
        <div className="notes-section">
          <ul className="notes-list">
            (input !== '' ? <AddNewNote setInput={setInput}/> : null)
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
