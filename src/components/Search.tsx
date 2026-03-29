import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import useUsersStore from "../stores/userQueryStore";

function Search() {
  const navigate = useNavigate();
  const setSearch = useUsersStore((selector) => selector.setSearch);

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
          onChange={(event) => setSearch(event.target.value)}
        />
      </InputGroup>
    </form>
  );
}

export default Search;
