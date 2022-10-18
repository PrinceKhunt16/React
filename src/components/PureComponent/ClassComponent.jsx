import React, { PureComponent } from 'react';

class ClassComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 10
        }
    }
    
    /*
    
    We have a lifecycle method called shouldComponentUpdate which by default returns true (Boolean) value. The purpose of the shouldComponentUpdate is we can custom implement the default behavior and decide when react should update or re-render the component.

    */

    increment = () => {
        this.setState((state) => ({
            count: state.count + 1
        }));
    }

    render() {
        console.log('Count component renders');
        return (
            <>
                <h1>PureComponent</h1>
                <div>We have fetched {this.state.count} Users</div>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default ClassComponent;