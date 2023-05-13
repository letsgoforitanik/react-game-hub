import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch, SearchInput } from ".";
import logo from "../assets/logo.webp";

export default function Navbar() {
    return (
        <HStack padding="10px" paddingRight="15px">
            <Image src={logo} boxSize="60px" alt="logo" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}
