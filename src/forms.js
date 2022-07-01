import React from "react";
import { Form, Container, InputGroup, FormControl } from "react-bootstrap";

export default function RbForms() {
  return (
    <div>
      <Form style={{ color: "white" }}>
      <h1 className="mt-5 mb-3 white">Basic form</h1>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ color: "#fff" }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter an email" size="lg" />
          <Form.Text className="text-muted">
            We'll never share your message
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ color: "#fff" }}>Password</Form.Label>
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
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
          />
        </Form.Group>

        <Form.Group>
          <Form.Select aria-label="Default select example">
            <Form.Label style={{ color: "#fff" }}>Select the role</Form.Label>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </Form.Select>
        </Form.Group>

        {/* inline radios and checkboxes */}
        <h1 className="mt-5 mb-3 white"> Inline Checkboxes and radios</h1>
        {["checkbox", "radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1"
              name="grp1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2"
              name="grp1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="3"
              type={type}
              id={`inline-${type}-1`}
              disabled
            />
          </div>
        ))}

        <h1 className="mt-5 mb-3 white">InputGroup section</h1>
        {/* input group */}
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="my-4">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <InputGroup className="my-4">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl placeholder="amount" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
}
