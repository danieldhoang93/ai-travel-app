import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Button,
  Paper,
  Title,
  useMantineTheme,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import { TbWorld } from "react-icons/tb";
import useMapLocationsStore from "~/stores/useMapLocationsStore";
import { useShallow } from "zustand/react/shallow";

interface CardProps {
  image: string;
  city: string;
  state: string | null;
  country: string;
}

function Card({ image, city, state, country }: CardProps) {
  return (
    <Paper pos="relative" p="0" style={{ overflow: "hidden" }}>
      <Box
        p="xl"
        style={{
          backgroundImage: `url(${image})`,
          // height: '400px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: 4 / 3,
          width: "100%",
        }}
      >
        <Flex
          direction="row"
          justify="space-between"
          w="100%"
          gap="sm"
          style={{ position: "relative", zIndex: 1 }}
        >
          <Flex direction="column" gap="sm">
            <Title order={2} c="white" tt="uppercase">
              {state ?? country}
            </Title>

            <Text size="xl" c="white" tt="uppercase" fw={700}>
              {city}
            </Text>
          </Flex>

          <Button
            variant="white"
            color="dark"
            rightSection={<TbWorld />}
            style={{ alignSelf: "flex-end" }}
          >
            Explore
          </Button>
        </Flex>
      </Box>

      {/* Gradient overlay */}
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px", // Adjust height as needed
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
          borderRadius: "inherit", // Match the card's border radius
        }}
      />
    </Paper>
  );
}

export default function LocationCarousel() {
  const mapLocations = useMapLocationsStore(
    useShallow((state) => state.mapLocations),
  );
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = Array.from(mapLocations.values()).map((location) => (
    <Carousel.Slide key={location.id}>
      <Card {...location} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", xs: "50%" }}
      slideGap={{ base: "md", md: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      w="100%"
    >
      {slides}
    </Carousel>
  );
}
