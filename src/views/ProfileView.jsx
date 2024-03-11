import Navbar from "../components/Navbar"
import Content from "../components/Content";
import ProtectedView from "../views/ProtectedView"

export default function ProfileView() {
  return (
    <ProtectedView>
      <Navbar />
      <Content>
        <h1>Profile page</h1>
      </Content>
    </ProtectedView>
  );
}