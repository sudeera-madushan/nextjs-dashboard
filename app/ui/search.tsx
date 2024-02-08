'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative flex flex-1 ">
      <input
        className="peer w-[365px] block border-0 rounded-l-md bg-gray-50 border-gray-200 py-[7px] pl-3 text-[12px]  outline-2 text-gray-500 placeholder:text-gray-500"
        placeholder={placeholder}
      />
        <div className={"bg-[#4e73df] rounded-r-md"}>
      <MagnifyingGlassIcon className="h-[18px] w-[18px] mx-3 text-2xl -translate-y-1/2 text-gray-100 peer-focus:text-gray-900 font-bold mt-5" />
        </div>
    </div>
  );
}
