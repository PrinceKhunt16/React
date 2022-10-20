import classNames from "classnames";
import { useAccordionContext } from "./AccordionContextProvider";

const defaultProps = {
    id: '',
    className: ''
};

const AccordionButton = (props) => {
    const { id, className, label, panelKey } = props;
    const { onSelectPanel } = useAccordionContext();

    return (
        <h2 className={classNames("accordion-header", className)} id={id}>
            <button
                className="accordion-button"
                type="button"
                onClick={() => onSelectPanel(panelKey)}
            >
                {label}
            </button>
        </h2>
    )
}

AccordionButton.defaultProps = defaultProps;
export { AccordionButton };