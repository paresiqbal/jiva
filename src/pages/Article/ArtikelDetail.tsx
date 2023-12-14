import { useParams } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    title: "Memahami Kekhawatiran",
    description:
      "Kekhawatiran ibarat tamu tak diundang dalam pikiran kita, sering kali menyelinap masuk di saat yang tidak kita duga.",
    date: "12 Des, 2023",
  },
  {
    id: 2,
    title: "Strategi Mengatasi Kekhawatiran",
    description:
      "Ketika kekhawatiran mulai membebani kita, penting bagi kita untuk mempunyai strategi untuk mengatasinya. Terlibat dalam aktivitas kesadaran, seperti meditasi",
    date: "07 Oct, 2023",
  },
  {
    id: 3,
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Kekhawatiran sering kali menyertai saat-saat perubahan, namun hal tersebut tidak harus mendikte pengalaman kita. Daripada melihat perubahan hanya melalui kacamata kecemasan, kita bisa melakukannya",
    date: "30 Arp, 2023",
  },
];

export default function ArtikelDetail() {
  const { id } = useParams();

  // Find the article in dummyData that matches the id parameter
  const article = dummyData.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2 className="text-3xl">{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.date}</p>
      {/* Other content or components to display article details */}
    </div>
  );
}
