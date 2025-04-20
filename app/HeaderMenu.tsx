
import Link from 'next/link';
import { IconHomeDollar, IconAd2, IconChevronDown, IconClock, IconPhoneDone, IconCarCrash, IconPlane, IconCreditCard, IconCalendarDollar,IconSun, IconMoon  } from '@tabler/icons-react';
  import {
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
    ActionIcon, 
    useMantineColorScheme,
    Flex
  } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import { useEffect, useState } from 'react';

const mortagesdata = [
    {
      icon: IconHomeDollar,
      title: 'Home Loans',
      description: 'Offers mortgage solutions for individuals purchasing residential properties, detailing the loan terms, eligibility, and repayment options',
      link: '/mortages/home-loan',
    },
    {
      icon: IconAd2,
      title: 'Commercial Property Loans',
      description: 'Provides loans for purchasing or refinancing commercial properties such as office buildings, industrial spaces, and retail locations',
      link: '/mortages/commercial-property-loan',
    },

  ];
  const insurancedata = [
    {
      icon: IconPlane,
      title: 'Travel Insurance',
      description: 'Covers unexpected events or emergencies while traveling, such as medical emergencies, trip cancellations, or lost luggage',
      link: '/insurance/travel-insurance',
    },
    {
      icon: IconCarCrash,
      title: 'Car Insurance',
      description: 'Provides coverage for vehicles in the case of accidents, theft, or damage, ensuring financial protection for car owners',
      link: '/insurance/car-insurance',
    },
    {
      icon: IconHomeDollar,
      title: 'Home Insurance',
      description: 'Protects homeowners from damage to their property or loss of possessions due to events like fire, theft, or natural disasters',
      link: '/insurance/home-insurance',
    },
  ];
  const creditproductdata = [
    {
      icon: IconCreditCard,
      title: 'Credit Cards',
      description: 'A form of revolving credit allowing users to make purchases up to a predefined limit, with repayment required over time',
      link: '/credit-product/credit-cards',
    },
    {
      icon: IconCalendarDollar,
      title: 'Personal Loans',
      description: 'Unsecured loans offered to individuals for personal expenses such as debt consolidation, medical bills, or home improvements',
      link: '/credit-product/personal-loans',
    },

  ];
export function Logo() {
    return (
      <Text fw={700} size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
        Wealth Matters
      </Text>
    );
  }

export function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [mortageslinksOpened, { toggle: toggleMortagesLinks }] = useDisclosure(false);
    const [insurancelinksOpened, { toggle: toggleInsuranceLinks }] = useDisclosure(false);
    const [creditproductlinksOpened, { toggle: toggleCreditProductLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    const mortagesLinks = mortagesdata.map((item) => (
    <UnstyledButton
        key={item.title}
        className={classes.subLink}
        component={Link}
        href={item.link}
    >
        <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
            <Text size="sm" fw={500}>
            {item.title}
            </Text>
            <Text size="xs" c="dimmed">
            {item.description}
            </Text>
        </div>
        </Group>
    </UnstyledButton>
      ));

    const insuranceLinks = insurancedata.map((item) => (
    <UnstyledButton
        key={item.title}
        className={classes.subLink}
        component={Link}
        href={item.link}
    >
        <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
            <Text size="sm" fw={500}>
            {item.title}
            </Text>
            <Text size="xs" c="dimmed">
            {item.description}
            </Text>
        </div>
        </Group>
    </UnstyledButton>
    )); 
    const creditProductLinks = creditproductdata.map((item) => (
        <UnstyledButton
            key={item.title}
            className={classes.subLink}
            component={Link}
            href={item.link}
        >
            <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
                <item.icon size={22} color={theme.colors.blue[6]} />
            </ThemeIcon>
            <div>
                <Text size="sm" fw={500}>
                {item.title}
                </Text>
                <Text size="xs" c="dimmed">
                {item.description}
                </Text>
            </div>
            </Group>
        </UnstyledButton>
        )); 
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
     
      return (
        <Box>
          <header className={classes.header}>
            <Group justify="space-between" h="100%">
              <Logo />
    
              <Group h="100%" gap={0} visibleFrom="sm">
                <a href="/" className={classes.link}>
                  Home
                </a>
                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Mortages
                        </Box>
                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                      </Center>
                    </a>

                    
                  </HoverCard.Target>
    
                  <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <SimpleGrid cols={2} spacing={0}>
                      {mortagesLinks}
                    </SimpleGrid>
                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                            <Text fw={500} fz="sm">
                                Get started
                            </Text>
                            <Text size="xs" c="dimmed">
                            Covers different types of loans that can be used to purchase property. It includes detailed offerings for various mortgage products
                            </Text>
                            </div>
                            <Button variant="default">Contact Us</Button>
                        </Group>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>

                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Insurance
                        </Box>
                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                      </Center>
                    </a>
                  </HoverCard.Target>
    
                  <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <SimpleGrid cols={2} spacing={0}>
                      {insuranceLinks}
                    </SimpleGrid>
                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                            <Text fw={500} fz="sm">
                                Get started
                            </Text>
                            <Text size="xs" c="dimmed">
                            Offers a variety of insurance products to safeguard individuals and businesses against various risks, such as health, property, and more
                            </Text>
                            </div>
                            <Button variant="default">Contact Us</Button>
                        </Group>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>

                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Credit Products
                        </Box>
                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                      </Center>
                    </a>
                  </HoverCard.Target>
    
                  <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <SimpleGrid cols={2} spacing={0}>
                      {creditProductLinks}
                    </SimpleGrid>
                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                            <Text fw={500} fz="sm">
                                Get started
                            </Text>
                            <Text size="xs" c="dimmed">
                            Offers various credit-related financial products, such as credit cards and loans, designed to help customers with their financing needs
                            </Text>
                            </div>
                            <Button variant="default">Contact Us</Button>
                        </Group>
                    </div>
                  </HoverCard.Dropdown>
                 
                </HoverCard>

              </Group>
    
              <Group gap="md" align="center" visibleFrom="sm">
            <Group gap={5} align="center">
              <IconPhoneDone size={16} />
              <Text size="sm">6888 8888</Text>
            </Group>

            <Divider orientation="vertical" />

            <Group gap={5} align="center">
              <IconClock size={16} />
              <Text size="sm">Mon - Fri, 9:00am - 7:00pm</Text>
            </Group>

            <Divider orientation="vertical" />

            <ActionIcon
              variant="default"
              onClick={toggleColorScheme}
              size="lg"
              radius="xl"
              aria-label="Toggle color scheme"
            >
              {mounted && (colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />)}
            </ActionIcon>
          </Group>

              <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            </Group>
          </header>
    
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <ScrollArea h="calc(100vh - 80px" mx="-md">
              <Divider my="sm" />
    
              <a href="/" className={classes.link}>
                Home
              </a>
              <UnstyledButton className={classes.link} onClick={toggleMortagesLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Mortages
                  </Box>
                  <IconChevronDown size={16} color={theme.colors.blue[6]} />
                </Center>
              </UnstyledButton>
              <Collapse in={mortageslinksOpened} p={15}>{mortagesLinks}</Collapse>

              <UnstyledButton className={classes.link} onClick={toggleInsuranceLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Insurance
                  </Box>
                  <IconChevronDown size={16} color={theme.colors.blue[6]} />
                </Center>
              </UnstyledButton>
              <Collapse in={insurancelinksOpened} p={15}>{insuranceLinks}</Collapse>

              <UnstyledButton className={classes.link} onClick={toggleCreditProductLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Mortages
                  </Box>
                  <IconChevronDown size={16} color={theme.colors.blue[6]} />
                </Center>
              </UnstyledButton>
              <Collapse in={creditproductlinksOpened} p={15}>{creditProductLinks}</Collapse>
             
              <Divider my="sm" />
                
              <Flex justify="space-between" align="center" px="md">
              <div>
                <Group gap="xs">
                  <IconPhoneDone size={16} />
                  <Text size="sm">6888 8888</Text>
                </Group>
                <Group gap="xs" mt={4}>
                  <IconClock size={16} />
                  <Text size="sm">Mon - Fri, 9:00am - 7:00pm</Text>
                </Group>
              </div>

              <ActionIcon
                variant="default"
                onClick={toggleColorScheme}
                size="lg"
                radius="xl"
                aria-label="Toggle color scheme"
              >
                {mounted && (colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />)}
              </ActionIcon>
            </Flex>
            
            
            </ScrollArea>
          </Drawer>
        </Box>
      );
    }