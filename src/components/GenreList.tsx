import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, HStack, Heading, Image, List, ListItem, Skeleton } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";
import { State } from "../store";
import { setGenreId } from "../store/slice";
import useGenres from "../hooks/useGenres";

export default function GenreList() {
    const gameQuery = useSelector((state: State) => state.gameQuery);
    const { data: genres, error, isLoading } = useGenres();
    const skeletons = new Array(20).fill(0);
    const dispatch = useDispatch();

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
                                    onClick={() => dispatch(setGenreId(genre.id))}
                                    fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
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
