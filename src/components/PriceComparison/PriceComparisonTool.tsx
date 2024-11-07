
import { useState } from 'react';
import PriceComparisonCard from "./PriceComparisonCard";

export default function PriceComparisonTool() {
  const [active, setActive] = useState(false);
  return (
    <div className="price-comparison">
      <div className="columns-3 gap-8">
        <PriceComparisonCard active={false} />
        <PriceComparisonCard active={true} />
        <PriceComparisonCard active={false} />
      </div>
    </div>
    
  );
}