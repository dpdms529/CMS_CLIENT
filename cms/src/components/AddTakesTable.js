import React, { useState } from "react";
import {Button, Form, Table, Stack} from "react-bootstrap";

const AddTakesTable = (props) => {
    const [state, setState] = useState({
        gp: "A+", // 검색화면에서 등급 선택
    });

    const handleChangeGP = (e) => {
        const { id, value } = e.target;
        let _searchData = props.searchData;
        _searchData[id].gp = value;
        setState((prevState) => ({
            ...prevState,
            searchData: _searchData,
        }));
    };

    const list = [];

    const searchData = props.searchData;
            for (let i = 0; i < searchData.length; i++) {
                const abeeks = searchData[i].abeeks
                let abeek_str = ''; 

                for (let j = 0; j < abeeks.length; j++) {
                    abeek_str = abeek_str + abeeks[j].abeekName + "(" + abeeks[j].abeekCredit + "), "
                }

                abeek_str = abeek_str.substring(0, abeek_str.length - 2)
                
                list.push(
                    <tr key={i}>
                        <td>{searchData[i].year}</td>
                        <td>{searchData[i].semester}</td>
                        <td>{searchData[i].courseId}</td>
                        <td>{searchData[i].courseName}</td>
                        <td>{searchData[i].credit}</td>
                        <td>{searchData[i].courseClassificationName}</td>
                        <td>{abeek_str}</td>
                        <td>
                            <Form.Select aria-label="Default select example" id={i === 0 ? "0" : i} onChange={handleChangeGP} name="gp" size="sm">
                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="C+">C+</option>
                                <option value="C">C</option>
                                <option value="D+">D+</option>
                                <option value="D">D</option>
                                <option value="P">P</option>
                                <option value="F">F</option>
                            </Form.Select>
                        </td>
                        <td>
                            <Button
                                id={i}
                                variant="outline-success"
                                size="sm"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.onAdd(searchData[e.target.id]);
                                }}
                            >
                                추가
                            </Button>
                        </td>
                    </tr>
                );
            }
    const _content = (
        <Form>
            <Table hover>
                <thead>
                    <tr>
                        <th>개설년도</th>
                        <th>개설학기</th>
                        <th>과목코드</th>
                        <th>과목명</th>
                        <th>학점</th>
                        <th>이수구분</th>
                        <th>공학인증(학점)</th>
                        <th>등급</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </Table>
        </Form>
    );

    return _content;
}

export default AddTakesTable