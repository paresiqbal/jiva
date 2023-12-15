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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident assumenda voluptates praesentium voluptatem unde ab sunt perferendis, temporibus laboriosam aliquam repellendus eum in doloribus iure sapiente officiis velit soluta quae eius, eaque fugit dolores deleniti distinctio. At, culpa perspiciatis cumque voluptas illo iusto numquam nemo fuga exercitationem deleniti error.",
    date: "12 Des, 2023",
  },
  {
    id: 2,
    title: "Strategi Mengatasi Kekhawatiran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident assumenda voluptates praesentium voluptatem unde ab sunt perferendis, temporibus laboriosam aliquam repellendus eum in doloribus iure sapiente officiis velit soluta quae eius, eaque fugit dolores deleniti distinctio. At, culpa perspiciatis cumque voluptas illo iusto numquam nemo fuga exercitationem deleniti error.",
    date: "07 Oct, 2023",
  },
  {
    id: 3,
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident assumenda voluptates praesentium voluptatem unde ab sunt perferendis, temporibus laboriosam aliquam repellendus eum in doloribus iure sapiente officiis velit soluta quae eius, eaque fugit dolores deleniti distinctio. At, culpa perspiciatis cumque voluptas illo iusto numquam nemo fuga exercitationem deleniti error.",
    date: "30 Arp, 2023",
  },
  {
    id: 4,
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident assumenda voluptates praesentium voluptatem unde ab sunt perferendis, temporibus laboriosam aliquam repellendus eum in doloribus iure sapiente officiis velit soluta quae eius, eaque fugit dolores deleniti distinctio. At, culpa perspiciatis cumque voluptas illo iusto numquam nemo fuga exercitationem deleniti error.",
    date: "30 Arp, 2023",
  },
  {
    id: 5,
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident assumenda voluptates praesentium voluptatem unde ab sunt perferendis, temporibus laboriosam aliquam repellendus eum in doloribus iure sapiente officiis velit soluta quae eius, eaque fugit dolores deleniti distinctio. At, culpa perspiciatis cumque voluptas illo iusto numquam nemo fuga exercitationem deleniti error.",
    date: "30 Arp, 2023",
  },
  {
    id: 6,
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident assumenda voluptates praesentium voluptatem unde ab sunt perferendis, temporibus laboriosam aliquam repellendus eum in doloribus iure sapiente officiis velit soluta quae eius, eaque fugit dolores deleniti distinctio. At, culpa perspiciatis cumque voluptas illo iusto numquam nemo fuga exercitationem deleniti error.",
    date: "30 Arp, 2023",
  },
];

export default function ArtikelDetail() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const parsedId = parseInt(id, 10);
  const article = dummyData.find((item) => item.id === parsedId);

  if (!article) {
    return <div>Artikel Tidak Ditemukan</div>;
  }

  return (
    <div className="mx-auto px-6 bg-white py-12">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">{article.title}</h2>
        <p className="text-gray-500">{article.date}</p>
      </div>
      <p className="text-lg mb-4">{article.description}</p>
      <div className="flex my-6 h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Artikel</div>
        <Separator orientation="vertical" />
        <div>Sumber</div>
      </div>
      <Link
        to="/artikel"
        className="text-blue-500 hover:underline mb-4 block my-4"
      >
        <Button> &lt; Kembali ke Artikel</Button>
      </Link>
    </div>
  );
}
