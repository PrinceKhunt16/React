import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ChildErrorHandlingLifecycle from './ChildErrorHandlingLifecycle';

const ErrorHandlingLifecycle = () => {
    return (
        <div>
            <ErrorBoundary>
                <ChildErrorHandlingLifecycle heroName={'Superman'} />
            </ErrorBoundary>
            <ErrorBoundary>
                <ChildErrorHandlingLifecycle heroName={'Joker'} />
            </ErrorBoundary>
        </div>
    )
}

export default ErrorHandlingLifecycle;