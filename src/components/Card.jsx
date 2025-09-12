import React from 'react'
import { motion } from 'framer-motion'


export default function Card({ item, children, onClick }) {
    return (
        <motion.article 
            whileHover={{ y: -8, scale: 1.02 }} 
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden cursor-pointer group transition-all duration-300" 
            onClick={onClick}
        >
            {item?.img && (
                <div className="relative overflow-hidden">
                    <img 
                        src={item.img} 
                        alt={item.name || item.title} 
                        className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}
            <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-200">
                    {item.name || item.title}
                </h3>
                {item.short && <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.short}</p>}
                {item.price && (
                    <div className="mt-3 text-primary font-semibold text-lg">
                        {item.price}
                    </div>
                )}
                {children}
            </div>
        </motion.article>
    )
}