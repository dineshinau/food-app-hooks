import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <User name={'Dinesh Kumar Yadav (function)'} />
            <UserClass name={'Dinesh Kumar Yadav (class)'} location={'Noida'} />
        </div>
    )
}

export default About;
