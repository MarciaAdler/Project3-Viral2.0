import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../pages/assets/img/blank-profile-picture-973460_640.png";

export default function ViewComments(props) {
  const date = props.date.split("T");
  const hour = date[1].split(".");
  var standardTime = milToStandard(hour[0]);

  function milToStandard(value) {
    if (value !== null && value !== undefined) {
      //If value is passed in
      if (value.indexOf("AM") > -1 || value.indexOf("PM") > -1) {
        //If time is already in standard time then don't format.
        return value;
      } else {
        if (value.length == 8) {
          //If value is the expected length for military time then process to standard time.
          var hour = value.substring(0, 2); //Extract hour
          var minutes = value.substring(3, 5); //Extract minutes
          var identifier = "AM"; //Initialize AM PM identifier

          if (hour == 12) {
            //If hour is 12 then should set AM PM identifier to PM
            identifier = "PM";
          }
          if (hour == 0) {
            //If hour is 0 then set to 12 for standard time 12 AM
            hour = 12;
          }
          if (hour > 12) {
            //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
            hour = hour - 12;
            identifier = "PM";
          }
          return hour + ":" + minutes + " " + identifier; //Return the constructed standard time
        } else {
          //If value is not the expected length than just return the value as is
          return value;
        }
      }
    }
  }
  console.log(date);
  return (
    <Container id={"comment-" + props.id} className="my-3 pt-4 border-top">
      <Row>
        <Col className="col-auto">
          <img
            src={props.image ? props.image : image}
            alt={props.username}
            style={{ width: "100px",height: "100px", borderRadius: "50%" }}
          />
        </Col>
        <Col>
          <h4>{props.username}</h4>
          <p>
            {date[0]} {standardTime}
          </p>
          <p>{props.comment}</p>
        </Col>
      </Row>
    </Container>
  );
}
