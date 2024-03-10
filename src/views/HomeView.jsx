import Navbar from "../components/Navbar"
import Content from "../components/Content";

export default function HomeView() {
    return (
        <div>
            <Navbar />
            <Content>
                <h1>Home page</h1>
            </Content>
        </div>
    );
}