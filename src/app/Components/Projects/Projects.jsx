"use client"
import Image from 'next/image';
import firstWebsite from '../../assets/projects/firstWebsite.png'
import secondWebsite from '../../assets/projects/secondWebsite.png'
import thirdWebsite from '../../assets/projects/thirdWebsite.png'
import fourthWebsite from '../../assets/projects/fourthWebsite.png'
import { motion } from 'framer-motion';
export default function Projects() {
    const variants = {
        initial: { opacity: 0, translateY: "-50%" },
        animate: { opacity: 1, translateY: "-100%" },
    }
    return (
        <div className='my-12 py-20 pb-10 border-t-3'>
            <motion.div
                className="mx-auto mb-5 max-w-[510px] text-center lg:mb-20"
                initial={{ opacity: 0, translateY: 0 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 class="mb-4 text-3xl font-bold">Our Projects</h2>
            </motion.div>
            <div className='grid xs:grid-cols-2 gap-4 p-3'>
                <motion.div
                    whileHover="animate"
                    initial="initial"
                    animate="initial"
                    transition={{ duration: 1 }}
                    className='relative'
                >
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={firstWebsite}
                            className='fill w-full h-[250px] sm:h-[300px]'
                        />
                        <motion.div
                            className="cardBody absolute bg-[#000000b0] p-2 w-full"
                            variants={variants}
                        >
                            <h4 className='text-2xl font-semibold'>Project 1</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover="animate"
                    initial="initial"
                    animate="initial"
                    transition={{ duration: 1 }}
                    className='relative'
                >
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >

                        <Image
                            src={secondWebsite}
                            className='fill w-full h-[250px] sm:h-[300px]'
                        />
                        <motion.div
                            className="cardBody absolute bg-[#000000b0] p-2 w-full"
                            variants={variants}
                        >
                            <h4 className='text-2xl font-semibold'>Project 2</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover="animate"
                    initial="initial"
                    animate="initial"
                    transition={{ duration: 1 }}
                    className='relative'
                >
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >

                        <Image
                            src={thirdWebsite}
                            className='fill w-full h-[250px] sm:h-[300px]'
                        />
                        <motion.div
                            className="cardBody absolute bg-[#000000b0] p-2 w-full"
                            variants={variants}
                        >
                            <h4 className='text-2xl font-semibold'>Project 3</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover="animate"
                    initial="initial"
                    animate="initial"
                    transition={{ duration: 1 }}
                    className='relative'
                >
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >

                        <Image
                            src={fourthWebsite}
                            className='fill w-full h-[250px] sm:h-[300px]'
                        />
                        <motion.div
                            className="cardBody absolute bg-[#000000b0] p-2 w-full"
                            variants={variants}
                        >
                            <h4 className='text-2xl font-semibold'>Project 4</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus!
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>

    )
}