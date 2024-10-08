import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                <div className=''>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>
                            <a href="https://wa.me/966535981857" target="_blank" rel="noopener noreferrer">
                                +966535981857
                            </a>
                        </li>
                        <li>
                            <a href="mailto:Sabbagh289@outlook.com">
                                Sabbagh289@outlook.com
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    <p>&copy; Copyright Ahmad Sabbagh - All Rights Reserved.</p>
                </p>

            </div> */}

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    <span>&copy; Copyright Ahmad Sabbagh - All Rights Reserved.</span>
                </p>
            </div>

        </div>
    )
}

export default Footer