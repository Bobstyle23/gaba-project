import { useBreakpointValue } from "@chakra-ui/react";

function useMobile() {
  return useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });
}

export default useMobile;
