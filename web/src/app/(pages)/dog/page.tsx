export default function Dog() {
  return (
    <div className="flex h-screen flex-col items-center space-y-3">
      <div className="flex h-24 w-4/5 items-center justify-center space-x-3 bg-slate-400">
        <button className="rounded-sm bg-green-500 px-10 py-3 uppercase">Buscar</button>
      </div>
      <div className="h-80 w-4/5 bg-sky-400 "></div>
    </div>
  )
}
