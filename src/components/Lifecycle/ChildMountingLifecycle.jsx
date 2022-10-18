import React, { Component } from 'react'

class ChildMountingLifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('child constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('child getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('child componentDidMount');
    }

    render() {
        console.log('child render');
        return (
            <div> Child Mounting Lifecycle</div>
        )
    }
}

export default ChildMountingLifecycle;