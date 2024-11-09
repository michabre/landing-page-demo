import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

export default function CardBlurred() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Testimonial</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl opacity-1"
          src="https://loremflickr.com/320/240?random=1"
          width={320}
        />
      </CardBody>
      <CardFooter>
        <div>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4> 
        </div>
      </CardFooter>
    </Card>
  );
}