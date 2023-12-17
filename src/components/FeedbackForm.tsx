// react
import { useEffect, useState } from "react";

// firebase
import { db } from "@/config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";

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
      {feedbackList.map((feedback) => (
        <div key={feedback.id}>
          <h1>{feedback.name}</h1>
          <h2>{feedback.email}</h2>
          <p>{feedback.message}</p>
        </div>
      ))}
    </div>
  );
}
