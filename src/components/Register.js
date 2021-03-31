import React from 'react'

function Register() {
    return (
        <div className="bg-gray-200 flex items-start p-10 h-screen w-screen overflow-hidden ">
            <section className="bg-white max-w-sm rounded-lg shadow-md py-8 px-5">
                <h1 className="text-2xl font-bold w-screen">Register</h1>
                <p className="text-gray-400">
                </p>
                <div className="mt-4">
                    <label className="block text-grey-darker text-sm  mb-1" for="username">
                        Email Address
          </label>
                    <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
                        id="username"
                        type="text"
                        placeholder="you@example.com" />
                </div>
                <div className="mt-4">
                    <label className="block text-grey-darker text-sm  mb-1 flex justify-between" for="username">
                        Password
                        <a className="text-indigo-700 underline ml-1">Password?</a>
                    </label>
                    <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
                        id="username"
                        type="password"
                        placeholder="Enter 6 character or more" />
                </div>

                <div className="mt-4">
                    <label className="block text-grey-darker text-sm  mb-1 flex justify-between" for="username">
                        Confirm Password
                        <a className="text-indigo-700 underline ml-1">Confirm Password?</a>
                    </label>
                    <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
                        id="username"
                        type="password"
                        placeholder="Confirm Password" />
                </div>

                <div className="mt-4 text-gray-500">
                    <input type="checkbox" />
                    <label className="ml-2">Remember me</label>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 border border-blue-700 rounded">
                    Register
                </button>
                <div className="h-px bg-gray-200 mt-8 relative">
                    <span className="absolute absolute-x absolute-y bg-white px-3 -mt-px text-sm text-gray-400">or login with</span>
                </div>
                <div className="flex space-x-3 mt-5">
                    <button className="flex items-center px-4 py-2  rounded  font-bold w-full text-red-600  border border-red-600">
                        <img className="w-5 mr-4" src="./assets/images/google-icon.png" />
          Google
        </button>
                    <button className="flex items-center px-4 py-2  rounded  font-bold w-full text-blue-600  border border-blue-600">
                        <img className="w-7 mr-2" src="./assets/images/facebook-icon1.png" />
          Facebook
        </button>
                </div>
            </section>
            <section className="">
                <img className="max-w-lg ml-20 pt-20" src="./assets/images/undraw_maintenance_cn7j.svg" />
            </section>
        </div>
    )
}

export default Register
