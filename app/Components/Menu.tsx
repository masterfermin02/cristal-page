import Image from "next/image";

export const Menu = ({
 whatsAppUrl,
 message
}: {
    whatsAppUrl: string;
    message: string;
}) => {
    return (
        <header>
            {/* Header Start */}
            <div className="header-area header-transparent">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper d-flex align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="logo">
                                <a href="/">
                                    <Image
                                        src="/assets/img/logo/hero3.png"
                                        alt=""
                                        width={200}
                                        height={80}
                                    />
                                </a>
                            </div>
                            {/* Main-menu */}
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a href="/">Inicio</a></li>
                                        <li><a href="#planes">Planes</a></li>
                                        <li><a href="#sobre-me">Sobre mi</a></li>
                                        <li><a href="#contact">Contacto</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Header-btn */}
                            <div className="header-btns d-none d-lg-block f-right">
                                <a href={whatsAppUrl + message} target={'_blank'} className="btn">Unete Ya!</a>
                            </div>
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </header>
    );
};
