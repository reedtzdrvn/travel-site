import React from 'react'
import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80" alt="Russia travel" className="w-full h-full object-cover brightness-[.6]" />
            </div>
            <div className="relative max-w-6xl mx-auto px-4 py-28">
                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-white max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Откройте Россию: города, природа и маршруты</h1>
                    <p className="mt-4 text-lg">Путеводитель с вдохновением, демо-бронированиями и подсказками — всё, чтобы подготовиться к поездке.</p>
                    <div className="mt-6 flex gap-3">
                        <a href="#routes" className="px-4 py-2 rounded-md bg-accent text-white font-medium">Готовые маршруты</a>
                        <a href="#cities" className="px-4 py-2 rounded-md bg-white/20 text-white">Исследовать города</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}