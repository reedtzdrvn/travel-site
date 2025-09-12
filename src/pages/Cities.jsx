import React from 'react'
import { cities } from '../data'
import Card from '../components/Card'


export default function Cities() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold">Города России</h1>
            <p className="mt-2 text-gray-600">Короткие описания и фото.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map(c => <Card key={c.id} item={c}><div className="mt-3 text-sm text-gray-600">Регион: {c.region}</div></Card>)}
            </div>
        </main>
    )
}