import Navbar from "../components/Navbar";
import Content from "../components/Content";
import CardLocal from '../components/CardLocal';
import { useClubs } from '../hooks/useClubs'

export default function ClubView() {

  const {clubs, isLoading} = useClubs()

  return (
    <div className="m-2">
      <Navbar />
        <h1 className="text-center font-bold mt-5 mb-5 text-xl bg-background">Clubs Page</h1>
      <Content className="inline-flex justify-center items-center w-full h-full flex-wrap">
        
        {isLoading ? <div className="flex justify-center items-center h-full">Cargando...</div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="club" element={club} />)}
        {isLoading ? <div className="flex justify-center items-center h-full">Cargando...</div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="club" element={club} />)}
        {isLoading ? <div className="flex justify-center items-center h-full">Cargando...</div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="club" element={club} />)}
        {isLoading ? <div className="flex justify-center items-center h-full">Cargando...</div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="club" element={club} />)}
      </Content>
    </div>
  );
}