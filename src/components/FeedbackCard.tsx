// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

// swipperJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// assets
import picture from "@/assets/picture.jpg";
import picture1 from "@/assets/picture1.jpg";
import picture2 from "@/assets/picture2.jpg";
import picture3 from "@/assets/picture3.jpg";

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
                <AvatarImage src={picture} className="mx-auto" />
              </Avatar>
              <CardTitle>Risti Yolanda</CardTitle>
              <CardDescription>ristiyolanda@email.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Konsultasi kecemasan di situs ini telah membawa perubahan besar
                bagi saya. Pendekatan yang dipersonalisasi dan bimbingan ahli
                membantu saya memahami pemicu dan mengelola kecemasan saya
                secara efektif. Sangat dianjurkan
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage src={picture1} className="mx-auto" />
              </Avatar>
              <CardTitle>Sarah L.</CardTitle>
              <CardDescription>sarahl@email.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Awalnya saya skeptis, tetapi konsultasi kecemasan di sini sangat
                mendalam. Strategi yang ditawarkan praktis dan disesuaikan
                dengan kebutuhan saya. Saya telah melihat peningkatan yang
                signifikan dalam menangani kecemasan saya sejak itu.
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage src={picture2} className="mx-auto" />
              </Avatar>
              <CardTitle>Michael D</CardTitle>
              <CardDescription>michaeld02@gmail.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Sebagai seseorang yang bergelut dengan kecemasan selama
                bertahun-tahun, menemukan ini layanan konsultasi adalah berkah.
                Pemahaman dan dukungan yang diberikan melebihi ekspektasi saya.
                akhirnya aku merasa diperlengkapi untuk mengatasi kecemasan saya
                secara langsung.
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="items-center">
                <AvatarImage src={picture3} className="mx-auto" />
              </Avatar>
              <CardTitle>Emily S</CardTitle>
              <CardDescription>emis099@gmail.com</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Konsultasi kecemasan situs web ini melebihi ekspektasi saya.
                Sesi-sesinya penuh empati dan penuh dengan alat-alat berharga
                yang benar-benar telah membuat perbedaan dalam cara saya
                mendekati dan mengelola bisnis saya kecemasan setiap hari
              </p>
            </CardContent>
          </Card>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
