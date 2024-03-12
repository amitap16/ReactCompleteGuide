import { useState } from "react";

export default function SideBar() {
    const [open, setOpen] = useState(true);
    return (<div
        className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-dark-purple relative`}>
        <img src="./src/assets/control.png"
            className={`absolute cursor-pointer rounded-full
-right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
        />
        Your Projects
    </div>
    );
}