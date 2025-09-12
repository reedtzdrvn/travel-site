import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-28 text-center">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="mt-4 text-lg">Страница не найдена.</p>
            <Link to="/" className="mt-6 inline-block px-4 py-2 bg-primary text-white rounded-md">На главную</Link>
        </main>
    )
}