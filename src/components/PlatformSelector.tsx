import { useSelector, useDispatch } from "react-redux";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import { State } from "../store";
import { setPlatformId } from "../store/slice";

export default function PlatformSelector() {
    const gameQuery = useSelector((state: State) => state.gameQuery);
    const { data: platforms, error } = usePlatforms();
    const dispatch = useDispatch();

    if (error) return null;

    const selectedPlatform = usePlatform(gameQuery.platformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => dispatch(setPlatformId(platform.id))}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
