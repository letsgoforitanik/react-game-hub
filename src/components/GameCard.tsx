import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { CriticScore, PlatformIconList } from ".";
import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "../services/image-url";
import NoImage from "../assets/no-image.jpg";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    const { background_image, name, parent_platforms, metacritic } = game;
    const platforms = parent_platforms.map(({ platform }) => platform);
    const imageSrc = background_image ? getCroppedImageUrl(background_image) : NoImage;

    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={imageSrc} alt="game-icon" />
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
