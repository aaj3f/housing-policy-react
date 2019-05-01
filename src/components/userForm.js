import React, { Component } from 'react';
import { connect } from 'react-redux'
import createUser from '../actions/createUser'
import { Container, Form, InputGroup, Button, Row, Col } from 'react-bootstrap'

class UserForm extends Component {
  state = { user: { zipcode: '', salary: '', rent_cost: '', utilities: '', bedrooms: ''}}

  handleChange = event => { this.setState({ user: { ...this.state.user, [event.target.name]: event.target.value }})}

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    console.log(this.state)
    return(
      <Container id="formContainer">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="zipcode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" name="zipcode" placeholder="Enter your zip code here..." value={this.state.user.zipcode} onChange={this.handleChange} required/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="salary">
                <Form.Label>Estimated Income</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="SalaryPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" name="salary" placeholder="Enter your annual income (before taxes)..." aria-describedby="SalaryPrepend" value={this.state.user.salary} onChange={this.handleChange} required/>
                </InputGroup>
                <Form.Text className="text-muted">
                  We don't share personal information with anyone.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="rentCost">
                <Form.Label>Monthly Rent Cost</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="RentCostPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" name="rent_cost" placeholder="Ex. 800" aria-describedby="RentCostPrepend" value={this.state.user.rentCost} onChange={this.handleChange} required/>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="utilities">
                <Form.Label>Monthly Utilities Cost</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="UtilitiesPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" name="utilities" placeholder="(e.g. water, electricity, etc.)" aria-describedby="UtilitiesPrepend" value={this.state.user.utilities} onChange={this.handleChange} required/>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="bedrooms">
                <Form.Label># of Bedrooms Rented</Form.Label>
                <Form.Control as="select" name="bedrooms" value={this.state.user.bedrooms} onChange={this.handleChange}>
                  <option value="0">Studio/Efficiency</option>
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedrooms</option>
                  <option value="3">3 bedrooms</option>
                  <option value="4">4 bedrooms</option>
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

export default connect(null, { createUser })(UserForm)
