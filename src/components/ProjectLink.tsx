import { FiExternalLink } from "react-icons/fi";

interface props{
    href:string;
    label:string;
}

export function ProjectLink({href,label}:props){
    return(
        <a href={href} 
        target="_blank"
        rel="noreferrer"
        className="flex items-center text-2xl block-1 mt-2  text-blue-400 hover:text-gray-100 transition-all"
        >
            <FiExternalLink className="h-4 w-4"/>
             {label && <span className="text-sm font-light">{label}</span>}
        </a>
    );
}
