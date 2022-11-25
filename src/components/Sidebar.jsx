import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

// bring the links from assets/constants and map them:
// () because we have instant return
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {/*     // TODO: loop over links: each indevidual link is an item. */}
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        // Handle actives only in mobile devices:
        // we have to check: if we have handleClick or not.
        // if handleClick exists only then call it:
        onClick={() => handleClick && handleClick()}
        className="flex flex-row text-sm font-medium text-gray-400 my-8 items-center justify-start hover:text-cyan-400"
      >
        <item.icon className="h-6 w-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  //we use useState to toggle the menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* // todo: desktop */}
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      {/* // ToDO: focus on mobile sidebar:  */}
      <div className="absolute md:hidden block top-6 right-3 ">
        {/* check the menu is open: */}
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      {/* // Todo: add actual mobile menu: */}
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop:blur-lg z-10 p-6 md:hidden smooth-transition
        ${mobileMenuOpen ? "left-0" : "-left-full"}`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
//! after doing the discover page we go for side bar:
// ? object-contain: to make the image fit the container
