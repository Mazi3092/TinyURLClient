import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import'../style.css'

const Graph = (props) => {
    const nameLink = props.linkName;
    const p = props.p;
    const [chartData, setChartData] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        function groupBy(arr, key) {
            return arr.reduce((acc, obj) => {
                const groupKey = obj[key];
                if (!acc[groupKey]) {
                    acc[groupKey] = [];
                }
                acc[groupKey].push(obj);
                return acc;
            }, {});
        }

        const fetchData = async () => {
            try {
                const data = props.linkArr;
                let values = [], names = [];
                data.forEach(l => {
                    let i = 0;
                    const groupedData = groupBy(data, p);
                    Object.keys(groupedData).forEach(p => {
                        values[i] = groupedData[p].length;
                        names[i] = p;
                        i++;
                    });
                });

                if (data) {
                    if (data.length!= 0) {
                        setChartData({
                            labels: names,
                            datasets: [
                                {
                                    label: 'clicks',
                                    data: values,
                                    backgroundColor: [
                                        'rgb(255, 0, 137)',
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 205, 86)',
                                        'rgb(0, 255, 0)',
                                        'rgb(51,51,255)',
                                        'rgb(255,255,0)',
                                    ],
                                    borderColor: 1,
                                },
                            ],
                        });
                        setDataLoaded(true);
                    }
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [props.linkArr]);

    return (
        <>
            <div id="pie">
                {props.linkArr.length === 0 ? (
                    <Pie
                        data={{
                            datasets: [
                                {
                                    label: 'clicks',
                                    data: [100],
                                    backgroundColor: ['rgba(128, 128, 128, 0.5)'],
                                    borderColor: 1,
                                },
                            ],
                        }}
                        options={{ indexAxis: 'x' }}
                    />
                ) : (
                    <>
                        {dataLoaded ? (
                            <Pie
                                data={chartData}
                                options={{ indexAxis: 'x' }}
                            />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Graph;
