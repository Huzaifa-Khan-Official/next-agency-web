"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function HomeComponent() {
    return (
        <div className='h-[90vh] px-4 flex justify-center items-center flex-col'>
            <motion.h1
                className='text-5xl sm:text-7xl'
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >Web Agency</motion.h1>

            <motion.p
                className='text-1xl w-full sm:w-[70%] mt-3'
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci tempora eligendi voluptas, iure laborum et odit rerum id in illum dolore sed pariatur debitis quis quisquam deleniti consequuntur beatae molestias.
            </motion.p>


        </div>
    )
}