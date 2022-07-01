import React from "react";
import { Form, Container } from "react-bootstrap";

export default function RbForms() {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label controlId="formEmail" style={{ color: "#fff" }}>
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="Enter an email" size="lg" />
          <Form.Text className="text-muted">
            We'll never share your message
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label controlId="formBasicPassword" style={{ color: "#fff" }}>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Disabled input</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>

    <Form.Group>
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control type="color" id="exampleColorInput" defaultValue="#563d7c"
        title="Choose your color"
        />
    </Form.Group>
      </Form>
    </div>
  );
}
