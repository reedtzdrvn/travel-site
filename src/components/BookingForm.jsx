import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function BookingForm({ defaultRoute }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { route: defaultRoute || '' } })
    const [result, setResult] = useState(null)


    const onSubmit = data => {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        bookings.push({ ...data, id: Date.now(), dateCreated: new Date().toISOString() })
        localStorage.setItem('bookings', JSON.stringify(bookings))
        setResult({ ok: true, message: 'Бронирование отправлено. Мы свяжемся с вами.' })
        reset()
        setTimeout(() => setResult(null), 5000)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-lg shadow-sm max-w-lg">
            <h4 className="font-semibold">Демо: забронировать экскурсию</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <input {...register('name', { required: 'Введите имя' })} placeholder="Имя" className="px-3 py-2 border rounded-md" />
                <input {...register('email', { required: 'Email обязателен' })} placeholder="Email" className="px-3 py-2 border rounded-md" />
                <input {...register('phone')} placeholder="Телефон (необязательно)" className="px-3 py-2 border rounded-md" />
                <input type="date" {...register('date', { required: 'Выберите дату' })} className="px-3 py-2 border rounded-md" />
                <select {...register('route', { required: 'Выберите маршрут' })} className="px-3 py-2 border rounded-md col-span-1 sm:col-span-2">
                    <option value="">Выберите маршрут</option>
                    <option value="golden-ring">Золотое кольцо — 5 дней</option>
                    <option value="baikal-route">Байкал — 4 дня</option>
                </select>
                <textarea {...register('notes')} rows={3} placeholder="Комментарий" className="px-3 py-2 border rounded-md col-span-1 sm:col-span-2" />
            </div>
            <div className="mt-3 flex items-center gap-3">
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-emerald-700 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer">Отправить</button>
                {result && <div className={`text-sm ${result.ok ? 'text-green-600' : 'text-red-600'}`}>{result.message}</div>}
            </div>
        </form>
    )
}