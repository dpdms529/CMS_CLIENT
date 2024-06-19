import React, {useState} from "react";
import {Button, Form, Row, Col} from "react-bootstrap";

const OptionTable = (props) => {

    const [state, setState] = useState({
        year: "전체",
        semester: "전체",
        target_grade: "전체",
        division: "0000",
        abeek_bsm: false,
        abeek_liberal_arts: false,
        abeek_tech: false,
        abeek_design: false,
        title: ""
    });
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(value);
    };
    
    const handleChangeCheck = (e) => {
        const { name, checked } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
        console.log(name, checked);
    };
    
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log("search");
        // await props.postSearchData(
        //     state.year,
        //     state.semester,
        //     state.target_grade,
        //     state.division,
        //     state.title,
        //     state.abeek_bsm,
        //     state.abeek_liberal_arts,
        //     state.abeek_tech,
        //     state.abeek_design
        // );
    };

    const _content = <Form className="border mb-3" onSubmit={handleSearch}>
                        <Row className="my-3">
                            {props.visible && (
                                <Form.Group as={Col} md={3}>
                                    <Form.Label>연도</Form.Label>
                                    <Form.Select onChange={handleChange} name="year">
                                        <option>전체</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                    </Form.Select>
                                </Form.Group>
                            )}
                            <Form.Group as={Col} md={3}>
                                <Form.Label>학기</Form.Label>
                                <Form.Select onChange={handleChange} name="semester">
                                    <option>전체</option>
                                    <option>1</option>
                                    <option>2</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>학년</Form.Label>
                                <Form.Select onChange={handleChange} name="target_grade">
                                    <option>전체</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="my-3">
                            <Form.Group as={Col} md={3}>
                                <Form.Label>이수구분</Form.Label>
                                <Form.Select onChange={handleChange} name="division">
                                    <option value="0000">전체</option>
                                    <option value="0131">전공필수</option>
                                    <option value="0132">전공선택</option>
                                    <option value="0151">일반선택</option>
                                    <option value="011">교양</option>
                                    <option value="0141">공통필수</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md={4}>
                                <Form.Label>공학구분</Form.Label>
                                <div className="border">
                                    <Form.Check inline label="BSM" name="abeek_bsm" type="checkbox" onChange={handleChangeCheck} />
                                    <Form.Check inline label="전문교양" name="abeek_liberal_arts" type="checkbox" onChange={handleChangeCheck} />
                                    <Form.Check inline label="공학주제" name="abeek_tech" type="checkbox" onChange={handleChangeCheck} />
                                    <Form.Check inline label="설계" name="abeek_design" type="checkbox" onChange={handleChangeCheck} />
                                </div>
                            </Form.Group>
                            <Col>
                                <Form.Label column>과목명</Form.Label>
                                <Row>
                                    <Col md={9}>
                                        <Form.Control type="text" placeholder="과목명을 입력하세요." onChange={handleChange} name="title"></Form.Control>
                                    </Col>
                                    <Col>
                                        <Button type="submit">검색</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
    

    return _content;
}

export default OptionTable