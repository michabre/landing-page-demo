import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { MdOutlineStarBorder } from "react-icons/md";

export default function CardBasic() {
  return (
    <Card className="mb-4">
      <CardBody className="p-12">
        <MdOutlineStarBorder size={42} />
        <h3 className="text-lg font-bold">Feature</h3>
        <p className="text-base">Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}