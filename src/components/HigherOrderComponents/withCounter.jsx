import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            }
        }

        incrementCount = () => {
            this.setState((state) => {
                return {
                    count: state.count + incrementNumber
                }
            })
        }

        render(){
            return(
                <WrappedComponent 
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                />
            )
        }
    }

    return WithCounter;
}

export default withCounter;