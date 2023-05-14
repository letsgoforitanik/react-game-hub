import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { setSearchText } from "../store/slice";

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onFormSubmit(event: FormEvent) {
        event.preventDefault();
        const searchText = inputRef.current?.value;
        searchText && dispatch(setSearchText(searchText)) && navigate("/");
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
