import React from 'react'
import { nature } from '../data'
import Card from '../components/Card'


export default function Nature() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold">Природные достопримечательности</h1>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {nature.map(n => <Card key={n.id} item={n}><div className="mt-3 text-sm text-gray-600">Изучите регион и подготовьтесь к походу.</div></Card>)}
            </div>
        </main>
    )
}