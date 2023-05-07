import { HStack, Image, Text } from "@chakra-ui/react";
import { ColorModeSwitch } from ".";
import logo from "../assets/logo.webp";

export default function Navbar() {
    return (
        <HStack
            justifyContent="space-between"
            padding="10px"
            paddingRight="15px"
        >
            <Image src={logo} boxSize="60px" alt="logo" />
            <ColorModeSwitch />
        </HStack>
    );
}
