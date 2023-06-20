function Navbar(){
    return (<>
            <nav id = "navRoot" className="navbar navbar-expand-lg sticky-top">
                <div className="navbar">
                    <p className="navbar-brand">YO</p>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav nav-pills ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#page1">Page 1</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#page2">Page 2</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pageL">Page L</a>
                            </li>
                    </ul>
                </div>
            </nav>
    </>);
}

export default Navbar;