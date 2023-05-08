import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortField {
    value: string;
    label: string;
}

interface Props {
    onSelectSortField: (field: string) => void;
    selectedSortField: string | null;
}

export default function SortSelector({ onSelectSortField, selectedSortField }: Props) {
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

    const defaultLabel = sortFields.find((f) => f.value == selectedSortField)?.label;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by : {defaultLabel ?? "Relevance"}
            </MenuButton>
            <MenuList>
                {sortFields.map((field, index) => (
                    <MenuItem key={index} onClick={() => onSelectSortField(field.value)}>
                        {field.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
