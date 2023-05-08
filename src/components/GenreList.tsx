import { HStack, Image, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

export default function GenreList() {
    const { genres, error, loading } = useGenres();
    const skeletons = new Array(20).fill(0);

    if (error) return null;

    if (loading) {
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
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}
