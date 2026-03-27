import { Box, Grid, GridItem } from "@chakra-ui/react";
import Users from "../components/Users";

function HomePage() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"main"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="main">
          <Box padding={2}>
            <Users />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
