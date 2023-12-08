// shadcn
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="text-xl">
      <div className="text-center">
        <h1 className="text-8xl lg:text-9xl font-extrabold font-custom py-12">
          JIVA
        </h1>
        <h2 className="text-xl lg:text-2xl text-slate-700">
          Eksplorasi mendalam tentang kecemasan: definisi, jenis, gejala, dan
          cara mengelolanya. Temukan teknik pernapasan, meditasi, olahraga, dan
          strategi relaksasi di JIVA. Sumber terpercaya untuk referensi yang
          dapat diandalkan.
        </h2>
      </div>
      <div className="py-12 flex flex-col justify-center gap-4 items-center">
        <Button className="px-10 py-6 text-xl">Kenapa JIVA ?</Button>
        <div className="flex justify-between gap-2">
          <Button variant="outline">Hubungi Kami</Button>
          <Button variant="outline">What's your mood today ?</Button>
        </div>
      </div>
    </div>
  );
}
