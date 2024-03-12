import Navbar from "../components/Navbar";
import Content from "../components/Content";
import CardLocal from '../components/CardLocal';
import ProtectedView from "../views/ProtectedView"
import { useClubs } from '../hooks/useClubs'
import { LoadingOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd';
const { Search } = Input;


export default function ClubsView() {

  const { clubs, isLoading, searchClubs } = useClubs()

  function handleSearch(input) {
    searchClubs(input)
  }

  return (
    <ProtectedView>
      <div className="m-2">
        <Navbar />
        <div className="mt-5 mb-5">
          <h1 className="text-center font-bold  text-xl bg-background mb-1">Clubs Page</h1>
          <div className="flex justify-between w-full items-center">
          <Search
            placeholder="Buscar clubs"
            allowClear
            enterButton="Buscar"
            size="large"
            onSearch={handleSearch}
            className="ml-5 w-80 bg-primary rounded-md mr-1"
            
          />
          <Button href="/newclub" className="bg-primary mr-5" type="primary" size='large'>
            Agregar Club
          </Button>
          </div>
        </div>

        <Content className="inline-flex justify-center items-center w-full h-full flex-wrap">
          {isLoading ? <div className="flex justify-center items-center h-full"><LoadingOutlined className="text-5xl" /></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
          {isLoading ? <div className="flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
          {isLoading ? <div className="flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
          {isLoading ? <div className="flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
        </Content>
      </div>
      </ProtectedView>
      );
}