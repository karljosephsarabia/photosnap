import { useContext, useState } from 'react';
import './header.scss';
import { PhotoSnapContext } from '../../context/context-provider';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { category } = useContext(PhotoSnapContext);

    return (
        <>
            <header>
                <nav>
                    <img src="/assets/shared/desktop/logo.svg" alt="logo" />
                    <img src={showMenu ? "/assets/shared/mobile/close.svg" : "/assets/shared/mobile/menu.svg"} alt="menu" onClick={() => setShowMenu(prevState => !prevState)} />
                </nav>
                {showMenu && <section className='header-section'>
                    <ul>
                        {category?.map((cat, index) => index > 0 &&
                            <li key={index}>
                                <a href='#'>{cat}</a>
                            </li>
                        )}
                    </ul>
                    <hr />
                    <button>get an invite</button>
                </section>}
            </header>
        </>
    );
};

export default Header;