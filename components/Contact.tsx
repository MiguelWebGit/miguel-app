import {IconType} from "react-icons";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaWhatsapp,
    FaLinkedin,
} from "react-icons/fa";
import darkMode from "./Darkmode";

type ContactItemProps = {
    Icon: IconType;
    title: string;
    text: string | JSX.Element;
    color: string;
    size: number;
    link?: string;
};

const ContactItem: React.FC<ContactItemProps> = ({
    Icon,
    title,
    text,
    color,
    size,
    link,
}) => (
    <div
        id="contact"
        className="flex items-center space-x-2 mb-10 gap-2 md:space-x-0 md:mb-0">
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
        <h1 className="text-4xl md:text-2xl font-bold mb-6 text-blue-500 text-center md:text-left">
            Contact
        </h1>
        <div className="flex flex-col space-y-8 py-4 md:flex-row md:space-y-0 md:space-x-20 h-full items-start">
            <div className="relative top-10 md:static">
                <ContactItem
                    Icon={FaMapMarkerAlt}
                    title="Location"
                    text="Caracas, Venezuela"
                    color="red"
                    size={24}
                />
            </div>
            <ContactItem
                Icon={FaEnvelope}
                title="Mail"
                text={
                    <>
                        miguel.une@hotmail.com
                        <br />
                        miguel.dev.cloud@gmail.com
                    </>
                }
                color={"blue"}
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
                color={"blue"}
                size={24}
                link="https://www.linkedin.com/in/miguel-guerrero-52987615a/"
            />
        </div>
    </div>
);

export default Contact;
