import React, { Component } from 'react'

class SimpleComponent extends Component {
    //constructor will be used for state definition to accept data from parent component.
    //props represents data to be received from parent components
    constructor(props) {
        //super is used for accessing something from parent components
        super(props);
        //state declarations
        //event binding to components
    }
    //render method encapsulate DOM and its data with behavior.
    //this returns the DOM object aka Virtual DOM
    render() {
        return (
            <div>
                <h2>heyyyyyyyyyyyyyyyy {this.props.myname}</h2>
                <br />
                <NewComponent />
            </div>

        );
    }
}

class NewComponent extends Component {
    constructor(props) {
        //super is used for accessing something from parent components
        super(props);
        //state declarations
        //event binding to components
    }
    //render method encapsulate DOM and its data with behavior.
    //this returns the DOM object aka Virtual DOM
    render() {
        return (
            <div>
                <h2>I am the new component</h2>
            </div>
        );
    }
}
export default SimpleComponent;