import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
            <p className="lead">My Name is Rajvi Shah and I am student here </p>
            <NavBar />

            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Homework1</td>
                  <td>Git Practice. Provide link of your repo here </td>
                  <td><a href="https://github.com/rajvishah25/gitpracticehw1.git"> Link</a> </td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Homework 2</td>
                  <td>Javascript - Here is my codepen link with solutions now</td>
                  <td><a href="https://codepen.io/rajvishah25-the-decoder/pen/qBrmwdv"> Link</a> </td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Homework 2.2</td>
                  <td>HTML Website</td>
                  <td><a href="https://github.com/rajvishah25/HW2.2.git"> Link</a> </td>

                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Homework 3.1</td>
                  <td>CSS quiz codepen</td>
                  <td><a href="https://codepen.io/rajvishah25-the-decoder/pen/XWMaLJb
                  https://codepen.io/rajvishah25-the-decoder/pen/xxqLoaL"> Link</a> </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Homework 3.1</td>
                  <td>CSS quiz 2 codepen</td>
                  <td><a href="https://codepen.io/rajvishah25-the-decoder/pen/xxqLoaL"> Link</a> </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Homework 3.2</td>
                  <td>Navigation Bar</td>
                  <td><a href="https://codepen.io/rajvishah25-the-decoder/pen/YzZxmXd"> Link</a> </td>
                </tr>
                <tr>
                  <th scope="row">3.3</th>
                  <td>Homework 3</td>
                  <td>Javascript function</td>
                  <td><a href="https://codepen.io/rajvishah25-the-decoder/pen/ExWLQOw"> Link</a> </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Homework 5</td>
                  <td>SCSS toggle</td>
                  <td><a href="https://codepen.io/rajvishah25-the-decoder/pen/OJpzmab"> Link</a> </td>
                </tr>



              </tbody>
            </Table>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Homeworks;
