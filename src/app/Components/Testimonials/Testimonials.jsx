"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
    return (
        <div class="container my-24 mx-auto md:px-6">
            <section class="mb-32 text-center">
                <motion.h2
                    class="mb-12 text-3xl font-bold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >Testimonials</motion.h2>

                <div class="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
                    <div class="mb-6 lg:mb-0">
                        <motion.div
                            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                            initial={{ opacity: 0, translateY: "50px" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg" class="w-full rounded-t-lg" />
                                <a href="#!">
                                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                                </a>
                                <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1440 320">
                                    <path fill="currentColor"
                                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="p-6 text-black">
                                <h5 class="mb-2 text-lg font-bold">Halley Frank</h5>
                                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                                    Marketing Specialist
                                </h6>
                                <ul class="mb-6 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                </ul>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium accusamus voluptatum deleniti atque
                                    corrupti.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div class="mb-6 lg:mb-0">
                        <motion.div
                            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                            initial={{ opacity: 0, translateY: "50px" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" class="w-full rounded-t-lg" />
                                <a href="#!">
                                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                                </a>
                                <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1440 320">
                                    <path fill="currentColor"
                                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="p-6 text-black">
                                <h5 class="mb-2 text-lg font-bold">John Doe</h5>
                                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                                    Web Developer
                                </h6>
                                <ul class="mb-6 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                </ul>
                                <p>
                                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                    placerat vulputate. Ut vulputate est non quam dignissim
                                    elementum. Donec a ullamcorper diam.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div class="">
                        <motion.div
                            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                            initial={{ opacity: 0, translateY: "50px" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg" class="w-full rounded-t-lg" />
                                <a href="#!">
                                    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                                </a>
                                <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1440 320">
                                    <path fill="currentColor"
                                        d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="p-6 text-black">
                                <h5 class="mb-2 text-lg font-bold">Lisa Trey</h5>
                                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                                    Public Relations
                                </h6>
                                <ul class="mb-6 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                                        </svg>
                                    </li>
                                </ul>
                                <p>
                                    Enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid commodi quis
                                    nostrum minima.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}