import { createContext, useContext, useReducer } from "react";
import { initialUserState, userReducer } from "./userReducer";

export const UserStateContext = createContext(initialUserState);
export const UserDispatchContext = createContext(null);

export const useUserStateContext = () => useContext(UserStateContext);
export const useUserDispatchContext = () => useContext(UserDispatchContext);

export function UserProvider({ children }){
    const [userDetails, dispatch] = useReducer(userReducer, initialUserState);
    return (
        <UserStateContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}