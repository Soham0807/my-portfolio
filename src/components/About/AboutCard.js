import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soham Borse </span>
            from <span className="purple"> Nashik, India.</span>
            <br />
            I am currently pursuing Btech in Artificial Intelligence and data science.
            <br />
            I am also purusing BS in data science from IIT madras.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "HUSTLE!HUSTLE!HUSTLE!"{" "}
          </p>
          <footer className="blockquote-footer">Soham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
