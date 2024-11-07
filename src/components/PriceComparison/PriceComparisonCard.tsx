import {Button, Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import "./priceComparisonCard.css";

export default function PriceComparisonCard({active}:{active:boolean}) {
  const activeClass = active ? "active" : "";
  return (
    <Card className={activeClass}>
      <CardHeader className="flex h-full flex-col justify-center gap-4 md:items-start">
        <h3>Basic</h3>
        <p>For hobby & side projects</p>
        <div>$10 / month</div>
        <p>Billed yearly</p>
      </CardHeader>
      <Divider/>
      <CardBody>
        <h4>What's included:</h4>
        <ul>
          <li>10 projects</li>
          <li>10 users</li>
          <li>10 GB storage</li>
          <li>Unlimited data transfer</li>
        </ul>
      </CardBody>
      <Divider/>
      <CardFooter>
      <Button color="primary" fullWidth={true}>Start Free Trial</Button>
      </CardFooter>
    </Card>
    
  );
}