import React, { Component } from 'react'
import Characters from './Characters';

export default class List extends Component {
    render() {
        const people = this.props.people;
        return (
            <div>
                {
                    people.map((p) => {
                        //console.log(p)
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">{p.name}</h1>
                                <Characters charName={p} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
