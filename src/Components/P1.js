import React from 'react';
import C1 from './C1';
import { Button, Container } from 'react-bootstrap';
import C2 from './C2';
import C3 from './C3';
import { CustomContext } from '../Context/Context';

export default function P1() {
  const context = CustomContext()

  return (
    <Container className="pt-5">
      <form action="" onSubmit={context?.submitData}>
      <C1 />
      <C2 />
      <Button variant='primary' className='mt-3' type='submit'>Submit</Button>
      </form>
      <C3 />
    </Container>
  );
}
