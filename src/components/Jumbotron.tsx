import { Button } from "@/components/ui/button";

export default function Jumbotron({ scrollToContent, scrollToContact }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-8xl lg:text-9xl font-extrabold font-custom py-12">
          JIVA
        </h1>
        <p className="text-xl lg:text-2xl text-gray-800 font-bold">
          Eksplorasi mendalam tentang kecemasan: definisi, jenis, gejala, dan
          cara mengelolanya. Temukan teknik pernapasan, meditasi, olahraga, dan
          strategi relaksasi di JIVA. Sumber terpercaya untuk referensi yang
          dapat diandalkan.
        </p>
      </div>
      <div className="py-12 flex flex-col justify-center gap-4 items-center border-b-2">
        <Button onClick={scrollToContent} className="px-10 py-6 text-xl">
          Kenapa JIVA ?
        </Button>
        <div className="flex justify-between gap-2">
          <Button onClick={scrollToContact} variant="outline">
            Hubungi Kami
          </Button>
          <a href="/mood">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-white"
            >
              Tes Kecemasanmu Hari ini ?
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
