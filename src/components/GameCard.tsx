import { Link } from "react-router-dom";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { CriticScore, Emoji, PlatformIconList } from ".";
import { Game } from "../entities";
import { getCroppedImageUrl } from "../services/image-url";
import NoImage from "../assets/no-image.jpg";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    const { background_image, name, parent_platforms, metacritic, rating_top, slug } = game;
    const platforms = parent_platforms.map(({ platform }) => platform);
    const imageSrc = background_image ? getCroppedImageUrl(background_image) : NoImage;

    const hoverStyle = {
        transform: "scale(1.07)",
        transition: "transform 0.15s ease-in",
    };

    return (
        <Card borderRadius={10} overflow={"hidden"} _hover={hoverStyle}>
            <Image src={imageSrc} alt="game-icon" />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={platforms} />
                    <CriticScore score={metacritic} />
                </HStack>
                <Heading fontSize="2xl">
                    <Link to={`/games/${slug}`}>{name}</Link>
                    <Emoji rating={rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
}
