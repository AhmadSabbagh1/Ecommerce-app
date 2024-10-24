import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [paswword, setPaswword] = useState('')



    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            console.log(email, paswword)
        } catch (error) {

        }
    }
    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center w-full'>

            <div className='bg-white shadow-sm rounded-lg px-8 py-6 max-w-md'>

                <h1 className='text-2xl font-bold mb-4 '>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Adderss</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' placeholder='your@email.com' required />
                    </div>

                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e) => setPaswword(e.target.value)} value={paswword} type="password" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' placeholder='Enter your password' required />
                    </div>
                    <button type='submit' className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'>Login</button>
                </form>

            </div>

        </div>
    )
}

export default Login