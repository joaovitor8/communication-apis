import { CadastroUsers } from "@/components/CadastroUsers"
import { CardUsers } from "@/components/CardUsers"

export default function Cadastro() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <CadastroUsers />

      <div className="h-96 w-full bg-slate-600">
        <CardUsers />
      </div>
    </div>
  )
}
