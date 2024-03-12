import { useVideoGames } from "../hooks/useVideoGames";
import { LoadingOutlined } from '@ant-design/icons';
import CardLocal from "./CardLocal";

export default function VideoGamesCards(props) {
    const { videogames, isLoading } = useVideoGames(props.element)

    function mapping() {
        return (
            <div>
                {videogames.map((videogame) => {<CardLocal key={videogame.titulo} element={videogame} />})}
            </div>
        );
    }

    return (
        <div>
            <div>Aqui</div>
            {/* Hola */}
            { isLoading ? <div className="flex justify-center items-center h-full"><LoadingOutlined className="text-5xl" />Loading</div> : mapping() }
        </div>
    );
}