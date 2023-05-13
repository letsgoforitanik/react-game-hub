import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { store } from "../store";
import { App } from ".";
import theme from "../theme";

export default function AppWrapper() {
    const queryClient = new QueryClient();

    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <App />
                    </Router>
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </ChakraProvider>
        </Provider>
    );
}
