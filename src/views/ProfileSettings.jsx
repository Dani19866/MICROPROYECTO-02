import Navbar from "../components/Navbar"
import Content from "../components/Content";

export default function ProfileView() {
  return (
    <div>
      <Navbar />
      <Content>
        <h1>Profile settings page</h1>
      </Content>
    </div>
  );
}