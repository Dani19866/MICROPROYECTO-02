import { useParams } from "react-router-dom";
import { useClub } from "../hooks/useClub";
import Navbar from "../components/Navbar";
import CardLocal from '../components/CardLocal';
import { LoadingOutlined } from '@ant-design/icons';
import Content from "../components/Content"

export default function ClubDetailView() {

    const { id } = useParams()

    const { club, isLoading } = useClub(id)

    

    return (
        <div>
            <Navbar />
            <div className="text-center font-bold  text-xl bg-background">Club Details</div>
            <Content>
                {isLoading ? <div className="flex justify-center items-center h-full"><LoadingOutlined className="text-5xl" /></div> : <CardLocal key={club} type="club" element={club.data()} />}
            </Content>
        </div>
    );
}