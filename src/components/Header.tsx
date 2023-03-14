import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoIgnite from '../assets/logo-ignite.svg'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <img src={logoIgnite} alt="" />

      <nav className="flex gap-2">
        <NavLink
          to="/"
          title="Timer"
          className="w-12 h-12 flex justify-center items-center text-gray-100 border-solid border-t-[3px] border-b-[3px] border-transparent hover:border-b-green-500 transition-colors"
        >
          <Timer size={24} />
        </NavLink>

        <NavLink
          to="/history"
          title="Histórico"
          className="w-12 h-12 flex justify-center items-center text-gray-100 border-solid border-t-[3px] border-b-[3px] border-transparent hover:border-b-green-500 transition-colors"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </div>
  )
}
