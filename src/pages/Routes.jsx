import React from 'react'
import { routes } from '../data'
import Card from '../components/Card'
import BookingForm from '../components/BookingForm'


export default function Routes() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="lg:col-span-2">
                <h1 className="text-3xl font-semibold">Готовые маршруты</h1>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {routes.map(r => (
                        <Card key={r.id} item={r}>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="text-sm text-gray-600">{r.priceDemo}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>


            <aside id="book">
                <BookingForm />
            </aside>
        </main>
    )
}