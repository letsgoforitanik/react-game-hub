import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { CriticScore, PlatformIconList } from ".";
import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    const { background_image, name, parent_platforms, metacritic } = game;
    const platforms = parent_platforms.map(({ platform }) => platform);

    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={getCroppedImageUrl(background_image)} alt="game-icon" />
            <CardBody>
                <Heading fontSize="2xl">{name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={platforms} />
                    <CriticScore score={metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}
