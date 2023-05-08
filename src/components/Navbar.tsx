import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch, SearchInput } from ".";
import logo from "../assets/logo.webp";

interface Props {
    onSearch: (searchText: string) => void;
}

export default function Navbar({ onSearch }: Props) {
    return (
        <HStack padding="10px" paddingRight="15px">
            <Image src={logo} boxSize="60px" alt="logo" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}
