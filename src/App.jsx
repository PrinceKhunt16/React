import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MountingLifecycle from './components/Lifecycle/MountingLifecycle';
import UpdatingLifecycle from './components/Lifecycle/UpdatingLifecycle';
import UnmountingLifecycle from './components/Lifecycle/UnmountingLifecycle';
import ErrorHandlingLifecycle from './components/Lifecycle/ErrorHandlingLifecycle';
import PureComponent from './components/PureComponent';
import HOC from './components/HigherOrderComponents';
import RenderProps from './components/RenderProps';
import ContextModule from './components/ContextModule/userDetails';
import { UserProvider } from './components/ContextModule/userContext';
import Compound from './components/CompoundComponents/Compound';

const App = () => {
    return (
        <div>
            {/* <MountingLifecycle /> */}
            {/* <UpdatingLifecycle /> */}
            {/* <UnmountingLifecycle /> */}
            {/* <ErrorHandlingLifecycle /> */}
            {/* <PureComponent /> */}
            {/* <HOC /> */}
            {/* <RenderProps /> */}
            {/* <UserProvider>
                <ContextModule />
            </UserProvider> */}
            <Compound />
        </div>
    )
}

export default App;