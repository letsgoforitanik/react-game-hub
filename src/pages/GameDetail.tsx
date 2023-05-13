import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { ExpandableText } from "../components";

export default function GameDetail() {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!);

    if (error) return <Text>{error.message}</Text>;

    if (isLoading) {
        return (
            <Flex
                width="100%"
                height="calc(100vh - 80px)"
                justifyContent="center"
                alignItems="center"
            >
                <Spinner />
            </Flex>
        );
    }

    const { name, description_raw } = game;

    return (
        <Box padding={5}>
            <Heading>{name}</Heading>
            <ExpandableText limit={300}>{description_raw}</ExpandableText>
        </Box>
    );
}
