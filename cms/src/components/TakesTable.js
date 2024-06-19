import React from "react";
import {Button, Form, Table, Stack} from "react-bootstrap";

const TakesTable = (props) => {
    const list = [];

    const data = props.data;
    for (let i = 0; i < data.length; i++) {
        const abeeks = data[i].abeeks
        let abeek_str = ''; 

        for (let j = 0; j < abeeks.length; j++) {
            abeek_str = abeek_str + abeeks[j].abeekName + "(" + abeeks[j].abeekCredit + "), "
        }

        abeek_str = abeek_str.substring(0, abeek_str.length - 2)
        list.push(
            <tr key={i}>
                <td>{data[i].year}</td>
                <td>{data[i].semester}</td>
                <td>{data[i].courseName}</td>
                <td>{data[i].credit}</td>
                <td>{data[i].courseClassificationName}</td>
                <td>{abeek_str}</td>
                <td>{data[i].gp}</td>
                <td>
                    <Button
                        id={data[i].id}
                        variant="outline-danger"
                        size="sm"
                        onClick={(e) => {
                            e.preventDefault();
                            props.onDelete(e.target.id);
                        }}
                    >
                        삭제
                    </Button>
                </td>
            </tr>
        );
    }

    const _content = <Form>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>이수년도</th>
                                    <th>이수학기</th>
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
                        <Stack className="my-3 justify-content-center" direction="horizontal" gap={3}>
                            <Button onClick={props.onOpenSearchModal}>추가</Button>
                            <Button onClick={props.onSave}>저장</Button>
                        </Stack>
                    </Form>

    return _content;
}

export default TakesTable