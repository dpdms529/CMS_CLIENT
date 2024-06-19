import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import Content from "../components/Content";
import "../assets/styles/LogIn.css";

const LogIn = () => {
    const [validated, setValidated] = useState(false);
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
    };

    const handleSubmit = (e) => {
    };

    const _title = "로그인";
    const _content = (
        <Container className="login">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="studentId">
                    <Form.Label>학번</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="학번을 입력하세요."
                        name="studentId"
                        value={studentId}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        학번을 입력해주세요!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        비밀번호를 입력해주세요!
                    </Form.Control.Feedback>
                </Form.Group>

                <Container className="signUpMove">
                    <Button className="mb-2" variant="primary" type="submit">
                        로그인
                    </Button>
                    <div>
                        <Link to="/signUp">회원가입</Link>
                    </div>
                </Container>
            </Form>
        </Container>
    );

    return (
        <div>
            <Content title={_title} content={_content}></Content>
        </div>
    );
};

export default LogIn;
