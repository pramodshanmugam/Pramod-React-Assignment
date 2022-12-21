import { format } from "path";
import React from "react";
import { Create, Home, Issue } from "./components";
import {MdHome,
    MdSettings,
    MdEmail} from 'react-icons/md'
export enum RoutePath {

    HOME = "HOME",
    ISSUE = "ISSUE",
    CREATE = "CREATE"
}



export const defaultSidebarNavItems:SidebarNavItem[]=[

    {
        name:"Home",
        path: RoutePath.HOME,
        icon:MdHome
    },

    {
        name:"Issue",
        path: RoutePath.ISSUE,
        icon:MdSettings
    },
    {
        name:"Create",
        path: RoutePath.CREATE,
        icon:MdEmail
    },

];

export const routes:Route[] =[

    {
        name:"home",
        path:RoutePath.HOME,
        component:Home,
        sidebarNavItems:defaultSidebarNavItems
    },
    {
        name:"Issue",
        path:RoutePath.ISSUE,
        component:Issue,
        sidebarNavItems:defaultSidebarNavItems
    },
    {
        name:"Create",
        path:RoutePath.CREATE,
        component:Create,
        sidebarNavItems:defaultSidebarNavItems

    }
]

export interface SidebarNavItem{
    name:string;
    path:string;
    icon:React.ComponentType;

}

export interface Route{
    name:string;
    path:RoutePath;
    sidebarNavItems?:SidebarNavItem[];
    component:React.ComponentType;

}