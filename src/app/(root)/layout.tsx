'use client'

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header"
import { AdminMenus } from "@/data/Sidebar/sidebar";

interface Props {
  children: ReactNode;
}

const IndexLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar menus={AdminMenus} />
      </div>
      <div className="lg:ml-[250px] xl:ml-[250px] w-full">
        <Header />
        <main className="mt-[3rem] sm:mt-[4.6rem] lg:mt-[4.4rem] 3xl:mt-28 px-4 py-4 sm:py-4 3xl:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default IndexLayout;