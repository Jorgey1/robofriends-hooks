import React, { Component } from 'react';

class ErrorBoundary extends component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users })});
    }
    
    render() {
        if(this.state.hasError) {
            return <h1>Oooops, That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;