import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-700 to-cyan-500 flex items-center justify-center text-white font-bold">TR</div>
                        <div className="text-lg font-semibold">Путешествия по России</div>
                    </Link>


                    <nav className="hidden md:flex gap-6 items-center ">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'hover:text-primary'}>Главная</NavLink>
                        <NavLink to="/cities" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'hover:text-primary'}>Города</NavLink>
                        <NavLink to="/nature" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'hover:text-primary'}>Природа</NavLink>
                        <NavLink to="/routes" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'hover:text-primary'}>Маршруты</NavLink>
                        <NavLink to="/tips" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'hover:text-primary'}>Советы</NavLink>
                    </nav>


                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/" className="px-3 py-2 rounded-md bg-primary text-white text-sm">Подписаться</Link>
                    </div>


                    <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Меню">
                        {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                    </button>
                </div>
            </div>


            {open && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 flex flex-col gap-3">
                        <NavLink to="/" onClick={() => setOpen(false)}>Главная</NavLink>
                        <NavLink to="/cities" onClick={() => setOpen(false)}>Города</NavLink>
                        <NavLink to="/nature" onClick={() => setOpen(false)}>Природа</NavLink>
                        <NavLink to="/routes" onClick={() => setOpen(false)}>Маршруты</NavLink>
                        <NavLink to="/tips" onClick={() => setOpen(false)}>Советы</NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}