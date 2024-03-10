

export default function Content(props) {
    return (
        <div className={`border-gray-200 dark:bg-gray-900 shadow-md rounded-md p-4 box-border bg-primary ${props.className}`}>
            {props.children}
        </div>
    );
}