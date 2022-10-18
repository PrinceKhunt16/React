import React, { Component } from 'react';

class ChildUnmountingLifecycle extends Component {
    componentWillUnmount(){
        console.log('child componentWillUnmount');
    }

    render() {
        return (
            <div>Child Unmounting Lifecycle</div>
        )
    }
}

export default ChildUnmountingLifecycle;