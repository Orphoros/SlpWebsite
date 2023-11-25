"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

type Props = {
    content: {
        title: string;
        text: string
    }[],
};

export default function SlpAccordion({ content}: Props) {
    return (
        <Accordion variant="bordered">
            {content.map((item) =>
            <AccordionItem key={item.title} aria-label={item.title} title={item.title}>
                {item.text}
            </AccordionItem>
            )}
        </Accordion>
    );
}
