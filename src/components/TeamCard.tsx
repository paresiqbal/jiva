// shadcn
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaInstagram } from "react-icons/fa";

// assets
import rical from "@/assets/rical.jpg";
import alifia from "@/assets/alifia.jpg";
import adni from "@/assets/adni.jpg";
import gisna from "@/assets/gisna.png";
import thomas from "@/assets/thomas.jpg";

export default function TeamCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage src={rical} className="mx-auto object-cover" />
          </Avatar>
          <CardTitle className="font-custom font-thin">Rical</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cantik itu relatif, tergantung angle kamera, hehe.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a href="https://www.instagram.com/ricallav_/" target="_blank">
            <FaInstagram className="w-8 h-8" />
          </a>
        </CardFooter>
      </Card>

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage src={alifia} className="mx-auto object-cover" />
          </Avatar>
          <CardTitle className="font-custom font-thin">Aliffia</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Tuhan pasti memberikan jalan buat kita, tapi belom dicor</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a href="https://www.instagram.com/a.zhrn_/" target="_blank">
            <FaInstagram className="w-8 h-8" />
          </a>
        </CardFooter>
      </Card>

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage src={adni} className="mx-auto object-cover" />
          </Avatar>
          <CardTitle className="font-custom font-thin">Adni</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Jangan berharap kepada tim SAR untuk menemukan jodohmu.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a href="https://www.instagram.com/adniaff_/" target="_blank">
            <FaInstagram className="w-8 h-8" />
          </a>
        </CardFooter>
      </Card>

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage src={gisna} className="mx-auto object-cover" />
          </Avatar>
          <CardTitle className="font-custom font-thin">Gisna</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Life is too short. Smile while you still have teeth.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a href="https://www.instagram.com/grvyskyy/" target="_blank">
            <FaInstagram className="w-8 h-8" />
          </a>
        </CardFooter>
      </Card>

      <Card className="flex flex-col items-center text-center">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="items-center">
            <AvatarImage src={thomas} className="mx-auto object-cover" />
          </Avatar>
          <CardTitle className="font-custom font-thin">Thomas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Segala hal indah pasti berawal dari mimpi, jadi ayo kita tidur.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a href="http://instagram.com/tthhooomaas" target="_blank">
            <FaInstagram className="w-8 h-8" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
