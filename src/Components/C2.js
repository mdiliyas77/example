import React from 'react';
import { Form } from 'react-bootstrap';
import { CustomContext } from '../Context/Context';

export default function C2() {

  const context = CustomContext()
  return (
    <div className='pt-2'>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' onChange={context?.handleChange} value={context?.input.mobile}/>
      </Form.Group>
      <Form.Label>User Type</Form.Label>
      <Form.Select value={context?.user_type} name='user_type' onChange={context?.handleChange}>
      <option value='' hidden>---Select UserType---</option>
      <option value="Admin">Admin</option>
      <option value="HR">HR</option>
      <option value="Employee">Employee</option>
    </Form.Select>
    </div>
  );
}
