import classNames from "classnames";
import { AccordionContextProvider } from "./AccordionContextProvider";

const defaultProps = {
    id: '',
    className: ''
};

const Accordion = (props) => {
    const { children, id, className, activePanel, onSelectPanel } = props;

    return (
        <AccordionContextProvider value={{ activePanel, onSelectPanel }}>
            <div id={id} className={classNames("accordion", className)}>
                {children}
            </div>
        </AccordionContextProvider>
    )
}

Accordion.defaultProps = defaultProps;
export { Accordion };