import {Accordion, AccordionItem} from "@nextui-org/react";
import type { IAccordionItem } from '@interfaces/IAccordionItem'
import "./accordion.scss";

export default function FeaturesAccordion({items}:{items: IAccordionItem[]}) {
  return (
    <div className="features accordion">
    <Accordion>
      {items.map((item:IAccordionItem, index:number) => <AccordionItem key={index} className="accordion-item" aria-label={item.title} title={item.title}>{item.content}</AccordionItem>)}
    </Accordion>
    </div>
  );
}