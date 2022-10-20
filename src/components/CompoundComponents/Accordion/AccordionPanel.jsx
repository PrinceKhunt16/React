import classNames from "classnames";
import { useAccordionContext } from "./AccordionContextProvider";

const defaultProps = {
    id: '',
    className: ''
};

const AccordionPanel = (props) => {
    const { id, className, children, panelKey } = props;
    const { activePanel } = useAccordionContext();
    const selectedPanel = activePanel === panelKey;

    return (
        <div
            id={id}
            className={classNames("accordion-collapse collapse", className, {
                show: selectedPanel,
            })}
        >
            <div className="accordion-body">
                {children}
            </div>
        </div>
    );
}

AccordionPanel.defaultProps = defaultProps;
export { AccordionPanel };
