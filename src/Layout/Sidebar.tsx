import { useMemo } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { routes } from "../routs";
import * as S from './Sidebar.styles';

const Sidebar =() => {

    const location=useLocation();
    const currentRoute = useMemo(()    => routes.find(route=>matchPath(location.pathname,route.path)),[location]
    
    );
  
    return<S.Sidebar>
        <S.SidebarContent>
           {currentRoute?.SidebarNavItems?.map(item)=>(
            <item.icon/>
           ))} 
           
        </S.SidebarContent>

    </S.Sidebar>;



}

export default Sidebar;

