import { Button, HStack, Image, List, ListItem, Skeleton } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
    const { genres, error, loading } = useGenres();

    if (error) return null;

    if (loading) {
        const skeletons = new Array(20).fill(0);

        return (
            <List>
                {skeletons.map((_, index) => (
                    <ListItem key={index} paddingY="5px">
                        <Skeleton height="32px" width="100%" borderRadius={8} />
                    </ListItem>
                ))}
            </List>
        );
    }

    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            boxSize="32px"
                            borderRadius={8}
                        />
                        <Button
                            fontSize="lg"
                            variant="link"
                            onClick={() => onSelectGenre(genre)}
                            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}
