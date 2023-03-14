import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-w-6xl h-[calc(100vh-10rem)] mx-auto my-20 p-10 bg-gray-800 rounded-lg flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}
