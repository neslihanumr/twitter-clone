import {Popover,} from "@headlessui/react";
import {useAccount} from "~/store/auth/hooks.js";
import More from "~/layouts/main/sidebar/account/more/index.jsx";

export default function Account(){

    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button
                    className="my-3 p-2 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center transition-colors outline-none">

                    <img src={account.avatar} className="w-10 flex-shrink-0 h-10 rounded-full"/>
                    <div className="mx-3">
                        <h6 className="font-bold leading-[1.25rem]"> {account.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
                            <path
                                fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                    </svg>
                </Popover.Button>
                <Popover.Panel
                    className="absolute bottom-full -translate-y-2 py-3 w-[300px] overflow-hidden left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
                    <More/>
                </Popover.Panel>
            </Popover>
        </div>
    )
}