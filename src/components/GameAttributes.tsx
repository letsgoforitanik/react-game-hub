import { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { CriticScore, DefinitionItem } from ".";
import { Game } from "../entities";

interface Props {
    game: Game;
}

export default function GameAttributes({ game }: Props) {
    const { parent_platforms, metacritic, genres, publishers } = game;

    return (
        <SimpleGrid columns={2} as="dl">
            <DefinitionItem term="Platforms">
                <Fragment>
                    {parent_platforms.map(({ platform }) => (
                        <Text key={platform.id}>{platform.name}</Text>
                    ))}
                </Fragment>
            </DefinitionItem>
            <DefinitionItem term="Metacritic">
                <CriticScore score={metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                <Fragment>
                    {genres.map((genre) => (
                        <Text key={genre.id}>{genre.name}</Text>
                    ))}
                </Fragment>
            </DefinitionItem>
            <DefinitionItem term="Publishers">
                <Fragment>
                    {publishers.map((publisher) => (
                        <Text key={publisher.id}>{publisher.name}</Text>
                    ))}
                </Fragment>
            </DefinitionItem>
        </SimpleGrid>
    );
}
