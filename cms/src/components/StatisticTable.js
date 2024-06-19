import React from "react";
import {Table} from "react-bootstrap";

const StatisticTable = (props) => {
    const _content = <Table bordered>
                        <thead>
                            <tr>
                                <th colSpan={5}>졸업 구분</th>
                                <th colSpan={4}>공학인증 구분</th>
                            </tr>
                            <tr>
                                <th>교양</th>
                                <th>전공필수</th>
                                <th>전공선택</th>
                                <th>공필/일선</th>
                                <th>취득학점</th>
                                <th>BSM</th>
                                <th>전문교양</th>
                                <th>설계</th>
                                <th>공학주제</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </Table>

    return _content;
}

export default StatisticTable