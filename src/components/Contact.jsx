import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some questions ? </h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 d-flex justify-content-center'>
            <img src='https://cdn0.iconfinder.com/data/icons/email-30/64/x-07-1024.png' alt='' height="400px" width="400px" />
          </div>
          <div className='col-md-6'>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="enter your email address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message me</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='message me'/>
              </Form.Group>
              <Button variant="outline-primary" type="submit">
        Send Messages
      </Button>
            </Form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact