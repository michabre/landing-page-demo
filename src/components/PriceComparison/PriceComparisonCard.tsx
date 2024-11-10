import type { IPricingComparisonCard } from '@interfaces/IPricingComparisonCard'
import {Button, Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import "./priceComparisonCard.scss";

export default function PriceComparisonCard({type, title, description, price, features, selected}:IPricingComparisonCard) {
  const selectedClass = (selected === "true") ? "selected" : "";
  const showTag = (selected === "true") ? true : false;

  return (
    <div className='relative h-[100%]'>
       {showTag && <div className='card-tag absolute flex justify-center'><span className='bg-sky-600 px-8 py-1 uppercase rounded-md text-white font-semibold tracking-widest'>Popular</span></div>}
    <Card className={selectedClass + ' h-[100%]'}>
     
      <CardHeader className="flex flex-col justify-center gap-4 md:items-start">
        <span className='card-type font-bold'>{type}</span>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-base'>{description}</p>
        <div className='flex justify-start items-center gap-1'>
          <span className='text-4xl font-bold'>${price}</span> 
          <span className='text-base'>/ month</span>
        </div>
        <p className='text-base italic'>Billed yearly</p>
      </CardHeader>
      <Divider/>
      <div className='p-3'>
        <Button color="primary" fullWidth={true} size="lg">Start Free Trial</Button>
      </div>
      
      <Divider/>
      <CardBody>
        <h4 className='font-semibold'>What's included:</h4>
        <ul>
          {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </CardBody>
      
      <CardFooter>
      
      </CardFooter>
     
    </Card>
    </div>
  );
}