import { UsuariosAleatorios } from '@/components/pagHome/UsuariosAleatorios'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-5 bg-slate-200 py-5">
      <UsuariosAleatorios />
    </div>
  )
}
