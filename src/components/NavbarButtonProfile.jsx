export default function NavbarButtonProfile(props) {
    return (
        <a
            href={props.href} 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            {props.title}
        </a>
    );
}