import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import type { IAccordionItem } from '@interfaces/IAccordionItem'
import "./accordion.scss";

export default function FeaturesAccordion({items}:{items: IAccordionItem[]}) {
  return (
    <div className="features accordion">
      {items.map((item:IAccordionItem, index:number) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails>
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}