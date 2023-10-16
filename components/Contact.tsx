import {IconType} from "react-icons";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaWhatsapp,
    FaLinkedin,
} from "react-icons/fa";

type ContactItemProps = {
    Icon: IconType;
    title: string;
    text: string;
    color: string; // Añade una prop para el color
    size: number; // Añade una prop para el tamaño
    link?: string; // Añade una prop para el link
};

const ContactItem: React.FC<ContactItemProps> = ({
    Icon,
    title,
    text,
    color,
    size,
    link,
}) => (
    <div className="flex items-center space-x-2 mb-10 gap-2">
        <Icon className="text-xl" color={color} size={size} />{" "}
        <div>
            <h2 className="font-bold">{title}</h2>
            {link ? (
                <a href={link} className="whitespace-nowrap">
                    {text}
                </a>
            ) : (
                <p className="whitespace-nowrap">{text}</p>
            )}
        </div>
    </div>
);

const Contact: React.FC = () => (
    <div>
        <h1 className="text-2xl font-bold mb-6 text-blue-500">Contact</h1>
        <div className="flex space-x-20">
            <ContactItem
                Icon={FaMapMarkerAlt}
                title="Location"
                text="Caracas, Venezuela"
                color="red"
                size={24}
            />
            <ContactItem
                Icon={FaEnvelope}
                title="Mail"
                text="miguel.dev.cloud@gmail.com"
                color="blue"
                size={24}
            />
            <ContactItem
                Icon={FaWhatsapp}
                title="WhatsApp"
                text="+58 412-809-5403"
                color="green"
                size={24}
            />
            <ContactItem
                Icon={FaLinkedin}
                title="LinkedIn"
                text="Miguel Guerrero"
                color="blue"
                size={24}
                link="https://www.linkedin.com/in/miguel-guerrero-52987615a/"
            />
        </div>
    </div>
);

export default Contact;
