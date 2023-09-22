import React from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="outline-danger" style={{ marginRight: '50px' }} onClick={handleShow}>
             Register
            </Button>

            <Modal show={show} onHide={handleClose}>
           

                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className = "fa fa-user-plus me-1"></span>Register</Modal.Title>
                </Modal.Header>
              
                <Modal.Body>
                <Button variant="outline-primary w-100" style={{ marginBottom: '10px' }} onClick={handleShow}>
               <span className='fa fa-google me-3'></span> sign up with google
            </Button>
            <Button variant="primary w-100" style={{ marginBottom: '10px' }} onClick={handleShow}>
               <span className='fa fa-facebook me-3'></span> sign up with facebook
            </Button>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" /> 
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="outline-danger w-100" type="submit">
                          Register
                        </Button>
                    </Form>

                </Modal.Body>
                
            </Modal>

        </>
    )
}

export default Signup