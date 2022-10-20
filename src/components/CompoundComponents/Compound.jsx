import { useState } from "react";
import { Accordion } from "./Accordion/Accordion";
import { AccordionButton } from "./Accordion/AccordionButton";
import { AccordionItem } from "./Accordion/AccordionItem";
import { AccordionPanel } from "./Accordion/AccordionPanel";
import crickter from "./Crickter.json";

const Compound = () => {
    const [activePanel, setActivePanel] = useState(0);

    const onChangeTab = (tab) => {
        setActivePanel(tab);
    };

    return (
        <div>
            <Accordion
                onSelectPanel={onChangeTab}
                id="accordion"
                activePanel={activePanel}
            >
                {crickter.map((c, index) => (
                    <AccordionItem id="item1">
                        <AccordionButton panelKey={index} label={c.name} />
                        <AccordionPanel panelKey={index}>
                            <div>{c.about}</div>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default Compound;