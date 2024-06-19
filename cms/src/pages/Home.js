import React from "react";
import { Button, Container } from "react-bootstrap";
import Content from "../components/Content";
import "../assets/styles/Home.css";

const Home = () => {
    const _content = (
        <Container className="home">
            <Button href="/manage">이수과목관리</Button>
            <Button href="/simulation">졸업시뮬레이션</Button>
        </Container>
    );

    return (
        <div>
            <Content content={_content}></Content>
        </div>
    );
};

export default Home;
