import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer(){
    return(
        <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[0.813rem]">
           <Link to="/" className="text-[#71767b] leading-4 text-[14px] hover:underline">Terms of Service</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[14px] hover:underline">Privacy Policy</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[14px] hover:underline">Cookie Policy</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[14px] hover:underline">Imprint</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[14px] hover:underline">Accessibility</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[14px] hover:underline">Ads info</Link>
                <Popover className="relative inline-flex leading-4">
                    <Popover.Button
                       className="text-[#71767b] outline-none leading-4 hover:underline inline-flex items-center">
                        More...
                    </Popover.Button>
                    <Popover.Panel className="w-[9.375rem] max-w-[24rem] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
                       <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
                         About
                       </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
                            Download the X app
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
                            Status
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
                            X for Business
                        </Link>
                        <Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
                            Developers
                        </Link>
                    </Popover.Panel>
                </Popover>
            <p className="text-[#71767b] leading-4 text-[13px] hover:underline">&copy; 2024 X Corp.</p>

        </footer>
    )
}