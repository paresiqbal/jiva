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

export default function FeedbackCard() {
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
          <CardTitle>John Doe</CardTitle>
          <CardDescription>Mahasiswa</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            vero?
          </p>
        </CardContent>
        <CardFooter>
          <p>johndoe@gmail.com</p>
        </CardFooter>
      </Card>
    </div>
  );
}
