// react
import { useEffect, useState } from "react";

// firebase
import { db } from "@/config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";

// shadcn
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

// swipperJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FeedbackForm() {
  const [feedbackList, setFeedbackList] = useState([]);
  const feedbackColRef = collection(db, "feedback");

  // new feedback
  const [newFeedbackName, setNewFeedbackName] = useState("");
  const [newFeedbackEmail, setNewFeedbackEmail] = useState("");
  const [newFeedbackMessage, setNewFeedbackMessage] = useState("");

  const getFeedbackList = async () => {
    try {
      const data = await getDocs(feedbackColRef);
      const filterData = data.docs.map((doc) => ({ ...doc.data() }));
      setFeedbackList(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  const submitFeedback = async () => {
    try {
      await addDoc(feedbackColRef, {
        name: newFeedbackName,
        email: newFeedbackEmail,
        message: newFeedbackMessage,
      });
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
      <div>
        <h1>Feedback Form</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNewFeedbackName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setNewFeedbackEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => setNewFeedbackMessage(e.target.value)}
        />
        <button type="submit" onClick={submitFeedback}>
          Submit
        </button>
      </div>
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
              <Card>
                <CardHeader>
                  <CardTitle>{feedback.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feedback.email}</CardDescription>
                </CardContent>
                <CardFooter>{feedback.message}</CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
