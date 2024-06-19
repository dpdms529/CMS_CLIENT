import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Stack, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import StatisticTable from "./StatisticTable";
import TakesTable from "./TakesTable";
import OptionTable from "./OptionTable";
import AddTakesTable from "./AddTakesTable";

const Tables = (props) => {
    
    useEffect(() => {
        switch (props.id) {
            case 1:
                props.getCriteria();
                props.getCredit();
                break;
            case 2:
            case 3:
                props.getTakes();
                break;
            case 6:
                props.getOrderSatisfy();
                break;
            case 7:
                props.getGPA();
                break;
            default:
                break;
        }
    }, [props.id]);

    const combineAbeek = (bsm, liberalArts, tech, design) => {
        let abeekStr = "";
        if (bsm) {
            abeekStr += "021|";
        }
        if (liberalArts) {
            abeekStr += "022|";
        }
        if (tech) {
            abeekStr += "024|";
        }
        if (design) {
            abeekStr += "023|";
        }

        abeekStr = "regexp_like(ac.abeek_cd, '[" + abeekStr.slice(0, -1) + "]')";
        if (!bsm && !liberalArts && !tech && !design) {
            abeekStr = "1=1";
        }
        return abeekStr;
    };

    // const addSearchData = (newData) => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         searchData: newData,
    //     }));
    //     console.log("addSearchData", newData);
    // };

    

    let _content = null;
    let list = [];
    let data = null;
    let _button = props.id === 2 ? (
        <Button onClick={props.onSave}>저장</Button>
    ) : (
        <Button onClick={props.onOpenResultModal}>결과</Button>
    );

    switch (props.id) {
        case 1:
            _content = <StatisticTable/>
            break;
        case 2:
        case 3:
            _content = <TakesTable data={props.data} onOpenSearchModal={props.onOpenSearchModal} onSave={props.onSave}/>
            break;
        case 4:
            _content = <OptionTable visible={props.pageId === 1}/>
            break;
        case 5:
            _content = <AddTakesTable searchData={props.searchData} onAdd={props.onAdd}/>
            break;
        case 6:
            data = props.order;
            for (let i = 0; i < data.length; i++) {
                list.push(
                    <tr key={i}>
                        <td>{data[i].preTitle}</td>
                        <td>{data[i].title}</td>
                        <OverlayTrigger placement="top" overlay={<Tooltip>{data[i].notice}</Tooltip>}>
                            <td className={data[i].check ? "green" : "red"}>{data[i].check ? "만족" : "불만족"}</td>
                        </OverlayTrigger>
                    </tr>
                );
            }
            _content = (
                <Table bordered>
                    <thead>
                        <tr>
                            <th>선수과목</th>
                            <th>후수과목</th>
                            <th>만족여부</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </Table>
            );
            break;
        case 7:
            _content = (
                <Table bordered>
                    <thead>
                        <tr>
                            <th>현재 총 평점</th>
                            <th>예상 총 평점</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.GPA}</td>
                            <td>4.2</td>
                        </tr>
                    </tbody>
                </Table>
            );
            break;
        default:
            _content = <div>wrong id</div>;
    }

    return <div>{_content}</div>;
};

export default Tables;
