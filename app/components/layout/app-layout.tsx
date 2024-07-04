import {
  AppShell,
  Burger,
  Flex,
  Group,
  NavLink,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { TbClipboardList, TbHome, TbPlane } from "react-icons/tb";
import { ROUTES } from "~/constants/routes";

interface LayoutProps {
  children: ReactNode;
}

const data = [
  { icon: TbHome, label: "Home", path: ROUTES.HOME },
  { icon: TbClipboardList, label: "Trips", path: ROUTES.TRIPS },
  { icon: TbClipboardList, label: "Itineraries", path: ROUTES.ITINERARIES },
];

export default function AppLayout({ children }: LayoutProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      // href="#required-for-focus"
      component={Link}
      to={item.path}
      key={item.label}
      active={index === active}
      label={
        <Text fw={700} fz="md">
          {item.label}
        </Text>
      }
      // rightSection={item?.rightSection}
      leftSection={<item.icon />}
      onClick={() => setActive(index)}
      variant="subtle"
      color="violet"
      py="md"
      px="xl"
    />
  ));

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 250,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="xl"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />

            <Flex
              gap="sm"
              align="center"
              component={Link}
              to={ROUTES.HOME}
              style={{
                textDecoration: "unset",
                color: "var(--mantine-color-text)",
              }}
            >
              <Title order={1} size="h3">
                Travel App
              </Title>
              <TbPlane size={30} />
            </Flex>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="0">{items}</AppShell.Navbar>
        <AppShell.Main px="xl">{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
