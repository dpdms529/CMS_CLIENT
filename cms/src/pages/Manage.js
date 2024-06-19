import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import Tables from "../components/Tables";
import StatisticTable from "../components/StatisticTable";
import TakesTable from "../components/TakesTable";
import CustomModal from "../components/CustomModal";
import OptionTable from "../components/OptionTable";
import AddTakesTable from "../components/AddTakesTable";
import { Accordion, Container, Form, ListGroup } from "react-bootstrap";
import {getTakes} from "../services/TakesService";
import "../assets/styles/Manage.css";
import { getSections } from "../services/SectionsService";

const Manage = (props) => {
    const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
    const [isOpenResultModal, setIsOpenResultModal] = useState(false);
    const [criteria, setCriteria] = useState([]);
    const [credit, setCredit] = useState([]);
    const [GPA, setGPA] = useState(0);
    const [order, setOrder] = useState([]);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const openModal = (m) => {
        switch (m) {
            case 1:
                setIsOpenSearchModal(true);
                fetchSections('', '', '', '전체', '', false, false, false, false);
                break;
            case 2:
                setIsOpenResultModal(true);
                break;
            default:
                break;
        }
    };

    const closeModal = (m) => {
        switch (m) {
            case 1:
                setIsOpenSearchModal(false);
                break;
            case 2:
                setIsOpenResultModal(false);
                break;
            default:
                break;
        }
    };

    const onAdd = (newData) => {
    };

    const onDelete = (_id) => {
    };

    const onSave = () => {
    };

    const getCriteria = () => {
    };

    const getCredit = () => {
    };

    const getGPA = () => {
    };

    const getOrderSatisfy = () => {
    };

    const fetchSections = async (year, semester, targetGrade, courseClassificationName, courseName, abeek_bsm, abeek_liberal_arts, abeek_tech, abeek_design) => {
        try{
            const sections = await getSections(year, semester, targetGrade, courseClassificationName, courseName);
            console.log(sections);
            setSearchData(sections);
        }catch(error) {
            console.log("error fetching sections:", error);
        }
    };

    const fetchTakes = async(studentId) => {
        try{
            const takes = await getTakes(studentId);
            console.log(takes);
            setData(takes); 
        }catch(error) {
            console.log("error fetching takes:", error);
        }
    };

    useEffect(() => {
        if (props.id === 1) {
            getCriteria();
            getCredit();
            fetchTakes(201819186);
        }
        if (props.id === 2) {
            
        }
    }, [props.id]);

    let _title = null;
    let _content = null;

    switch (props.id) {
        case 1:
            _title = "이수과목관리";
            var _modalContent = (
                <div>
                    <OptionTable visible={props.id === 1}/>
                    {/* <Tables id={4} pageId={props.id} postSearchData={postSearchData} /> */}
                    <AddTakesTable data={data} searchData={searchData} onAdd={onAdd}/>
                    {/* <Tables id={5} data={data} searchData={searchData} onAdd={onAdd} /> */}
                </div>
            );
            _content = (
                <Container className="manage">
                    <StatisticTable getCriteria={getCriteria} getCredit={getCredit} criteria={criteria} credit={credit}/>
                    {/* <Tables id={1} getCriteria={getCriteria} getCredit={getCredit} criteria={criteria} credit={credit} /> */}
                    <TakesTable data={data} onOpenSearchModal={() => openModal(1)} onSave={onSave}/>
                    {/* <Tables id={2} onOpenSearchModal={() => openModal(1)} data={data} onDelete={onDelete} getTakes={getTakes} /> */}
                    <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalContent} show={isOpenSearchModal} onHide={() => closeModal(1)} />
                </Container>
            );
            break;
        case 2:
            _title = "졸업시뮬레이션";
            var _modalSearchContent = (
                <div className="manage">
                    <OptionTable visible={props.id === 1}/>
                    {/* <Tables id={4} pageId={props.id} postSearchData={postSearchData} /> */}
                    <AddTakesTable data={data} searchData={searchData} onAdd={onAdd}/>
                    {/* <Tables id={5} data={data} searchData={searchData} onAdd={onAdd} /> */}
                </div>
            );

            var _modalResultContent = (
                <Form className="manage result">
                    <Form.Group className="mb-3">
                        <Form.Label>졸업 가능 여부</Form.Label>
                        <Accordion defaultActiveKey={0}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h6 className="red">불가능</h6></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush" as="ol" numbered>
                                        <ListGroup.Item as="li">선후수불만족</ListGroup.Item>
                                        <ListGroup.Item as="li">학점부족</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이수현황</Form.Label>
                        <Tables id={1} getCriteria={getCriteria} getCredit={getCredit} criteria={criteria} credit={credit} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>선후수 만족 여부</Form.Label>
                        <Tables id={6} getOrderSatisfy={getOrderSatisfy} order={order} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>평균 평점</Form.Label>
                        <Tables id={7} getGPA={getGPA} GPA={GPA} />
                    </Form.Group>
                </Form>
            );
            _content = (
                <Container className="manage">
                    <Tables id={3} onOpenSearchModal={() => openModal(1)} onOpenResultModal={() => openModal(2)} data={data} onDelete={onDelete} getTakes={getTakes} />
                    <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalSearchContent} show={isOpenSearchModal} onHide={() => closeModal(1)} />
                    <CustomModal dialogClassName="modal-w90" title="졸업시뮬레이션 결과" content={_modalResultContent} show={isOpenResultModal} onHide={() => closeModal(2)} />
                </Container>
            );
            break;
        default:
    }

    return (
        <div>
            <Content title={_title} content={_content} />
        </div>
    );
};

export default Manage;
