import Navbar from "../components/Navbar";
import Content from "../components/Content";
import CardLocal from '../components/CardLocal';
import { useClubs } from '../hooks/useClubs'
import { LoadingOutlined } from '@ant-design/icons'

export default function ClubsView() {

  const { clubs, isLoading } = useClubs()

  return (
    <div className="m-2">
      <Navbar />
      <h1 className="text-center font-bold mt-5 mb-5 text-xl bg-background">Clubs Page</h1>
      <Content className="inline-flex justify-center items-center w-full h-full flex-wrap">
        <div className="w-3/5 m-auto text-center">
          {isLoading ? <div className=" inline-flex justify-center items-center h-full"><LoadingOutlined className="text-5xl" /></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
          {isLoading ? <div className="inline-flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
          {isLoading ? <div className="inline-flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
          {isLoading ? <div className="inline-flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
        </div>
      </Content>
    </div>
  );
}