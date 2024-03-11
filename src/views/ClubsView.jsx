import Navbar from "../components/Navbar";
import Content from "../components/Content";
import CardLocal from '../components/CardLocal';
import { useClubs } from '../hooks/useClubs'
import { LoadingOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import styles from './../css/ClubsView.module.css';
const { Search } = Input;


export default function ClubsView() {

  const { clubs, isLoading, searchClubs } = useClubs()
  // const onSearch = (value, _e, info) => console.log(info?.source, value);
  // const { inputText, setInputText } = useState('')

  function handleSearch(input) {
    searchClubs(input)
  }

  return (
    <div className="m-2">
      <Navbar />
      <div className={`mt-5 mb-5 ${styles.header}`}>
        <h1 className={`text-center font-bold  text-xl bg-background ${styles.title}`}>Clubs Page</h1>
        <Search
          placeholder="Buscar clubs"
          allowClear
          enterButton="Buscar"
          size="large"
          onSearch={handleSearch}
          className={`w-80 bg-primary rounded-md ${styles.search}`}
        />
      </div>

      <Content className="inline-flex justify-center items-center w-full h-full flex-wrap">




        {isLoading ? <div className="flex justify-center items-center h-full"><LoadingOutlined className="text-5xl" /></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
        {isLoading ? <div className="flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
        {isLoading ? <div className="flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
        {isLoading ? <div className="flex justify-center items-center h-full"></div> : clubs.map((club) => <CardLocal key={club.nombre + club.id} type="clubs" element={club} />)}
      </Content>
    </div>
  );
}