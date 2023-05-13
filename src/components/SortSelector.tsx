import { useSelector, useDispatch } from "react-redux";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { State } from "../store";
import { setSortBy } from "../store/slice";
interface SortField {
    value: string;
    label: string;
}

export default function SortSelector() {
    const gameQuery = useSelector((state: State) => state.gameQuery);
    const dispatch = useDispatch();

    const sortFields: SortField[] = [
        {
            value: "",
            label: "Relevance",
        },
        {
            value: "-added",
            label: "Date added",
        },
        {
            value: "name",
            label: "Name",
        },
        {
            value: "-released",
            label: "Release Date",
        },
        {
            value: "-metacritic",
            label: "Popularity",
        },
        {
            value: "-rating",
            label: "Average Rating",
        },
    ];

    const defaultLabel = sortFields.find((f) => f.value == gameQuery.sortBy)?.label;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by : {defaultLabel ?? "Relevance"}
            </MenuButton>
            <MenuList>
                {sortFields.map((field, index) => (
                    <MenuItem key={index} onClick={() => dispatch(setSortBy(field.value))}>
                        {field.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
