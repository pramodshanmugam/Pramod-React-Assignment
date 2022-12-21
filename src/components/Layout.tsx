import * as S from './Layout.styles';
import {Outlet} from "react-router-dom";
import Sidenav from '../components/Sidenav';
import Navbar from './Navbar';
import './style.css';
const Layout = () =>(
    
    <S.Layout>
         <Sidenav/>
         <Navbar/>
        <S.Body>
            <Outlet/>
            
           

        </S.Body>

    </S.Layout>
);

export default Layout;

