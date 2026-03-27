import { HStack } from "@chakra-ui/react";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
  return (
    <HStack>
      <Search />
      <ThemeSwitch />
    </HStack>
  );
}

export default NavBar;
