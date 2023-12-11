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
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="mx-auto"
            />
          </Avatar>
          <CardTitle className="font-custom font-thin">Rical</CardTitle>
          <CardDescription>Leader</CardDescription>
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

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="mx-auto"
            />
          </Avatar>
          <CardTitle className="font-custom font-thin">Aliffia</CardTitle>
          <CardDescription>Writer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Tuhan pasti memberikan jalan buat kita, tapi belom dicor</p>
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

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="mx-auto"
            />
          </Avatar>
          <CardTitle className="font-custom font-thin">Adni</CardTitle>
          <CardDescription>Creative Director</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Jangan berharap kepada tim SAR untuk menemukan jodohmu.</p>
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

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="mx-auto"
            />
          </Avatar>
          <CardTitle className="font-custom font-thin">Gisna</CardTitle>
          <CardDescription>Facilitator</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Life is too short. Smile while you still have teeth.</p>
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

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="mx-auto"
            />
          </Avatar>
          <CardTitle className="font-custom font-thin">Thomas</CardTitle>
          <CardDescription>Coach</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Segala hal indah pasti berawal dari mimpi, jadi ayo kita tidur.</p>
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
