import React from 'react'
import { Col, Form, FormGroup, Label, Row } from 'reactstrap'
import Phone from '../svgs/Phone.svg'
import Email from '../svgs/Email.svg'
import Location from '../svgs/Location.svg'

function Contact() {
  return (
    <>
      <Form className='mt-5 contactFont text-muted '>
        <h2 className='d-flex justify-content-center contactHeading'>Get in touch!</h2>
        <h6 className='d-flex justify-content-center contactHeading'>Contact us for a quote.</h6>
        <Row className='mt-5'>
          <Col md={4}>
            <FormGroup>
              <Label className='d-flex justify-content-center'>
                <img className="d-flex align-items-center" src={Location} width="25" height="25" alt="" />
              </Label>
              <Label className='d-flex justify-content-center'>
                Dallas | Austin | Texas
              </Label>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label className='d-flex justify-content-center'>
                <img className="d-flex align-items-center" src={Phone} width="25" height="25" alt="" />
              </Label>
              <Label className='d-flex justify-content-center'>
                +1(571)385-8554
              </Label>
              <Label className='d-flex justify-content-center'>
                +1(510)894-5951
              </Label>

            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label className='d-flex justify-content-center'>
                <img className="d-flex align-items-center" src={Email} width="25" height="25" alt="" />
              </Label>
              <Label className='d-flex justify-content-center'>
                pi.pixel@outlook.com
              </Label>
              <Label className='d-flex justify-content-center'>
                pi.pixelphotography@gmail.com
              </Label>
            </FormGroup>
          </Col>
        </Row>
        {/* <FormGroup>
          <Label for="exampleAddress2">
            Address 2
          </Label>
          <Input
            id="exampleAddress2"
            name="address2"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup> */}
        {/* <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">
                City
              </Label>
              <Input
                id="exampleCity"
                name="city"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">
                State
              </Label>
              <Input
                id="exampleState"
                name="state"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">
                Zip
              </Label>
              <Input
                id="exampleZip"
                name="zip"
              />
            </FormGroup>
          </Col>
        </Row> */}
        {/* <FormGroup check>
          <Input
            id="exampleCheck"
            name="check"
            type="checkbox"
          />
          <Label
            check
            for="exampleCheck"
          >
            Check me out
          </Label>
        </FormGroup> */}
        {/* <Button>
          Sign in
        </Button> */}
      </Form>
    </>
  )
}

export default Contact