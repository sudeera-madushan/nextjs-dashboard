/**
 * author : Sudeera Madushan
 * date : 2/8/2024
 * project : nextjs-dashboard
 */
import React, {ReactNode} from 'react';

interface Props {
    title: string,
    amount: string,
    icon: ReactNode;
    bgColor: string,
    textColor: string
}

function Card({title, amount, icon, bgColor, textColor}: Props) {
    return (
        <div className={` h-24 border-2 rounded-md flex flex-row bg-white`}>
            <div className={`h-full w-2 bg-green-500 rounded-l-md ${bgColor}`}></div>
            <div className={`flex justify-between items-center px-4 w-full ${textColor}`}>
                <div className='flex flex-col justify-center w-full'>
                    <p className={textColor}>{title}</p>
                    <p>{amount}</p>
                </div>
                {icon && <div className='text-slate-300'>{icon}</div>}
            </div>
        </div>
    );
}

export default Card;
0
