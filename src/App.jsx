import React from 'react';
import MountingLifecycle from './components/Lifecycle/MountingLifecycle';
import UpdatingLifecycle from './components/Lifecycle/UpdatingLifecycle';

const App = () => {
    return (
        <div>
            {/* <MountingLifecycle /> */}
            <UpdatingLifecycle />
        </div>
    )
}

export default App;