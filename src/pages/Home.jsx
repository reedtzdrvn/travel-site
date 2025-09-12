import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import SubscribeForm from '../components/SubscribeForm'
import { cities, routes } from '../data'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <main>
            <Hero />
            <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <section className="lg:col-span-2 space-y-12">
                    <div className="animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Популярные города</h2>
                        <p className="text-gray-600 mb-8">Откройте для себя самые красивые и интересные города России</p>
                        <div id="cities" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {cities.map(c => (
                                <Card key={c.id} item={c}>
                                    <div className="mt-4 flex items-center justify-between">
                                        <Link 
                                            to={`/cities/${c.id}`} 
                                            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                                        >
                                            Подробнее →
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                    
                    <div className="animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Готовые маршруты</h2>
                        <p className="text-gray-600 mb-8">Забронируйте готовый тур и отправляйтесь в незабываемое путешествие</p>
                        <div id="routes" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {routes.map(r => (
                                <Card key={r.id} item={r}>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="text-sm text-gray-600 font-medium">{r.length}</div>
                                        <Link 
                                            to={`/routes`} 
                                            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                                        >
                                            Забронировать
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="space-y-8">
                    <div className="glass p-6 rounded-2xl shadow-lg">
                        <SubscribeForm />
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <h4 className="font-bold text-xl mb-3 text-gray-900">Бронирование туров</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Выберите маршрут и забронируйте свой идеальный тур по России. 
                            Мы поможем организовать незабываемое путешествие.
                        </p>
                        <Link 
                            to="/routes" 
                            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200 group"
                        >
                            Перейти к бронированию
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </aside>
            </div>
        </main>
    )
}