import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";

function Layout() {
    const items = [
        { label: <Link to="/">Home</Link>, key: "/" },
        { label: <Link to="/about">About</Link>, key: "/about" },
    ];

    return (
        <div>
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['/']} items={items} />
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;
