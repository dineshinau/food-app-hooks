import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img height="100px" width="100px" src={LOGO_URL} />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
