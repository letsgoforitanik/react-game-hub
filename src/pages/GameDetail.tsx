import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

export default function GameDetail() {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error) return <Text>{error.message}</Text>;

    const { name, description_raw } = game;

    return (
        <Box padding={5}>
            <Heading>{name}</Heading>
            <Text>{description_raw}</Text>
        </Box>
    );
}
