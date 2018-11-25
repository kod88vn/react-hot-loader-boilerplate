import { React, Component } from 'react';
import { PropTypes } from 'prop-types';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static propTypes = {
        children: PropTypes.any,
    };

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // eslint-disable-next-line no-console
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}