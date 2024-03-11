

export default function Content(props) {
    return (
        <div className={`border-gray-200 bg-white border dark:bg-gray-900 shadow-md rounded-md p-4 box-border ${props.className}`}>
            {props.children}
        </div>
    );
}