const Navbar = () => {
    return (
        
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="nav-container">
                <div className="nav-slide-plane">
                    <a href="./" aria-current="page" className="nav-logo-link w-nav-brand w--current">
                        <img src="Icon.svg" alt="" className="nav-logo"/>
                    </a>
                </div>
                <div className="nav-middle">
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        
                    </nav>
                </div>
                <div className="nav-button-wrap no-inverse">
                    <div className="button-mobile-hide">
                        <a href="/dashboard" className="small-buttom hollow-button w-button">Login</a>
                        <a href="/dashboard" className="small-buttom w-button">Get Started</a>
                    </div>
                    <div className="menu-button w-nav-button">
                        <div className="w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;