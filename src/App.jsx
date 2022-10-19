import React from 'react';
import MountingLifecycle from './components/Lifecycle/MountingLifecycle';
import UpdatingLifecycle from './components/Lifecycle/UpdatingLifecycle';
import UnmountingLifecycle from './components/Lifecycle/UnmountingLifecycle';
import ErrorHandlingLifecycle from './components/Lifecycle/ErrorHandlingLifecycle';
import PureComponent from './components/PureComponent';
import HOC from './components/HigherOrderComponents';

const App = () => {
    return (
        <div>
            {/* <MountingLifecycle /> */}
            {/* <UpdatingLifecycle /> */}
            {/* <UnmountingLifecycle /> */}
            {/* <ErrorHandlingLifecycle /> */}
            {/* <PureComponent /> */}
            <HOC />
        </div>
    )
}

export default App;