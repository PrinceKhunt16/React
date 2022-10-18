import React, { Component } from 'react'
import ChildUpdatingLifecycle from './ChildUpdatingLifecycle';

class UpdatingLifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'john'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    handleUpdateName = () => {
        this.setState({
            name: 'tom'
        });
    }

    render() {
        console.log('render');
        return (
            <>
                <div>Updating Lifecycle</div>
                <button onClick={this.handleUpdateName}>Update Name</button>
                <ChildUpdatingLifecycle />
            </>
        )
    }
}

export default UpdatingLifecycle;