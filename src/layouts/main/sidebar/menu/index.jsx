import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "~/utils/consts.jsx";
import More from "~/layouts/main/sidebar/menu/more/index.jsx";
import New from "~/layouts/main/sidebar/menu/new/index.jsx";
export default function Menu(){
    return(
        <nav className="mt-0.5 mb-1 ">
            {mainMenu.map((menu,index) => (
                <NavLink key={index} to={menu.path} className="py-[0.188rem] block-group">
                    {({ isActive }) => (
                        <div
                            className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]", {
                                "font-bold":isActive
                            })}>
                            <div className="w-[1.641rem] h-[1.641rem] relative">
                                {menu?.notification && (
                                    <span
                                        className="w-[1.125rem] h-[1.125rem] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                                        {menu?.notification}
                                    </span>
                                )}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className="pr-4 text-xl">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}

           <More />
            <New/>


        </nav>
    )
}