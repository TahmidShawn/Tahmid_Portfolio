import { NavLink } from "react-router-dom";
import logo from './../../../assets/logo.png'

const Navbar = () => {
    const navLinks = <>
        <NavLink>Home</NavLink>
        <NavLink>Courses</NavLink>
        <NavLink>About Us</NavLink>
    </>
    return (
        <nav className="navbar bg-[#222222] text-white px-10 md:px-40">
            <div className="navbar-start">
                <img className="h-8" src={logo} alt="" />
            </div>

            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-5 text-xl space-y-3 shadow bg-base-100 w-40 -right-6">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className=" menu-horizontal px-1 flex gap-6 space-x-5">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;