import { createContext, useContext } from "react";

const AccordionContext = createContext({
    activePanel: 0, 
    onSelectPanel: () => undefined
});

export const AccordionContextProvider = AccordionContext.Provider;

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if(context === undefined){
        throw new Error('useAccordionContext must be must under AccordionContextProvider');
    }
    return context;
}