import { Pagination } from '@/components/randomUsers/Pagination'

export default function Home() {
  return (
    <div className="flex h-[1500px] flex-col items-center space-y-5 bg-slate-200 py-5">
      <Pagination />
    </div>
  )
}
