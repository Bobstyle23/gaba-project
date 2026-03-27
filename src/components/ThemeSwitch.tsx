import { Switch, useColorMode } from "@chakra-ui/react";

function ThemeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch
      colorScheme="green"
      isChecked={colorMode == "dark"}
      onChange={toggleColorMode}
    />
  );
}

export default ThemeSwitch;
