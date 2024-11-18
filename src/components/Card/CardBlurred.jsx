import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function CardBlurred() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-full opacity-1 aspect-square"
          src="https://loremflickr.com/320/240?random=1"
          width={320}
        />
      </CardBody>
      <CardFooter className="block text-center">
        <h4 className="font-bold text-large">John Smith, <span className="text-xs uppercase">Business Owner</span></h4> 
        <div className="flex justify-center">
          <FaQuoteLeft size={16} color={"#11181C"} />
        </div>
        <p className="text-base mx-4">Blockquote Here</p>
      </CardFooter>
    </Card>
  );
}