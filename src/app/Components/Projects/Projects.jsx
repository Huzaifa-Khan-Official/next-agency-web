"use client"
import Image from 'next/image';
import firstWebsite from '../../assets/projects/firstWebsite.jpeg'
import { motion } from 'framer-motion';
export default function Projects() {
    return (
        <div className='grid xs:grid-cols-2 gap-4 p-3'>
            <motion.div className='relative group'>
                <Image
                    src={firstWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute "
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileHover={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Hello</h1>
                </motion.div>
            </motion.div>
            <motion.div className='relative group'>
                <Image
                    src={firstWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute "
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileHover={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Hello</h1>
                </motion.div>
            </motion.div>
            <motion.div className='relative group'>
                <Image
                    src={firstWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute "
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileHover={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Hello</h1>
                </motion.div>
            </motion.div>
            <motion.div className='relative group'>
                <Image
                    src={firstWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute "
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileHover={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Hello</h1>
                </motion.div>
            </motion.div>
        </div>
    )
}