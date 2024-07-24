import { useState } from "react";
import "./App.css";
import OpenNewNote from "./Components/OpenNewNote.js";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="main-body">
        <div className="top-bar">
          <h1>
            My Notes (<span>4</span>)
          </h1>
          <button id="add-note" onClick={() => setModal(true)}>
            +
          </button>
          {modal ? <OpenNewNote setModal={setModal}/> : null}
        </div>
        <div className="notes-section">
          <ul className="notes-list">
            {/* <li>
              <h2>First Note</h2>
              <p>Sample text...</p>
              <p>Date added</p>
            </li>
            <li>
              <h2>Second Note</h2>
              <p>Sample text...</p>
              <p>Date added</p>
            </li>
            <li>
              <h2>Third Note</h2>
              <p>Sample text...</p>
              <p>Date added</p>
            </li>
            <li>
              <h2>Fourth Note</h2>
              <p>Sample text...</p>
              <p>Date added</p>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
