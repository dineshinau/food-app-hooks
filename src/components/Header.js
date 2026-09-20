import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnText, setBtnText] = useState('Login')
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
                    <button onClick={() => {
                        setBtnText('Login' === btnText ? 'Logout' : 'Login')
                    }}>{btnText}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;
