import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import { MarkerClusterer } from "react-google-maps";
import _ from 'lodash';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import './style.css';

const API_KEY = process.env.API_KEY;

class Project extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.setCategory = this.setCategory.bind(this);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            count: 100,
            sfData: [],
            dist: [],
            selected: null,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            category: 'All',
            dropdownOpen: false
        };
    }

    componentDidMount() {
        let url = 'https://data.sfgov.org/resource/cuks-n6tp.json?%24limit='

        let newUrl = url + this.state.count;
        fetch(newUrl)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ sfData: data });
            });
    }


    handleChange(e) {
        let value = e.target.value;
        this.setState({
            count: value
        });

        let url = 'https://data.sfgov.org/resource/cuks-n6tp.json?%24limit='

        let newUrl = url + value;
        fetch(newUrl)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ sfData: data });
            });
    }

    onMarkerClick(props, marker) {
        console.log(props);
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    };

    onClose() {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            category: event.target.innerText
        });
    }

    render() {
        let current = this.state.sfData;
        let categorys = Object.keys(_.groupBy(this.state.sfData, 'category'));
        // console.log(categorys);
        categorys.unshift('All');
        if (this.state.category !== 'All') {
            current = current.filter((incident) => { return incident.category === this.state.category });
            // console.log(currentDogs)
        }
        return (
            <div>

                <main id="main-map">
                    <div id="blank"></div>
                    <div className="console">
                        <div className="console-input">
                            <div className="container">
                                <div className="form-group">
                                    <label>Total Amount of Incidents Queried:</label>
                                    <input className="form-control"
                                        name="count"
                                        value={this.state.count}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div>
                                    <ButtonDropdown id="drop-down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret>
                                            Categories
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {categorys.map(c => <DropdownItem key={c}
                                                onClick={this.select}>{c}</DropdownItem>)}
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </div>
                            </div>
                        </div>
                        <div className="prototype" id="map" aria-hidden="true" role="application">
                            <Map
                                google={this.props.google}
                                zoom={12}
                                initialCenter={{
                                    lat: 37.773972,
                                    lng: -122.431297
                                }}
                            >
                                {current.map(d => <Marker key={d.pdid} onClick={this.onMarkerClick} position={{
                                    lat: d.y,
                                    lng: d.x
                                }} name={d.category} date={d.date.substring(0, 10)} descript={d.descript}
                                    time={d.time} />)}
                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}
                                >
                                    <div id='mark-info'>
                                        <p>Date: {this.state.selectedPlace.date}</p>
                                        <p>Time: {this.state.selectedPlace.time}</p>
                                        <p>Category: {this.state.selectedPlace.name}</p>
                                        <p>Descripsion: {this.state.selectedPlace.descript}</p>
                                    </div>
                                </InfoWindow>
                            </Map>


                        </div>
                    </div>

                </main>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
})(Project);