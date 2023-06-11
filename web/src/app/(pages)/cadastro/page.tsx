import { CadastroUsers } from '@/components/newUsers/CadastroUsers'
import { MostrarUsers } from '@/components/newUsers/MostrarUsers'

export default function Cadastro() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <CadastroUsers />

      <MostrarUsers />
    </div>
  )
}
