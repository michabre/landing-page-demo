import type { IPricingComparisonCard } from '@interfaces/IPricingComparisonCard'
import PriceComparisonCard from "./PriceComparisonCard"

export default function PriceComparisonTool({options}:{options:any}) {
  return (
    <div className="price-comparison">
      {/* <div className="columns-3 gap-8"> */}
      <div className='grid grid-cols-3 gap-8'>
        {options.map((pricing:IPricingComparisonCard, index:number) => <PriceComparisonCard 
          key={`${pricing.type}-${index}`} 
          type={pricing.type} 
          title={pricing.title}
          description={pricing.description}
          price={pricing.price}
          features={pricing.features}
          selected={pricing.selected} />)}
      </div>
    </div>
  );
}