import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const CreateArea = ({ onAdd, showAlert }) => {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTitleChange = (event) => {
    setInputText({ ...inputText, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setInputText({ ...inputText, content: event.target.value });
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleSubmit = () => {
    // Validation - show alert if fields are empty
    if (!inputText.title.trim() || !inputText.content.trim()) {
      showAlert("Please fill in both title and content fields!", "error");
      return;
    }

    onAdd(inputText);
    setInputText({ title: "", content: "" });
    setIsExpanded(false);
    showAlert("Note added successfully!", "success");
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <Card className="shadow-lg create-area">
          <Card.Body className="p-4">
            {isExpanded && (
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter title..."
                  value={inputText.title}
                  onChange={handleTitleChange}
                  onKeyPress={handleKeyPress}
                  className="border-0 fs-5 fw-semibold"
                  style={{ 
                    outline: 'none', 
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                  }}
                  autoFocus
                />
              </Form.Group>
            )}
            
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={isExpanded ? 4 : 1}
                placeholder={isExpanded ? "Write your note... " : "Take a note..."}
                value={inputText.content}
                onChange={handleContentChange}
                onClick={handleExpand}
                onKeyPress={handleKeyPress}
                className="border-0"
                style={{ 
                  outline: 'none', 
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  resize: 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </Form.Group>

            {isExpanded && (
              <div className="text-end">
                <Button
                  onClick={handleSubmit}
                  className="gradient-button btn-circle text-white"
                  style={{ border: 'none' }}
                >
                  <i className="bi bi-plus fs-4"></i>
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateArea;