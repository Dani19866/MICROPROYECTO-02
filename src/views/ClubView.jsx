import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Card from '../components/Card';
// import { useEffect, useState } from "react";
import { useClubs } from '../hooks/useClubs'

export default function ClubView() {

  const {clubs, isLoading} = useClubs()

  return (
    <div>
      <Navbar />
      <Content>
        <h1>Mis clubs page</h1>
        
        {isLoading ? <div>Cargando...</div> : clubs.map((club) => <Card key={club.nombre} type="club" element={club} />)}
      </Content>
    </div>
  );
}