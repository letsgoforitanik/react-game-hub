import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from ".";
import { Game } from "../hooks/useGames";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    const { background_image, name, parent_platforms } = game;
    const platforms = parent_platforms.map(({ platform }) => platform);

    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={background_image} alt="game-icon" />
            <CardBody>
                <Heading fontSize="2xl">{name}</Heading>
                <PlatformIconList platforms={platforms} />
            </CardBody>
        </Card>
    );
}
