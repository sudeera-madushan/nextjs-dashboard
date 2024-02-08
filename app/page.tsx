import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {Header} from "@/app/ui/dashboard/header";
import Body from "@/app/ui/dashboard/body";

export default function Page() {
  return (<>
          <Header/>
          <Body/>
      </>
  );
}
