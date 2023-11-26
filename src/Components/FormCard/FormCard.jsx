import React from "react";
import {
  Card,
  Button,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import DateTimePicker from "../DateTimePicker";

export default function FormCard({
  handleChange = () => {},
  values = {},
  type = "Tasks",
  handleSubmit = () => {},
}) {
  return (
    <Card body className="mb-3" style={{ textAlign: "start" }}>
      <CardTitle tag="h5" className="mb-3">
        {`Add ${type}`}
      </CardTitle>
      <FormGroup>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder={`Add ${type} Title`}
          value={values["title"]}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder={`Add ${type} Description`}
          value={values["description"]}
          onChange={handleChange}
        />
      </FormGroup>
      <DateTimePicker
        handleChange={handleChange}
        endDate={values["endDate"]}
        endTime={values["endTime"]}
      />
      <Row lg={12}>
        <Col lg={{ size: 2, order: 1, offset: 10 }}>
          <Button
            style={{
              width: "100%",
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
