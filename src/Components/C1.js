import React from 'react';
import { Form } from 'react-bootstrap';
import { CustomContext } from '../Context/Context';

export default function C1() {

  const context = CustomContext();

  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' onChange={context?.handleChange} value={context?.input.name}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' name='email' onChange={context?.handleChange} value={context?.input.email}/>
      </Form.Group>
    </Form>
    </div>
  );
}
