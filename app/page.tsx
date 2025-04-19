'use client';
//import cx from 'clsx';
import { useForm } from '@mantine/form';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Container, Overlay, Text, Title, Box, TextInput, Textarea, Group, SimpleGrid, ThemeIcon, Paper, useMantineTheme  } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
//import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';



import { MOCKDATA } from './data/mockdata'; // adjust path if needed


interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}
function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}
// Carousel card
interface CardProps {
  image: string;
  title: string;
  category: string;
}
function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title_carousel}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Smart Investing Strategies for 2025',
    category: 'investment',
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'How to Build Credit as a First-Time Borrower',
    category: 'credit',
  },
  {
    image:
      'https://images.unsplash.com/photo-1639189702833-8de5ecf2ca8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Top Mortgage Tips for Home Buyers',
    category: 'mortgage',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Understanding Your Insurance Options',
    category: 'insurance',
  },
  {
    image:
      'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Budgeting Hacks to Maximize Savings',
    category: 'personal finance',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'How Fintech is Shaping the Future of Banking',
    category: 'technology',
  },
];


const statsdata = [
  {
    title: 'Page views',
    stats: '456,133',
    description: '24% more than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'New users',
    stats: '2,175',
    description: '13% less compared to last month, new user engagement up by 6%',
  },
  {
    title: 'Completed orders',
    stats: '1,994',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
];

export default function Home() {
// stats
const stats = statsdata.map((stat) => (
  <div key={stat.title} className={classes.stat}>
    <Text className={classes.count_stats}>{stat.stats}</Text>
    <Text className={classes.title_stats}>{stat.title}</Text>
    <Text className={classes.description_stats}>{stat.description}</Text>
  </div>
));

// cards
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  return (
    <>
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Your Trusted Partner in Financial Growth

        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          At Wealth Matters, we believe financial services should be simple, transparent, and built around your life goals. Whether you're planning to buy your first home, protect your assets, or manage everyday expenses—we're here to make it happen.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>

        </div>
      </div>
    </div>
   {/* Pointers Section */}
    <Container className={classes.wrapper2}>
      <Title className={classes.title2}>Smart. Simple. Secure.</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description2}>
        At Wealth Matters, we provide modern financial solutions designed to grow with you. Whether you're investing, saving, or securing your future—we're here to guide you with clarity and confidence.n.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
{/* Stats Section */}
    <Container fluid pt={20} pb={20} p={0}>

<div className={classes.root}>{stats}</div>
</Container>

{/* Carousel Section */}
    <Container fluid pb={50}>
    <Carousel
      slideSize={{ base: '100%', sm: '33.33%' }}
      slideGap={{ base: 2, sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
    </Container>
 
   
          {/* Contact Form Section */}
          <div className={classes.wrapper_contact}>
          <form onSubmit={form.onSubmit(() => {})}>     
          <Container size="sm" my={60}>
          <Title c="white" order={2} ta="center" mb="xl">
            Contact us for a non-obligatory Mortgage Consultation.

          </Title>
          <Box maw={800} mx="auto">

        

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    
            
          </Box>
        </Container>
        </form>
        </div>
      </>
  );
}