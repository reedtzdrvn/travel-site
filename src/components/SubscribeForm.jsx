import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function SubscribeForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [ok, setOk] = useState(null)


    const onSubmit = data => {
        const subs = JSON.parse(localStorage.getItem('subscriptions') || '[]')
        subs.push({ ...data, date: new Date().toISOString() })
        localStorage.setItem('subscriptions', JSON.stringify(subs))
        setOk('Спасибо! Вы успешно подписаны на рассылку.')
        reset()
        setTimeout(() => setOk(null), 4000)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <h4 className="font-semibold text-lg mb-2">Подпишитесь на рассылку</h4>
                <p className="text-sm text-gray-600">Получайте лучшие предложения и советы для путешествий по России</p>
            </div>
            <div className="space-y-3">
                <input 
                    {...register('email', { 
                        required: 'Email обязателен', 
                        pattern: { 
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, 
                            message: 'Неверный email' 
                        } 
                    })} 
                    placeholder="Ваш email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                />
                <button 
                    type="submit" 
                    className="w-full cursor-pointer px-4 py-3 bg-gradient-to-r from-emerald-700 to-cyan-500 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-400 transition-all duration-200 transform hover:scale-105"
                >
                    Подписаться на рассылку
                </button>
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            {ok && <p className="text-green-600 text-sm font-medium">{ok}</p>}
        </form>
    )
}