import React, { Component } from 'react';
import ChildUnmountingLifecycle from './ChildUnmountingLifecycle';

class UnmountingLifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    render() {
        return (
            <>
                <div>Unmounting Lifecycle</div>
                <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
                {this.state.show ? <ChildUnmountingLifecycle /> : null}
            </>
        )
    }
}

export default UnmountingLifecycle;