import styled from "styled-components";



const BASE_SIDEBAR_WIDTH =48;

export const Sidebar = styled.nav`
grid-area:sidebar;
position:sticky;
height: calc(100vh-16px);
margin-bottom:8px;
width:100px;



`;

export const SidebarContent = styled.ul`
list-style-type: style none;
margin:0;
padding:0;
padding-left:8px;
display:flex;
width:${BASE_SIDEBAR_WIDTH}px;
flex-direction:column;
align-items:center;
background-color:blue;
height:100%;
padding-top:32px;
overflow:hidden;
`;