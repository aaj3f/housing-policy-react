import React, { Component } from 'react';
import { Container, Form, InputGroup, Button, Row, Col } from 'react-bootstrap'

export default class UserForm extends Component {
  render() {
    return(
      <Container id="formContainer">
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formZipcode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter your zip code here..." required/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formSalary">
                <Form.Label>Estimated Income</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="RentCostPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Enter your annual income (before taxes)..." required/>
                </InputGroup>
                <Form.Text className="text-muted">
                  We don't share personal information with anyone.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formRentCost">
                <Form.Label>Monthly Rent Cost</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="RentCostPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Ex. 800" aria-describedby="RentCostPrepend" required/>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formUtilities">
                <Form.Label>Monthly Utilities Cost</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="UtilitiesPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="(e.g. water, electricity, etc.)" aria-describedby="UtilitiesPrepend" required/>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBedrooms">
                <Form.Label># of Bedrooms Rented</Form.Label>
                <Form.Control as="select">
                  <option>Studio/Efficiency</option>
                  <option>1 bedroom</option>
                  <option>2 bedrooms</option>
                  <option>3 bedrooms</option>
                  <option>4 bedrooms</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
