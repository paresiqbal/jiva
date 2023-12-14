// Rdd
import { useParams, Link } from "react-router-dom";

// shadcn
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
  const { id } = useParams<{ id: string }>();
  const parsedId = id ? parseInt(id, 10) : undefined;

  // Find the article in dummyData that matches the id parameter
  const article = parsedId
    ? dummyData.find((item) => item.id === parsedId)
    : undefined;

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="mx-auto">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">{article.title}</h2>
        <p className="text-gray-500">{article.date}</p>
      </div>
      <p className="text-lg mb-4">{article.description}</p>
      <div className="flex my-6 h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
      <Link
        to="/artikel"
        className="text-blue-500 hover:underline mb-4 block my-4"
      >
        <Button> &lt; Back to Artikel</Button>
      </Link>
    </div>
  );
}
