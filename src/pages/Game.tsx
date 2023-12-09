// shadcn
import { Button } from "@/components/ui/button";

export default function Game() {
  return (
    <div>
      <h1 class="text-3xl font-bold mb-4">TES KECEMASANMU HARI INI</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos
        suscipit facilis ipsum, officia ea. Minima dolorem labore laboriosam
        similique.
      </p>
      <h2 className="font-bold text-xl py-8">Bagaimana perasaamu hari ini ?</h2>
      <div className="flex justify-evenly p-2 border-2 border-gray-500 rounded-md">
        <Button variant="outline" className="h-16 w-20">
          😥
        </Button>
        <Button variant="outline" className="h-16 w-20">
          😓
        </Button>
        <Button variant="outline" className="h-16 w-20">
          😊
        </Button>
        <Button variant="outline" className="h-16 w-20">
          🤣
        </Button>
      </div>
    </div>
  );
}
