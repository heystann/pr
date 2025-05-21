import { NavLink } from "react-router-dom"
export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar container d-flex h-100">
                <div>

                </div>
                <div className="nav-menu d-flex text-uppercase ">
                    <NavLink className="header-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="header-link" to="/sd">
                        discover
                    </NavLink>
                    <NavLink className="header-link" to="/marketplace">
                        marketplace
                    </NavLink>
                </div>
                <div className="nav-account">
                    <NavLink className="account-link" to="/account">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="20.75"  stroke-width="0.5" />
                            <g clip-path="url(#clip0_782_160)">
                                <path d="M21.5254 20.9751C23.8208 20.9751 25.6816 19.1143 25.6816 16.8188C25.6816 14.5234 23.8208 12.6626 21.5254 12.6626C19.23 12.6626 17.3691 14.5234 17.3691 16.8188C17.3691 19.1143 19.23 20.9751 21.5254 20.9751Z" stroke-width="1.5" />
                                <path d="M25.6814 22.6377H25.974C26.5817 22.6379 27.1684 22.8599 27.624 23.2622C28.0795 23.6645 28.3724 24.2192 28.4478 24.8222L28.7728 27.419C28.802 27.653 28.7812 27.8905 28.7116 28.1157C28.6421 28.341 28.5254 28.5489 28.3693 28.7256C28.2133 28.9023 28.0215 29.0438 27.8065 29.1407C27.5916 29.2377 27.3585 29.2877 27.1228 29.2877H15.9275C15.6918 29.2877 15.4587 29.2377 15.2438 29.1407C15.0288 29.0438 14.837 28.9023 14.6809 28.7256C14.5249 28.5489 14.4082 28.341 14.3387 28.1157C14.2691 27.8905 14.2482 27.653 14.2775 27.419L14.6017 24.8222C14.6771 24.2189 14.9703 23.6639 15.4261 23.2616C15.882 22.8594 16.4691 22.6375 17.0771 22.6377H17.3689"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_782_160">
                                    <rect width="19.95" height="19.95" fill="white" transform="translate(11.5498 11)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </NavLink>

                </div>

            </nav>
        </header>
    )
}