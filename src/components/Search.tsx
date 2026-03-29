import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import useUsersStore from "../stores/userQueryStore";
import { useRef } from "react";

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const search = useUsersStore((selector) => selector.search);
  const setSearch = useUsersStore((selector) => selector.setSearch);

  const iconHoverBg = useColorModeValue("gray.200", "gray.600");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search user..."
          variant="filled"
          value={search}
          ref={inputRef}
          onChange={(event) => setSearch(event.target.value)}
        />
        {search && (
          <InputRightElement>
            <IconButton
              aria-label="Clear search"
              icon={<IoClose />}
              size="sm"
              variant="ghost"
              _hover={{ bg: iconHoverBg, borderRadius: 20 }}
              onClick={() => {
                setSearch("");
                inputRef.current?.focus();
              }}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
}

export default Search;
