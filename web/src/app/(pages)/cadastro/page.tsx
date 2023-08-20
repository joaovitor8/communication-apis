import { CadastroUsers } from '@/components/pagCadastro/Formulario'
import { MostrarUsers } from '@/components/pagCadastro/MostrarUsers'

export default function Cadastro() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <CadastroUsers />

      <MostrarUsers />
    </div>
  )
}
