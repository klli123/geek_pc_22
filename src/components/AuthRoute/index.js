import React, { Component } from 'react'


const { element, ...rest } = this.props;
export default class AuthRoute extends Component {
    render() {
        return (
            <Route {...rest}></Route>
        )
    }
}
