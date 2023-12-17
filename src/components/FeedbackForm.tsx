import { useEffect, useState } from "react";
import { db } from "@/config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
}

export default function FeedbackForm() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const feedbackColRef = collection(db, "feedback");

  const [newFeedbackName, setNewFeedbackName] = useState<string>("");
  const [newFeedbackEmail, setNewFeedbackEmail] = useState<string>("");
  const [newFeedbackMessage, setNewFeedbackMessage] = useState<string>("");

  const getFeedbackList = async () => {
    try {
      const data = await getDocs(feedbackColRef);
      const filterData: Feedback[] = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Feedback[];
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
    alert("Terima kasih atas feedbackmu!");
  };

  useEffect(() => {
    getFeedbackList();
  }, []);

  const breakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  return (
    <div className="my-8">
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Berikan Testimoni mu
        </h1>
        <div className="flex flex-col space-y-4">
          <Input
            type="text"
            placeholder="Nama"
            onChange={(e) => setNewFeedbackName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setNewFeedbackEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <Input
            type="text"
            placeholder="Testimoni"
            onChange={(e) => setNewFeedbackMessage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <Button type="submit" onClick={submitFeedback}>
            Submit
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-3xl py-8 font-semibold text-center">Testimoni</h2>
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
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-center">{feedback.name}</CardTitle>
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
