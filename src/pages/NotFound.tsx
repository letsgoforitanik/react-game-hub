import { Box, Heading, Text } from "@chakra-ui/react";

export default function NotFound() {
    return (
        <Box padding={5}>
            <Heading>Oops</Heading>
            <Text>This page does not exist</Text>
        </Box>
    );
}
