import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { App } from ".";
import theme from "../theme";

export default function AppWrapper() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    );
}
