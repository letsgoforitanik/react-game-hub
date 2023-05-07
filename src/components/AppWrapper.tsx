import { ChakraProvider } from "@chakra-ui/react";
import { App } from ".";

export default function AppWrapper() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
