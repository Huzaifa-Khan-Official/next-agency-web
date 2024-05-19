"use client"
import Image from 'next/image';
import firstWebsite from '../../assets/projects/firstWebsite.jpeg'
import secondWebsite from '../../assets/projects/secondWebsite.jpeg'
import thirdWebsite from '../../assets/projects/thirdWebsite.jpeg'
import fourthWebsite from '../../assets/projects/fourthWebsite.jpeg'
import { motion } from 'framer-motion';
export default function Projects() {
    const variants = {
        initial: { opacity: 0, translateY: "-50%" },
        animate: { opacity: 1, translateY: "-100%" },
    }
    return (
        <div className='grid xs:grid-cols-2 gap-4 p-3'>
            <motion.div
                whileHover="animate"
                initial="initial"
                animate="initial"
                transition={{ duration: 1 }}
                className='relative'
            >
                <Image
                    src={firstWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute bg-[#000000b0] p-2 w-full"
                    variants={variants}
                >
                    <h1>Project 1</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                whileHover="animate"
                initial="initial"
                animate="initial"
                transition={{ duration: 1 }}
                className='relative'
            >
                <Image
                    src={secondWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute bg-[#000000b0] p-2 w-full"
                    variants={variants}
                >
                    <h1>Project 2</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                whileHover="animate"
                initial="initial"
                animate="initial"
                transition={{ duration: 1 }}
                className='relative'
            >
                <Image
                    src={thirdWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute bg-[#000000b0] p-2 w-full"
                    variants={variants}
                >
                    <h1>Project 3</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                whileHover="animate"
                initial="initial"
                animate="initial"
                transition={{ duration: 1 }}
                className='relative'
            >
                <Image
                    src={fourthWebsite}
                    className='fill w-full h-[250px] sm:h-[300px]'
                />
                <motion.div
                    className="cardBody absolute bg-[#000000b0] p-2 w-full"
                    variants={variants}
                >
                    <h1>Project 4</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}