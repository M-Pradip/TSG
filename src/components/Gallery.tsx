import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const imagePath = require("../assets/flavour.jpeg").default;
const imagePath2 = require("../assets/flavour2.jpeg").default;
export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath2}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath2}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath2}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath2}
            alt="Picture product"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0 w-auto h-auto">
          <Image
            className="object-cover "
            src={imagePath}
            alt="Picture product"
          />
        </CardContent>
      </Card>
    </div>
  );
}
