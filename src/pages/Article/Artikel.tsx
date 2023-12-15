import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Article {
  title: string;
  description: string;
  date: string;
  id: number;
}

const dummyData: Article[] = [
  {
    title: "Memahami Kekhawatiran",
    description:
      "Kekhawatiran ibarat tamu tak diundang dalam pikiran kita, sering kali menyelinap masuk di saat yang tidak kita duga.",
    date: "12 Des, 2023",
    id: 1,
  },
  {
    title: "Strategi Mengatasi Kekhawatiran",
    description:
      "Ketika kekhawatiran mulai membebani kita, penting bagi kita untuk mempunyai strategi untuk mengatasinya. Terlibat dalam aktivitas kesadaran, seperti meditasi",
    date: "07 Oct, 2023",
    id: 2,
  },
  {
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Kekhawatiran sering kali menyertai saat-saat perubahan, namun hal tersebut tidak harus mendikte pengalaman kita. Daripada melihat perubahan hanya melalui kacamata kecemasan, kita bisa melakukannya",
    date: "30 Arp, 2023",
    id: 3,
  },
  {
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Kekhawatiran sering kali menyertai saat-saat perubahan, namun hal tersebut tidak harus mendikte pengalaman kita. Daripada melihat perubahan hanya melalui kacamata kecemasan, kita bisa melakukannya",
    date: "30 Arp, 2023",
    id: 4,
  },
  {
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Kekhawatiran sering kali menyertai saat-saat perubahan, namun hal tersebut tidak harus mendikte pengalaman kita. Daripada melihat perubahan hanya melalui kacamata kecemasan, kita bisa melakukannya",
    date: "30 Arp, 2023",
    id: 5,
  },
  {
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Kekhawatiran sering kali menyertai saat-saat perubahan, namun hal tersebut tidak harus mendikte pengalaman kita. Daripada melihat perubahan hanya melalui kacamata kecemasan, kita bisa melakukannya",
    date: "30 Arp, 2023",
    id: 6,
  },
];

const ITEMS_PER_PAGE = 3;

export default function Artikel() {
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentArticles = dummyData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-4 bg-white p-2 rounded-md">
        ARTIKEL
      </h1>
      <div>
        {currentArticles.map((data) => (
          <Link to={`/ArtikelDetail/${data.id}`} key={data.id}>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg underline hover:cursor-pointer font-semibold">
                  {data.title}
                </CardTitle>
                <CardDescription>{data.description}</CardDescription>
                <p className="text-sm">{data.date}</p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`mx-2 py-1 px-3 rounded-lg ${
              currentPage === pageNumber + 1 ? "bg-primary" : "bg-gray-100"
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
