import Search from "@/app/ui/search";
import {HomeIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {nunito} from "@/app/ui/fonts";

/**
 * author : Sudeera Madushan
 * date : 2/7/2024
 * project : nextjs-dashboard
 */
export const Header = () => {
    return <section className={"flex justify-between shadow-md w-5/6 h-[70px]    fixed top-0 left-[224px]"}>

        <div className={"p-4 pl-8"}>
            <Search placeholder={"Search for..."}/>
        </div>
        <div className={"p-5 flex gap-5"}>
            <Image src={"/favicon.ico"} alt={""} width={25} height={19}/>
            <Image src={"/favicon.ico"} alt={""} width={25} height={19}/>
            <hr className={"w-8 border-gray-400 rotate-90 h-0 m-0 gap-0 mt-4"}/>
            <div className={"flex"}>
                <p className={`${nunito.className} text-sm text-gray-400 mt-2 mr-2`}>Douglas McGee</p>
                <Image width={25} height={19} alt={""} src={"https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"}/>
            </div>
        </div>
    </section>
}
