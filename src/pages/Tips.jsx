import React from 'react'
import { tips } from '../data'


export default function Tips() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold">Полезные советы путешественнику</h1>
            <div className="mt-6 space-y-4">
                {tips.map(t => (
                    <article key={t.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold">{t.title}</h3>
                        <p className="text-gray-600 mt-2">{t.body}</p>
                    </article>
                ))}
            </div>
        </main>
    )
}