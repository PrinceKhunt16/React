import React from 'react';
import MountingLifecycle from './components/Lifecycle/MountingLifecycle';
import UpdatingLifecycle from './components/Lifecycle/UpdatingLifecycle';
import UnmountingLifecycle from './components/Lifecycle/UnmountingLifecycle';
import PureComponent from './components/PureComponent';
import ErrorHandlingLifecycle from './components/Lifecycle/ErrorHandlingLifecycle';

const App = () => {
    return (
        <div>
            {/* <MountingLifecycle /> */}
            {/* <UpdatingLifecycle /> */}
            {/* <UnmountingLifecycle /> */}
            <ErrorHandlingLifecycle />
            {/* <PureComponent /> */}
        </div>
    )
}

export default App;