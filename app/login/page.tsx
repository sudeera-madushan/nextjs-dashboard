import {Input} from "postcss";
import Form from "@/app/ui/invoices/create-form";
import {Button} from "@/app/ui/button";

/**
 * author : Sudeera Madushan
 * date : 2/7/2024
 * project : nextjs-dashboard
 */
export default function Login() {
    return <main className="flex min-h-screen flex-col p-16 bg-blue-600">
        <section className={"bg-white rounded mx-40 flex"}>
            <img src="https://source.unsplash.com/K4mSJ7kc0As/600x800" alt="" className={"h-[600px] rounded-l"}/>
            <div>
                <h1 className={"text-center w-[34vw] text-2xl text-gray-600 mt-12  mb-5"}>Welcome Back!</h1>
                <input type="text" placeholder={"Enter Email Address..."}
                       className={"outline-none rounded-3xl text-[12px] h-[52px] w-[348px] hover:outline-2 mx-[60px]"}
                />
                <input type="text" placeholder={"Password"}
                       className={"outline-none rounded-3xl text-[12px] h-[52px] w-[348px] hover:outline-2 mx-[60px] mt-4"}
                />
                <div className={"mt-[13px]"}>
                <input type={"checkbox"} className={"rounded-md focus:outline-none ms-[60px] "}/><span className={"ms-2 text-[12px]"}>Remember Me</span>
                </div>
                <button className={"bg-blue-700 text-white px-[157px] text-[12px] py-[13px] rounded-3xl mx-[60px] mt-4"}>Login</button>
                <hr className={"text-gray-400 my-[18px] w-[348px] mx-[60px]"}/>
                <button className={"bg-blue-700 text-white px-[157px] text-[12px] py-[13px] rounded-3xl mx-[60px]"}>Login</button>
                <button className={"bg-blue-700 text-white px-[157px] text-[12px] py-[13px] rounded-3xl mx-[60px] mt-[10px]"}>Login</button>
                <hr className={"text-gray-400 my-[18px] w-[348px] mx-[60px]"}/>

            </div>
        </section>
    </main>;
}
