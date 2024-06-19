import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import Content from "../components/Content";
import "../assets/styles/LogIn.css";

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const handleChange = (e) => {
    };

    const handleSubmit = (e) => {
    };

    const _title = "회원가입";
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
                    <Form.Control.Feedback type="invalid">학번을 입력해주세요!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="studentName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="이름을 입력하세요."
                        name="studentName"
                        value={studentName}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">이름을 입력해주세요!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">비밀번호 입력해주세요!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="checkPassword">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="비밀번호를 확인하세요."
                        name="checkPassword"
                        value={checkPassword}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">비밀번호를 입력해주세요!</Form.Control.Feedback>
                </Form.Group>
                <Container className="signUpMove">
                    <Button variant="primary" type="submit">
                        회원가입
                    </Button>
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

export default SignUp;
