import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout as ANTDLayout, Menu, Input, message } from "antd";
import { getMovieDetailsByName } from "../api/movie";

const { Search } = Input;
const { Header } = ANTDLayout;

const SEARCH_STYLE = {
    position: 'absolute',
    marginTop: '-50px',
    marginLeft: '80vw',
    zIndex: 2,
};
const LOGO_STYLE = {
    width: '8vw',
    height: 50,
};

function Layout() {
    const navigate = useNavigate();

    const items = [
        { label: <Link to="/">Home</Link>, key: "/" },
        { label: <Link to="/about">About</Link>, key: "/about" },
    ];

    const onSearchMovieName = (searchtext) => {
        if (searchtext === "")
            return;
        getMovieDetailsByName(searchtext).then((response) => {
            // navigate(`/movies/${response.data[0].id}`);
            navigate(`/movies/${response.data.id}`);
        }).catch(function () {
            message.error('未找到匹配的电影结果');
        });
    };

    return (
        <div>
            <Header>
                <div className="logo" style={{ float: 'left', color: "white", fontSize: 18 }}>
                    <img alt="logopic" src="/assets/img/CinemaParadiseLogo12.png" style={LOGO_STYLE}></img>
                </div>
                <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['/']} items={items} />
            </Header>
            <div style={SEARCH_STYLE}>
                <Search
                    placeholder="请输入电影名"
                    allowClear
                    onSearch={onSearchMovieName}
                />
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;
