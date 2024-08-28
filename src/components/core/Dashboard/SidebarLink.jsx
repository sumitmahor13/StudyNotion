import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link, iconName}) => {

    const Icon = Icons[iconName];
    const location  = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }


  return (
    <NavLink
    to={link.path}
    className={ `relative px-2 lg:px-8 py-1 lg:py-2 text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-800" :"bg-opacity-0"}`}
    >

        <span className={`absolute opacity-0 left-0 top-0 h-full w-[0.2rem] bg-yellow-50
        ${matchRoute(link.path) ? "opacity-100": "opactity-0"}`}>
        </span>

        <div className='flex item-center mx-4 lg:mx-0 gap-x-2'>

            <Icon className="text-lg" />
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink
