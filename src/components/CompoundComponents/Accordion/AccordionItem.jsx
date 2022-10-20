import classNames from "classnames";

const defaultProps = {
    id: '',
    class: ''
};

const AccordionItem = (props) => {
    const { children, id, className } = props;
    return (
        <div id={id} className={classNames('accordion-item', className)}>
            {children}
        </div>
    )
}

AccordionItem.defaultProps = defaultProps;
export { AccordionItem };