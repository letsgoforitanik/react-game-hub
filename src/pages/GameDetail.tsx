import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { Flex, GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { ExpandableText, GameAttributes, GameScreenshots, GameTrailer } from "../components";

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
        <SimpleGrid padding={5} columns={{ base: 1, md: 2 }} spacing={5}>
            <GridItem>
                <Heading marginBottom={5}>{name}</Heading>
                <ExpandableText limit={400}>{description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
}
