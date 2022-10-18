import React from 'react';
import MountingLifecycle from './components/Lifecycle/MountingLifecycle';
import UpdatingLifecycle from './components/Lifecycle/UpdatingLifecycle';
import UnmountingLifecycle from './components/Lifecycle/UnmountingLifecycle';

const App = () => {
    return (
        <div>
            {/* <MountingLifecycle /> */}
            {/* <UpdatingLifecycle /> */}
            <UnmountingLifecycle />
        </div>
    )
}

export default App;