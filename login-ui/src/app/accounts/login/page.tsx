"use client"
import { useForm } from "react-hook-form";
import Link from "next/link";


const Page = () => {
    return (
        <div className="relative w-screen h-screen flex items-center justify-center">
            <span className="absolute left-16 top-36 bg-gradient-to-bl from-teal-200 via-teal-500 to-teal-950 shadow-lg w-28 h-28 rounded-full"></span>

            <div className="z-20 w-64 h-96 bg-transparent border-b-2 border-r-2 border-teal-950/50 backdrop-blur-lg isolate rounded-3xl flex flex-col items-center p-4">
                <h1 className="text-teal-600 text-lg font-mono">Sign in</h1>
                <form className="flex flex-col gap-7 pt-6">
                    <div className="flex flex-col gap-1">
                        <label className="font-mono text-teal-600">Email</label>
                        <input className="h-7 p-2 rounded-md bg-transparent border border-teal-600 outline-none" placeholder="user@example.com" type="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-mono text-teal-600">Password</label>
                        <input className="h-7 p-2 rounded-md bg-transparent border border-teal-600 outline-none" type="password" placeholder="********" />
                    </div>

                    <button type="submit" className="bg-gradient-to-l from-teal-500 via-teal-700 to-teal-950 rounded-md p-1">Sign in</button>
                    <div className="flex flex-col items-center">
                        <p className="text-xs">Dont have an account?</p>
                        <Link className="underline underline-offset-4 decoration-teal-600 font-mono text-teal-600" href="#">Create account</Link>
                    </div>
                </form>
            </div>

        </div>
    )
};

export default Page;
