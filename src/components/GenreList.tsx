import { Fragment } from "react";
import { Button, HStack, Heading, Image, List, ListItem, Skeleton } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
    const { data: genres, error, isLoading } = useGenres();
    const skeletons = new Array(20).fill(0);

    if (error) return null;

    return (
        <Fragment>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {isLoading &&
                    skeletons.map((_, index) => (
                        <ListItem key={index} paddingY="8px">
                            <Skeleton height="32px" width="100%" borderRadius={8} />
                        </ListItem>
                    ))}
                {!isLoading &&
                    genres.map((genre) => (
                        <ListItem key={genre.id} paddingY="8px">
                            <HStack>
                                <Image
                                    src={getCroppedImageUrl(genre.image_background)}
                                    boxSize="32px"
                                    borderRadius={8}
                                    objectFit="cover"
                                />
                                <Button
                                    fontSize="lg"
                                    variant="link"
                                    onClick={() => onSelectGenre(genre)}
                                    fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                    whiteSpace="normal"
                                    textAlign="left"
                                >
                                    {genre.name}
                                </Button>
                            </HStack>
                        </ListItem>
                    ))}
            </List>
        </Fragment>
    );
}
