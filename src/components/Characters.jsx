import React, { Component } from 'react'

export default class Characters extends Component {
    // I think if I want to display characters that belong to movies,then this component should be connected to people by ID and to films ID
    // So if I had more time I think I would do this:
    // const characterId = this.props.match.params.id;
    // and then request http with people ID
    //const characterDetail = axios.get (
    //`https://swapi.co/api/people/${characterId}/`
    //);

    render() {
        // const characters = this.props.charName.id;
        // console.log('I am a CharName');
        // const { people } = this.props.charName;

        return (

            <>
                {/* <div>
                    <div>Here should be characters name:</div>
                    <h3 className="char-name">Characters: {characters}</h3>
                </div> */}
            </>
        )
    }
}
