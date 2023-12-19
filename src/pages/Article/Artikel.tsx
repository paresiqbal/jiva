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
  author: string; // Include the 'author' property in the interface
  id: number;
}

const dummyData: Article[] = [
  {
    title: "KECEMASAN DAN METODE PENGENDALIANNYA",
    description:
      "Kecemasan (anxiety) merupakan bagian dari kondisi hidup, artinya kecemasan ada pada setiap orang. Kecemasan merupakan sumber memotivasi untuk berbuat kearah kemajuan",
    author: "Abdul Hayat",
    id: 1,
  },
  {
    title: "Konsep Kecemasan (Anxiety) pada Lanjut Usia (Lansia)",
    description:
      "Lanjut usia merupakan tahap akhir perkembangan pada daur kehidupan manusia yang merupakan suatu proses alami yang tidak dapat dihindari oleh setiap individu. Perubahan-perubahan fisologis",
    author: "Dona Fitri Annisa & Ifdil",
    id: 2,
  },
  {
    title:
      "Teori Kecemasan Berdasarkan Psikoanalisis Klasik dan Berbagai Mekanisme Pertahanan terhadap Kecemasan",
    description:
      " Teori kecemasan oleh Freud pertama kali diungkapkan tahun 1890, berawal dari sebuah pemikiran bahwa kecemasan merupakan libido yang mengendap. Selanjutnya Freud setuju dengan koleganya Otto Rank bahwa asal mula kecemasan berawal dari trauma masa lahir",
    author: "Andri, Yenny Dewi P",
    id: 3,
  },
  {
    title: "Edukasi Masyarakat Mengenai Gejala Cemas",
    description:
      "Dua tahun terakhir masyarakat dihadapi dengan permasalahan global yaitu pandemi, yang berhubungan dengan berbagai aspek kehidupan.",
    author:
      "Resti Rahmadika Akbar, Mutiara Anissa, Insil Pendri Hariyani, Rhandyka Rafli",
    id: 4,
  },
  {
    title:
      "ANALISIS TINGKAT KECEMASAN (ANXIETY) DALAM MENGHADAPI PERTANDINGAN ATLET SEPAK BOLA KABUPATEN BANYUASIN PADA PORPROV 2017",
    description:
      "Kecemasan menjadi situasi yang tergambar sangat jelas saat menjelang pertandingan, kecemasan tentu menjadi alasan terhadap buruknya performa atlet dilapangan, situasi demikian terjadi pada atlet sepak bola Kabupaten Banyuaisn menjelang Porprov 2017 di Palembang",
    author: "HENGKI KUMBARA, YOGI METRA, ZULPIKAR ILHAM",
    id: 5,
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
      <h1 className="text-3xl font-bold mb-4 bg-[#d1ded7] p-2 rounded-md">
        ARTIKEL
      </h1>
      <div>
        {currentArticles.map((data) => (
          <Link to={`/ArtikelDetail/${data.id}`} key={data.id}>
            <Card className="mb-4 bg-[#d1ded7]">
              <CardHeader>
                <CardTitle className="text-lg underline hover:cursor-pointer font-semibold">
                  {data.title}
                </CardTitle>
                <CardDescription>{data.description}</CardDescription>
                <p className="text-sm">{data.author}</p>
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
              currentPage === pageNumber + 1 ? "bg-[#689986]" : "bg-[#f1f3f2]"
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
