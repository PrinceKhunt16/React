import React, { Component } from 'react'

class ChildUpdatingLifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'john'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('child getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log('child shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('child getSnapshotBeforeUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('child componentDidUpdate');
    }

    render() {
        console.log('child render');
        return (
            <>
                <div>Child Updating Lifecycle</div>
            </>
        )
    }
}

export default ChildUpdatingLifecycle;