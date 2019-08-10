import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './style.css';

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['Marina', 'Laguna', 'City Center','Felton','Vicente'],
                datasets:[
                    {
                        label:'Crimes every Month',
                        data: [
                            232,
                            148,
                            289,
                            242,
                            196
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div>
                <div id="blank"></div>
                <div className="container">
                    <p id="chart-p">In the state of California, police record data about the Crimes
                    being committed in different regions inside of San Francisco every month. Certain regions in San Francisco
                    display an impressive low turn out rate of crimes recorded while some, due to population
                    and safety measures display more. This chart Shows the crimes recorded per month in 
                    5 different SF Districs, Marina, Laguna, City Center, Felton and Vicente.
                    </p>
                </div>
                <div className="chart">
                <Bar 
                    data = {this.state.chartData}
                    options = {{
                        
                    }}
                />
                </div>
            </div>
        )
    }
}

export default Chart;