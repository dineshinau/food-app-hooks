import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {
    const [btnText, setBtnText] = useState('Login')

    // if no dependency array => useEffect will be called on every render.
    // If dependency array is empty => [] => useEffect is called on initial render (just once)
    // If dependency array is [btnText] => called every time btnText is updated.
    useEffect(() => {
        console.log('Header Use effect callded');
    },[btnText])

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
