import React, { Component } from 'react';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { connect } from 'react-redux'
// import { Field, reduxForm } from 'redux-form'
import createUser from '../actions/createUser'
import { Container, Form, InputGroup, Button, Row, Col } from 'react-bootstrap'

// const schema = yup.object({
//   zipcode: yup.string().length(5).required(),
//   salary: yup.string().required(),
//   rent_cost: yup.string().required(),
//   utilities: yup.string()
// })

class UserForm extends Component {
  state = {
    user: {
      zipcode: '',
      salary: '',
      rent_cost: '',
      utilities: '',
      bedrooms: ''
    },
    validations: {
      zipcodeValid: false,
      salaryValid: false,
      rent_costValid: false,
      utilitiesValid: false
    },
    formErrors: {zipcode: '', salary: '', rent_cost: '', utilities: ''},
    valid: true
  }

  validateField = (fieldName, value) => {
    const checkNumericalInput = (fieldName, value) => {
      if (/[^\d]/.test(value) || value.length === 0) {
        this.setState({
          ...this.state,
          validations: { ...this.state.validations, [fieldName + 'Valid']: false },
          formErrors: { ...this.state.formErrors, [fieldName]: 'Please only include digits 0-9'}})
      } else {
        this.setState({
          ...this.state,
          validations: { ...this.state.validations, [fieldName + 'Valid']: true },
          formErrors: { ...this.state.formErrors, [fieldName]: 'Looks good!'}
        })
      }
    }
    switch (fieldName) {
      case "zipcode":
        if (/[^\d]/.test(value) || !(value.length === 5)) {
          this.setState({
            ...this.state,
            validations: { ...this.state.validations, zipcodeValid: false },
            formErrors: { ...this.state.formErrors, zipcode: 'Must include valid Zip Code (e.g. 27103)'}})
        } else {
          this.setState({
            ...this.state,
            validations: { ...this.state.validations, zipcodeValid: true },
            formErrors: { ...this.state.formErrors, zipcode: 'Looks good!'}
          })
        }
        break;
      case "salary":
        checkNumericalInput(fieldName, value);
        break;
      case "rent_cost":
        checkNumericalInput(fieldName, value);
        break;
      case "utilities":
        checkNumericalInput(fieldName, value);
        break;
    }
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value
    this.setState({ ...this.state, user: { ...this.state.user, [name]: value }, formErrors: { ...this.state.formErrors, [name]: '' }})
  }

  handleBlur = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.validateField(name, value)
  }

  handleSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    // }
    if (Object.values(this.state.validations).every(value => value === true) && Object.values(this.state.user).every(value => value.length > 0)) {
      this.props.createUser(this.state);
      this.setState({ user: { zipcode: '', salary: '', rent_cost: '', utilities: '', bedrooms: ''}, formErrors: {zipcode: '', salary: '', rent_cost: '', utilities: ''}, valid: true })
    } else {
      this.setState({ ...this.state, valid: false })
    }
  }
  //
  // onBlur = ({
  //   zipcode: (event) => {
  //     if (this.state.user.zipcode.match)
  //   }
  // })

  render() {
    return(
      <Container id="formContainer">
        <Form noValidate onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="zipcode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipcode"
                  className={this.state.formErrors.zipcode ? (this.state.validations.zipcodeValid ? 'is-valid' : 'is-invalid') : ''}
                  placeholder="Enter your zip code here..."
                  value={this.state.user.zipcode}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required/>
                {this.state.formErrors.zipcode ? null : <Form.Text className="text-muted">
                  We don't share personal information with anyone.
                </Form.Text>}
                <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">{this.state.formErrors.zipcode}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="salary">
                <Form.Label>Estimated Income</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="SalaryPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    name="salary"
                    className={this.state.formErrors.salary ? (this.state.validations.salaryValid ? 'is-valid' : 'is-invalid') : ''}
                    placeholder="Annual Income (before taxes)..."
                    aria-describedby="SalaryPrepend"
                    value={this.state.user.salary}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required/>
                  <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">{this.state.formErrors.salary}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <Form.Group controlId="rentCost">
                <Form.Label>Monthly Rent Cost</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="RentCostPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    name="rent_cost"
                    className={this.state.formErrors.rent_cost ? (this.state.validations.rent_costValid ? 'is-valid' : 'is-invalid') : ''}
                    placeholder="Ex. 800"
                    aria-describedby="RentCostPrepend"
                    value={this.state.user.rent_cost}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} required/>
                  <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">{this.state.formErrors.rent_cost}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="utilities">
                <Form.Label>Monthly Utilities Cost</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="UtilitiesPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    name="utilities"
                    className={this.state.formErrors.utilities ? (this.state.validations.utilitiesValid ? 'is-valid' : 'is-invalid') : ''}
                    placeholder="(water, electric, etc.)"
                    aria-describedby="UtilitiesPrepend"
                    value={this.state.user.utilities}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} required/>
                  <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">{this.state.formErrors.utilities}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="bedrooms">
                <Form.Label># of Bedrooms Rented</Form.Label>
                <Form.Control
                  as="select"
                  name="bedrooms"
                  value={this.state.user.bedrooms}
                  onChange={this.handleChange}>
                    <option value="0">Studio/Efficiency</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2 bedrooms</option>
                    <option value="3">3 bedrooms</option>
                    <option value="4">4 bedrooms</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center align-items-center">
            <Col xs={{ span: 6, offset: 3 }} >
              <Form.Group controlID="submit" className="mb-0">
                <Form.Control
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"/>
              </Form.Group>
            </Col>
            <Col>
              <div className={this.state.valid ? "invalid-feedback" : "invalid-feedback d-block my-0"}><p className="mb-0">Please complete the form with valid inputs.</p></div>
            </Col>
          </Row>
          {/* <Button
            variant="primary"
            disabled={!Object.values(this.state.validations).every(value => value === true)}
            type="submit">
            Submit
          </Button> */}
        </Form>
      </Container>
    )
  }
}

export default connect(null, { createUser })(UserForm)
