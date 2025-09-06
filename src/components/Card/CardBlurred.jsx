import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FaQuoteLeft } from "react-icons/fa";

export default function CardBlurred({ image, image_alt }) {
  return (
    <Card className="py-4">
      <CardContent className="overflow-visible py-2">
        <img src={image} alt={image_alt} className="object-cover rounded-full opacity-1 aspect-square" width="320" />
      </CardContent>
      <CardActions className="block text-center">
        <h4 className="font-bold text-large">John Smith, <span className="text-xs uppercase">Business Owner</span></h4> 
        <div className="flex justify-center">
          <FaQuoteLeft size={16} color={"#11181C"} />
        </div>
        <p className="text-base mx-4">Blockquote Here</p>
      </CardActions>
    </Card>
  );
}