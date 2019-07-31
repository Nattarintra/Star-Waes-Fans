import React, { Component } from 'react';
import Axios from 'axios';
import ListPeople from './ListPeople';
//import Characters from './Characters';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
        }
        this.getPeople = this.getPeople.bind(this);
    }

    // Fetch data from people
    getPeople() {
        return Axios.get("https://swapi.co/api/people")
            .then((response) => {
                console.log(response.data.results);
                this.setState({
                    people: response.data.results
                })
            })
    }
    componentDidMount() {
        this.getPeople()
    }

    render() {
        const { people } = this.state;
        //const { name } = this.props.charname;
        return (
            <div className="people" >
                <ListPeople people={people} />
                {/* <Characters characters={name} /> */}
            </div>
        );
    }
}

export default People;
