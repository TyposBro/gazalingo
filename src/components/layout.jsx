import { Outlet } from "react-router-dom";
import { Nav } from "components/";


export const Layout = () => {
    return (
        <>
            <Outlet />
            <Nav />
        </>
    );
};

export default Layout;