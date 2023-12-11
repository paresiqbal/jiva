// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function TeamCard() {
  return (
    <div>
      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="mx-auto"
            />
          </Avatar>
          <CardTitle className="font-custom font-thin">Rical</CardTitle>
          <CardDescription>Writer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Cantik itu relatif, tergantung angle kamera, hehe.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a href="#" target="_blank">
            <FaInstagram className="w-8 h-8" />
          </a>
          <a href="#" target="_blank">
            <FaFacebook className="w-8 h-8" />
          </a>
          <a href="#" target="_blank">
            <FaTwitter className="w-8 h-8" />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin className="w-8 h-8" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
