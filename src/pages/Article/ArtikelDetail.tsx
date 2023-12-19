// Rdd
import { useParams, Link } from "react-router-dom";

// shadcn
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const dummyData = [
  {
    id: 1,
    title: "KECEMASAN DAN METODE PENGENDALIANNYA",
    description:
      "Kecemasan (anxiety) merupakan bagian dari kondisi hidup, artinya kecemasan ada pada setiap orang. Kecemasan merupakan sumber memotivasi untuk berbuat kearah kemajuan dan kesuksesan hidup, apabila kecemasan itu dalam kondisi normal (normal anxiety),tetapi kecemasan yang tinggi melebihi batas normal (neurotic anxiety) ia akan megganggu kesetabilan diri dan keseimbangan hidup. Oleh sebab itu ia perlu dikendalikan dengan metode pengendalian kecemasan. Banyak prusedur dan metode pengendalian kecemasan yang dirancang oleh para ahli psikoterapi dan kaunseling, sehingga kita bisa menggunakan mana yang dikira lebih cocok dan mudah digunakan. Pribadi akan menjadi sehat apabila terbebas dari kecemasan neurotik.",
    author: "Abdul Hayat",
  },
  {
    id: 2,
    title: "Konsep Kecemasan (Anxiety) pada Lanjut Usia (Lansia)",
    description:
      "Lanjut usia merupakan tahap akhir perkembangan pada daur kehidupan manusia yang merupakan suatu proses alami yang tidak dapat dihindari oleh setiap individu. Perubahan-perubahan fisologis maupun psikososial, akan berpotensi pada masalah kesehatan baik fisik maupun psikologis. Salah satu masalah psikologis yang sering terjadi pada lanjut usia pada kondisi kehidupan sosial adalah kecemasan. Kecemasan diartikan suatu kondisi emosi yang menimbulkan ketidaknyamanan ditandai dengan perasan khawatir, kegelisahan dan ketakutan sehingga dapat mengganggu kehidupan. Naskah ini mencoba untuk kemaparkan konsep kecemasan dan aspek yang terkait dengan kecemasan yang dialami lansia secara umum dan panti jompo secara khusus.",
    author: "Dona Fitri Annisa & Ifdil",
  },
  {
    id: 3,
    title:
      "Teori Kecemasan Berdasarkan Psikoanalisis Klasik dan Berbagai Mekanisme Pertahanan terhadap Kecemasan",
    description:
      "Teori kecemasan oleh Freud pertama kali diungkapkan tahun 1890, berawal dari sebuah pemikiran bahwa kecemasan merupakan libido yang mengendap. Selanjutnya Freud setuju dengan koleganya Otto Rank bahwa asal mula kecemasan berawal dari trauma masa lahir. Kecemasan menurut Freud dibagi menjadi tiga yaitu kecemasan realitas, kecemasan neurosis, dan kecemasan moral. Freud membagi kecemasan neurosis menjadi tiga bagian yang berbeda yaitu kecemasan yang didapat karena adanya faktor dalam dan luar yang menakutkan, kecemasan yang terkait dengan objek tertentu yang bermanifestasi seperti fobia, kecemasan neurotik yang tidak berhubungan dengan faktor-faktor berbahaya dari dalam dan luar. Mekanisme pertahanan terhadap kecemasan ada beberapa yaitu Represi, Reaksi Formasi, Proyeksi, Regresi, Rasionalisasi, Pemindahan, Sublimasi, Isolasi, Undoing dan Intelektualisasi",
    author: "Andri, Yenny Dewi P",
  },
  {
    id: 4,
    title: "Edukasi Masyarakat Mengenai Gejala Cemas",
    description:
      "Dua tahun terakhir masyarakat dihadapi dengan permasalahan global yaitu pandemi, yang berhubungan dengan berbagai aspek kehidupan. Kehidupan sehari-hari dan pekerjaan terpengaruh oleh keadaan tersebut. Kesehatan mental terutama cemas, stress bahkan depresi dapat dirasakan oleh masyarakat. Tujuan edukasi diharapkan masyarakat mengenali gejalanya dan dapat menentukan kapan harus meminta pertolongan. Sasaran pengabdian ini adalah masyarakat di wilayah kerja Puskesmas Andalas. Kegiatan dimulai dari persiapan berupa menyiapkan bahan edukasi berupa leaflet, kemudian pelaksanaan kegiatan dimulai dari edukasi kepada responden, kemudian responden diberikan kuisioner dan dinilai pemahamannya. Jumlah responden sebanyak 82 orang. Hasil pemahaman responden pada pernyataan gejala psikologi terbanyak yaitu gelisah 63.4%, gejala fisik terbanyak berupa susah tidur sebanyak 47.6%, dan 19 orang (23.2) menyatakan kecemasan mempengaruhi pikiran, fisik dan perilaku. Dengan memberikan edukasi mengenai gejala cemas, diharapkan masyarakat menyadari dan dapat menentukan kapan harus meminta pertolongan dan manajemen diri agar fungsi dari kehidupan sehari-hari tidak terganggu.",
    author:
      "Resti Rahmadika Akbar, Mutiara Anissa, Insil Pendri Hariyani, Rhandyka Rafli",
  },
  {
    id: 5,
    title:
      "ANALISIS TINGKAT KECEMASAN (ANXIETY) DALAM MENGHADAPI PERTANDINGAN ATLET SEPAK BOLA KABUPATEN BANYUASIN PADA PORPROV 2017",
    description:
      "Kecemasan menjadi situasi yang tergambar sangat jelas saat menjelang pertandingan, kecemasan tentu menjadi alasan terhadap buruknya performa atlet dilapangan, situasi demikian terjadi pada atlet sepak bola Kabupaten Banyuaisn menjelang Porprov 2017 di Palembang. Tujuan penelitian adalah untuk mengetahui faktor apa saja yang menyebabkan munculnya kecemasan (Anxiety), berapa besar tingkat kecemasan (anxiety) atlet sebelum bertanding. Metode penelitian yang digunakan dalam penelitian ini adalah kualitatif dan kuantitatif. Sampel penelitian berjumlah 20 orang. Teknik pengumpulan data dilaksanakan dengan observasi, kuisioner dan dokumentasi. Teknik analisis data penelitian menggunakan deskripsi persentase. Berdasarkan analisa hasil yang telah di bahas maka penelitian ini memberikan kesimpulan bahwa kecemasan disebabkan oleh kompetitif anxiety, kognitif anxiety dan somatic anxiety. Sebesar 63% atlet mengalami kecemasan sebelum bertanding dan 37% siswa tidak mengalami kecemasan sebelum bertanding baik dari aspek kompetitif anxiety, kognitif anxiety dan somatic anxiety. ",
    author: "HENGKI KUMBARA, YOGI METRA, ZULPIKAR ILHAM",
  },
];

export default function ArtikelDetail() {
  const params = useParams() as { id: string };
  const { id } = params;

  const parsedId = parseInt(id, 10);
  const article = dummyData.find((item) => item.id === parsedId);

  if (!article) {
    return <div>Artikel Tidak Ditemukan</div>;
  }

  return (
    <div className="mx-auto py-12">
      <div className="px-6 bg-[#d1ded7] py-4 rounded-md">
        <div className="mb-4 ">
          <h2 className="text-3xl font-bold">{article.title}</h2>
          <p className="text-gray-500">{article.author}</p>
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
          <Button className="bg-[#689986] hover:bg-[#576b62]">
            &lt; Kembali ke Artikel
          </Button>
        </Link>
      </div>
    </div>
  );
}
