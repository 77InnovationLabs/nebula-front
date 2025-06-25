import User from "./components/User";
import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Certifications from "./components/Certifications";
import Rewards from "./components/Rewards";

export default function Profile() {
    return (
        <div>
            <User/>
            <Nav/>
            <Courses/>
            <Certifications/>
            <Rewards/>
        </div>
    )
}