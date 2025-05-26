import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Note = ({ id, title, content, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDelete(id);
    }
  };

  return (
    <Card className="note-card shadow-sm">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Card.Title className="fw-bold text-dark mb-0 flex-grow-1 me-2">
            {title}
          </Card.Title>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={handleDelete}
            className="border-0 rounded-circle p-2"
            style={{ 
              width: '35px', 
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
        <Card.Text 
          className="text-muted" 
          style={{ 
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6'
          }}
        >
          {content}
        </Card.Text>
        <div className="mt-3">
          <small className="text-secondary">
            <i className="bi bi-calendar3 me-1"></i>
            Created: {new Date().toLocaleDateString()}
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Note;