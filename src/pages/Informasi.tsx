import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Informasi() {
  return (
    <div className="flex flex-col gap-8">
      <h1 class="text-3xl font-bold">LAYANAN INFORMASI</h1>
      <section>
        <p>
          <span className="font-bold">Kecemasan</span> adalah perasaan
          ketakutan, kekhawatiran, atau gugup yang sering muncul sebagai reaksi
          terhadap stres atau ketidakpastian. Walaupun merupakan respons alami
          terhadap situasi tertentu, kecemasan yang berlebihan atau
          berkelanjutan bisa menjadi tanda gangguan kecemasan. Berikut adalah
          beberapa aspek penting tentang kecemasan:
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Respons Fisiologis</AccordionTrigger>
            <AccordionContent>
              Kecemasan memicu reaksi "lawan atau lari" dalam tubuh, menyebabkan
              peningkatan detak jantung, pernapasan yang cepat, dan peningkatan
              aliran darah ke otot-otot.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Gangguan Kecemasan:</AccordionTrigger>
            <AccordionContent>
              Ini termasuk gangguan kecemasan umum, gangguan panik, fobia
              spesifik, gangguan kecemasan sosial, dan gangguan stres
              pasca-trauma. Setiap jenis memiliki gejala dan pemicu yang
              berbeda.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Gejala Umum:</AccordionTrigger>
            <AccordionContent>
              Termasuk kekhawatiran berlebihan, sulit konsentrasi, iritabilitas,
              otot tegang, gangguan tidur, dan kelelahan. Gejala fisik juga bisa
              termasuk mual, diare, atau berkeringat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Penyebab:</AccordionTrigger>
            <AccordionContent>
              Kecemasan bisa disebabkan oleh berbagai faktor, termasuk genetika,
              kimia otak, lingkungan, dan pengalaman hidup.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Pengobatan:</AccordionTrigger>
            <AccordionContent>
              Terapi, seperti terapi perilaku kognitif (CBT), dan kadang-kadang
              obat-obatan, digunakan untuk mengelola kecemasan. Praktik
              relaksasi seperti meditasi, yoga, dan olahraga teratur juga dapat
              membantu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Pentingnya Bantuan Profesional:</AccordionTrigger>
            <AccordionContent>
              Mendapatkan bantuan dari profesional kesehatan mental sangat
              penting dalam mengelola kecemasan, terutama jika itu berdampak
              signifikan pada kehidupan sehari-hari seseorang.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <p>
          <span className="font-bold">Mengenali dan mengatasi kecemasan</span>{" "}
          adalah langkah penting dalam menjaga kesehatan mental dan kualitas
          hidup. Pendekatan eksistensial (Corey, 1996:178) melihat ada dua jenis
          kecemasan, yaitu kecemasan biasa (normal anxiety) dan kecemasan
          neurotik (neurotic anxiety).
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Kecemasan Biasa</AccordionTrigger>
            <AccordionContent>
              Normal anxiety merupakan tanggapan yang cukup wajar terhadap
              peristiwa yang sedang dihadapi, kecemasan ini tidak perlu
              dihilangkan sebab ini sebagai motivasi ke arah perubahan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Kecemasan Neurotik</AccordionTrigger>
            <AccordionContent>
              Neurotic anxiety adalah kecemasan yang keluar dari proporsi yang
              ada, ia terjadi di luar kesadaran dan cenderung untuk menjadikan
              orang tidak memiliki keseimbangan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <p>
          Sigmund Freud (dalam Corey, 1996: 95) mengemukakan, bahwa kecemasan
          adalah keadaan tegang yang memaksa untuk berbuat sesuatu. Ada tiga
          jenis kecemasan, yaitu; kecemasan realita (rality anxiety), kecemasan
          neurotik (neurotic anxiety), dan kecemasan moral (moral anxiety).
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Kecemasan Realita</AccordionTrigger>
            <AccordionContent>
              Rality anxiety, adalah rasa takut akan bahaya yang datang dari
              dunia luar, dan derajat kecemasan semacam itu sesuai dengan
              tingkat ancaman yang nyata.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Kecemasan Neurotik</AccordionTrigger>
            <AccordionContent>
              Neurotic anxiety, adalah rasa takut kalau-kalau insting akan
              keluar jalur dan menyebabkan seseorang berbuat sesuatu yang akan
              menyebabkan ia dihukum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Kecemasan Moral</AccordionTrigger>
            <AccordionContent>
              Moral anxiety, adalah rasa takut terhadap hati nuraninya sendiri.
              Orang dengan hati nuraninya yang cukup berkembang cenderung untuk
              merasa bersalah apabila mereka berbuat sesuatu yang bertentangan
              dengan kode moral mereka atau dengan introyeksi ibu bapa mereka.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
