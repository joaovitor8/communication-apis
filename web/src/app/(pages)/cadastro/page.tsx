import { CadastroUsers } from '@/components/newUsers/CadastroUsers'

export default function Cadastro() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <CadastroUsers />

      <div className="h-screen w-full bg-slate-200"></div>
    </div>
  )
}
