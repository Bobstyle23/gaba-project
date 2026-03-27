import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) console.log(searchRef.current.value);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search user..."
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
}

export default Search;
