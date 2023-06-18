import { CadastroUsers } from '@/components/serverUsers/CadastroUsers'
import { MostrarUsers } from '@/components/serverUsers/MostrarUsers'

export default function Cadastro() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <CadastroUsers />

      <MostrarUsers />
    </div>
  )
}
