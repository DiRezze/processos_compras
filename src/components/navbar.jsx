import React from "react";

const NavBar = () => {
    return(
        <nav className="h-[56px] sticky top-0 left-0 flex items-center bg-gray-50 w-full shadow-md">
            <img 
                className="h-2/3 mx-4"
                src="brasao.png" />
            <h1 className="font-bold text-[#0B62AB] md:text-2xl sm:text-xl">Prefeitura Municipal de Gália</h1>
        </nav>
    );
}

export default NavBar;
