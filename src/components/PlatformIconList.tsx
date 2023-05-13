import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities";

interface Props {
    platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    };

    return (
        <HStack marginY={2}>
            {platforms.map((platform) => (
                <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
            ))}
        </HStack>
    );
}
