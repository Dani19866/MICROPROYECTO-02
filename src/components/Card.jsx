export default function Card(props) {

    function cardType() {
        const element = props.element;
        if (props.type == "club") {
            return (
            <div>
                <h1>Club name: {element.name}</h1>
            </div>
            );
       } else {
           return <club>not club</club>
       }
    }

    return (
        <div>
            {cardType()}
        </div>
    );
}