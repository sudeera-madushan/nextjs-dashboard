/**
 * author : Sudeera Madushan
 * date : 2/8/2024
 * project : nextjs-dashboard
 */
import {nunito} from "@/app/ui/fonts";
import Card from "@/app/ui/dashboard/card";
import {BsBagDashFill} from "react-icons/bs";
import {FaDollarSign} from "react-icons/fa";
import BasicLineChart from "@/app/ui/dashboard/basicLineChart";
import HomePieChart from "@/app/ui/dashboard/homePieChart";

export default function Body()  {
    return <>
        <section className={" mt-[21px]"}>
            <div className={"flex justify-between"}>
                <p className={`${nunito.className} text-gray-500 text-[28px] pt-[20px] pe-10 `}>
                    Dashboard
                </p>
                <button className={`bg-[#4e73df] mt-7 h-8 rounded text-[14px] font-semibold  px-3 text-gray-50 ${nunito.className}`}>Generate Report</button>
            </div>
                <div className={"grid grid-cols-4 gap-6 mt-[23px] max-[767px]:grid-cols-1 max-[1200px]:grid-cols-2"}>
                    <Card title={'Earnings (Monthly)'} amount={'$40000'} icon={<BsBagDashFill size={30}/>} bgColor={'bg-blue-500'} textColor={'text-blue-500'}/>
                    <Card title={'Earnings (Monthly)'} amount={'$40000'} icon={<FaDollarSign size={30}/>} bgColor={'bg-green-500'} textColor={'text-green-500'}/>
                    <Card title={'Earnings (Monthly)'} amount={'$40000'} icon={<FaDollarSign size={30}/>} bgColor={'bg-green-500'} textColor={'text-green-500'}/>
                    <Card title={'Earnings (Monthly)'} amount={'$40000'} icon={<FaDollarSign size={30}/>} bgColor={'bg-green-500'} textColor={'text-green-500'}/>
                </div>
            <div className={"flex"}>
                <BasicLineChart/>
                {/*<HomePieChart/>*/}
            </div>
        </section>
    </>
}
