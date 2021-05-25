import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
      <div>
        <Jumbotron fluid>
          <NavBar />
          <Container fluid>
            <h1 className="display-3">My Contact Details</h1>
            <p className="lead">Here are my contact details </p>
            <p className="lead">Email : shah.rajvi54@gmail.com </p>
            <p className="lead">Phone : 4159104414 </p>
            <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp. I will available morning 11AM to 11PM EST via slack or whatsapp  </p>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Contact;
