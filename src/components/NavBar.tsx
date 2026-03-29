import { HStack } from "@chakra-ui/react";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding="12px">
      <Search />
      <ThemeSwitch />
    </HStack>
  );
}

export default NavBar;
