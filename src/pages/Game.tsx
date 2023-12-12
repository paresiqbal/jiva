import { Input } from "@/components/ui/input";

export default function Game() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">TES KECEMASANMU</h1>
      <div>
        <Input type="text" placeholder="Nama Kamu" />
      </div>
    </div>
  );
}
