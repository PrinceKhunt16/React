import { useState } from "react";
import Switch from "./Switch";
import { actionTypes, toggleReducer, useToggle } from "./useToggle";

const Toggle = () => {
    const [clicksSinceReset, setClicksSinceReset] = useState(0);
    const tooManyClicks = clicksSinceReset >= 4;

    const { on, toggle, setOn, setOff } = useToggle({
        reducer(currentState, action) {
            const changes = toggleReducer(currentState, action)
            if (tooManyClicks && action.type === actionTypes.toggle) {
                return { ...changes, on: currentState.on };
            } else {
                return changes;
            }
        }
    });

    return (
        <div>
            <button onClick={setOff}>Swith Off</button>
            <button onClick={setOn}>Swith On</button>
            <Switch
                checked={on}
                onClick={() => {
                    toggle();
                    setClicksSinceReset(count => count + 1);
                }}
            />
            {tooManyClicks
                ? (
                    <button onClick={() => setClicksSinceReset(0)}>Reset</button>
                ) : (
                    null
                )
            }
        </div>
    )
}

export default Toggle;