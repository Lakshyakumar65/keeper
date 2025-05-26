import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import Alert from './components/Alert';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [alert, setAlert] = useState(null);

  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, { ...newNote, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
    showAlert("Note deleted successfully!", "success");
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <div className="min-vh-100">
      {alert && (
        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={closeAlert} 
        />
      )}
      
      <Header />
      
      <Container className="pb-5">
        <CreateArea onAdd={addNote} showAlert={showAlert} />
        
        {notes.length > 0 ? (
          <div className="mt-5">
            <h2 className="text-center mb-4 fw-bold text-dark">
              Your Notes ({notes.length})
            </h2>
            <div className="masonry-grid">
              {notes.map((note, index) => (
                <div key={note.id || index} className="masonry-item">
                  <Note
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <h3 className="text-muted">No notes yet</h3>
            <p className="text-secondary">Click above to create your first note!</p>
          </div>
        )}
      </Container>
      
      <Footer />
    </div>
  );
};

export default App;