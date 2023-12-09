import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const dummyData = [
  {
    title: "Memahami Kekhawatiran",
    description:
      "Kekhawatiran ibarat tamu tak diundang dalam pikiran kita, sering kali menyelinap masuk di saat yang tidak kita duga.",
    date: "12 Des, 2023",
  },
  {
    title: "Strategi Mengatasi Kekhawatiran",
    description:
      "Ketika kekhawatiran mulai membebani kita, penting bagi kita untuk mempunyai strategi untuk mengatasinya. Terlibat dalam aktivitas kesadaran, seperti meditasi",
    date: "07 Oct, 2023",
  },
  {
    title: "Merangkul Perubahan Positif di Tengah Kekhawatiran",
    description:
      "Kekhawatiran sering kali menyertai saat-saat perubahan, namun hal tersebut tidak harus mendikte pengalaman kita. Daripada melihat perubahan hanya melalui kacamata kecemasan, kita bisa melakukannya",
    date: "30 Arp, 2023",
  },
];

export default function Artikel() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">ARTIKEL</h1>
      <div>
        {dummyData.map((data, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg underline hover:cursor-pointer font-semibold">
                {data.title}
              </CardTitle>
              <CardDescription>{data.description}</CardDescription>
              <p className="text-sm">{data.date}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex">
          <span className="mr-2">Page:</span>
          {dummyData.map((_, index) => (
            <span
              key={index}
              className="mx-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
