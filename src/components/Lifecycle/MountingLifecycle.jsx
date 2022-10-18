import React, { Component } from 'react'
import ChildMountingLifecycle from './ChildMountingLifecycle';

class MountingLifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <>
                <div>Mounting Lifecycle</div>
                <ChildMountingLifecycle />
            </>
        )
    }
}

export default MountingLifecycle;