import React from "react";
import { Container } from "react-bootstrap";

const Content = ({ title, content }) => {
    return (
        <Container>
            <h4 className="title">{title}</h4>
            {content}
        </Container>
    );
};

export default Content;
