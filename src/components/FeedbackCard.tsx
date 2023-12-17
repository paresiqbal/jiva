import { useState, useEffect } from "react";
import { db } from "@/config/firebase-config";
import { getDocs, collection } from "firebase/firestore";

// shadcn
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

// swipperJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FeedbackCard() {
  const [feedbackList, setFeedbackList] = useState([]);
  const feedbackColRef = collection(db, "feedback");

  const getFeedbackList = async () => {
    try {
      const data = await getDocs(feedbackColRef);
      const filterData = data.docs.map((doc) => ({ ...doc.data() }));
      setFeedbackList(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeedbackList();
  });

  // swiper
  const breakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        breakpoints={breakpoints}
        touchEventsTarget="wrapper"
        simulateTouch={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {feedbackList.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div>
              <h1>{feedback.name}</h1>
              <h2>{feedback.email}</h2>
              <p>{feedback.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
