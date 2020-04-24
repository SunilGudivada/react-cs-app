import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


function Options(){
   return(
    <Form.Group as={Col} controlId="formOptions" >
    <Form.Control as="select" defaultValue="..">
      <option>Choose Matching Attribute</option>
      <option>Customer Id</option>
      <option>First Name</option>
      <option>Middle Name</option>
      <option>Last Name</option>
      <option>Full Name</option>
      <option>Alias Name</option>
      <option>DOB</option>
      <option>Nationality</option>
      <option>Personal Email</option>
      <option>Business Email</option>
      <option>Personal Phone</option>
      <option>Business Mobile Phone</option>
      <option>Home Phone</option>
      <option>Home Address</option>
      <option>Work Address</option>
    </Form.Control>
    </Form.Group>
   )
}

export default Options