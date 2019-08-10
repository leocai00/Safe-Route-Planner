import React, { Component } from 'react';
import './style.css';
import Card from './card';

class Home extends Component {
    render() {
        return (
            <div>
                <main className="main main-full main-agency">
                    <div className="container" id="front">
                        <div className="heading">
                            <div className="heading-body">
                                <h3>Do You Feel Safe When You Walk Alone at Night？</h3>
                                <div className="heading-answer">
                                    <h1><img src="img/icon.png" alt="logo " />Safe Route Planner</h1>
                                    <h4>Helps You Arrive Home Safely</h4>
                                </div>
                                <a href="#feature-anchor" aria-label="scroll down"><i className="fas fa-angle-double-down"></i></a>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="content">
                    <div className="features" id="feature-anchor">
                        <div className="container">
                            <div className="row">
                
                                <Card img='img/time.svg' title='Real Time' content='Get the newest updates of criminal incidents around your location'/>
                                <Card img='img/ai.svg' title='AI' content='Apply artificial intelligence to suggest the safest route to your
                                        destination'/>
                                <Card img='img/alert.svg' title='Emergency Help' content='Immediately notify your local police of your location and
                                        emergency when you need'/>
                                <Card img='img/walking.svg' title='Walking Friendly' content='User friendly design for walking navigation and route planning'/>

                            </div>
                        </div>
                    </div>
                    <div className="intro" id="introduction">
                        <div className="container">
                            <div>
                                <h2>Why Safe Route Planner?</h2>
                            </div>
                            <div className="answer">
                                <p>Now a day, crime and violence have become a huge problem. A lot of incidents happened around the
                                city. The crime rate has increased by more than 20% since the past few years in the University
                                District, Seattle.
                                How shall we avoid criminal incidents in a city and how to ensure the safety of people?</p>

                                <p> Safe Router Planner can help people plan safe walking routes. The app would evaluate the safety
                                of all possible routes and recommend the <em>safest</em> one for the selected range of time.
                                 Most
                                walking routes planning apps like only evaluate time and distance. The app fills in the blank
                                area and prevents people from crime.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default Home;