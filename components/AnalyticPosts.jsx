"use client"

import React from "react";
import "../app/analytic.style.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Prevy from "./Prevy";

export default function AnalyticPosts({dataPosts}) {

    const arrMillAndCreatedAtAndGrn = []

    dataPosts.map((p) => (
        arrMillAndCreatedAtAndGrn.push({
            mill: parseInt(p.mill),
            month: parseInt(p.createdAt.split("T")[0].split("-")[1]),
            grn: parseInt(p.grn)
        })
    ));

    // console.log(arrMillAndCreatedAtAndGrn)

    const arrMillForMonth1 = [], arrMillForMonth2 = [], arrMillForMonth3 = [], arrMillForMonth4 = [], arrMillForMonth5 = [], arrMillForMonth6 = [],  arrMillForMonth7 = [], arrMillForMonth8 = [], arrMillForMonth9 = [], arrMillForMonth10 = [], arrMillForMonth11 = [], arrMillForMonth12 = [];

    arrMillAndCreatedAtAndGrn.map(el => (
        el.month == 12 ? arrMillForMonth12.push(el.mill) :
        el.month == 11 ? arrMillForMonth11.push(el.mill) :
        el.month == 10 ? arrMillForMonth10.push(el.mill) :
        el.month == 9 ? arrMillForMonth9.push(el.mill) :
        el.month == 8 ? arrMillForMonth8.push(el.mill) :
        el.month == 7 ? arrMillForMonth7.push(el.mill) :
        el.month == 6 ? arrMillForMonth6.push(el.mill) :
        el.month == 5 ? arrMillForMonth5.push(el.mill) :
        el.month == 4 ? arrMillForMonth4.push(el.mill) :
        el.month == 3 ? arrMillForMonth3.push(el.mill) :
        el.month == 2 ? arrMillForMonth2.push(el.mill) :
        el.month == 1 ? arrMillForMonth1.push(el.mill) :
        false
    ))

    const sumForMonth12 = arrMillForMonth12.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth11 = arrMillForMonth11.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth10 = arrMillForMonth10.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth9 = arrMillForMonth9.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth8 = arrMillForMonth8.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth7 = arrMillForMonth7.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth6 = arrMillForMonth6.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth5 = arrMillForMonth5.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth4 = arrMillForMonth4.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth3 = arrMillForMonth3.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth2 = arrMillForMonth2.reduce((acum, currVal) => acum + currVal, 0);
    const sumForMonth1 = arrMillForMonth1.reduce((acum, currVal) => acum + currVal, 0);


    const arrFiltrCountData = [
        {sum: sumForMonth1, month: 'Січень 1'},
        {sum: sumForMonth2, month: 'Лютий 2'},
        {sum: sumForMonth3, month: 'Березень 3'},
        {sum: sumForMonth4, month: 'Квітень 4'},
        {sum: sumForMonth5, month: 'Травень 5'},
        {sum: sumForMonth6, month: 'Червень 6'},
        {sum: sumForMonth7, month: 'Липень 7'},
        {sum: sumForMonth8, month: 'Серпень 8'},
        {sum: sumForMonth9, month: 'Вересень 9'},
        {sum: sumForMonth10, month: 'Жовтень 10'},
        {sum: sumForMonth11, month: 'Листопад 11'},
        {sum: sumForMonth12, month: 'Грудень 12'}
    ]

    const arrMillForYear = [], arrGrnForYear = []

    arrMillAndCreatedAtAndGrn.map(el => (
        arrMillForYear.push(el.mill),
        arrGrnForYear.push(el.grn)
    ))

    const sumMillForYear = arrMillForYear.reduce((acum, currVal) => acum + currVal, 0);
    const sumGrnForYear = arrGrnForYear.reduce((acum, currVal) => acum + currVal, 0);

    console.log(sumMillForYear, sumGrnForYear);
    // console.log(arrFiltrCountData)

    return (
        <section className="analytucPosts">
            <div className="allSumBox">
                <Prevy prevyText={"Твір результатза цілий рік:"} />
                <ul className="ulBox">
                    <li className="liBox">
                        <p className="pBox">{sumMillForYear} мл</p>
                    </li>
                    <li className="liBox">
                        <p className="pBox">{sumGrnForYear} грн</p>
                    </li>
                </ul>
            </div>

            <Bar
                data={{
                    labels: arrFiltrCountData.map((el) => el.month),
                    datasets:
                        [
                            {
                            label: "Мілілітрів за місяць",
                            data: arrFiltrCountData.map((el) => el.sum),
                            backgroundColor: ["rgba(0,0,0, 0)"],
                            borderColor: ["#2DA7FF"],
                            borderWidth: 1,
                            }
                        ]
                }}
            />
        </section>
    )
}