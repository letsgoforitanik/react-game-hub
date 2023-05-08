import { FormEvent, useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string | null) => void;
}

export default function SearchInput({ onSearch }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    function onFormSubmit(event: FormEvent) {
        event.preventDefault();
        const searchText = inputRef.current?.value;
        onSearch(searchText ?? null);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} top="2px" left="4px" />
                <Input
                    borderRadius={25}
                    height="45px"
                    placeholder="Search games..."
                    variant="filled"
                    ref={inputRef}
                />
            </InputGroup>
        </form>
    );
}
