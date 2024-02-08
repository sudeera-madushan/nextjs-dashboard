import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-[#4e73df]">
      <Link
        className="mb-2 flex items-end justify-start rounded-md p-5"
        href="/"
      >
        <div className="w-32 text-white md:w-40 font-bold">
           SB Admin<span>2</span>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between md:flex-col">
          <hr className={"border-gray-400 w-5/6 text-center ms-4"}/>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
