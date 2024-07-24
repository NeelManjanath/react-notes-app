import './NewNote.css';

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function OpenNewNote({setModal}: IProps) {
  
  return (
    <div className="new-note">
      <div className="note-content">
        <h2>New Note</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae
          aliquid placeat fugit explicabo officia earum sunt, animi obcaecati
          neque necessitatibus, delectus est minus ad quo pariatur accusamus,
          doloribus ut perferendis consectetur illo. Nulla earum sed, iure, amet
          quidem, nesciunt nobis cum fugiat temporibus aut eveniet quibusdam
          quaerat repudiandae. Excepturi?
        </p>
      </div>
      <button onClick={() => setModal(false)}>Close</button>
    </div>
  );
}

export default OpenNewNote;
