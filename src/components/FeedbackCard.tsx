// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function FeedbackCard() {
  const breakpoints = {
    320: { slidesPerView: 1 }, // Mobile view
    768: { slidesPerView: 2 }, // Medium view
    1024: { slidesPerView: 3 }, // Large view
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        breakpoints={breakpoints}
        touchEventsTarget="wrapper" // Ensure proper touch interaction
        simulateTouch={true} // Enable touch simulation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="mx-auto"
                />
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>johndoe@email.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, vero?
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="mx-auto"
                />
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>johndoe@email.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, vero?
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="mx-auto"
                />
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>johndoe@email.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, vero?
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="mx-auto"
                />
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>johndoe@email.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, vero?
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
