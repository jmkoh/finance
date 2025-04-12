'use client';
import cx from 'clsx';
import { Button, Container, Overlay, Text, Title, Box, TextInput, Textarea, Group, SimpleGrid, ThemeIcon, BackgroundImage, Center } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from '@tabler/icons-react';
import { useForm } from '@mantine/form';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Tailored Financial Solutions',
    description:
      'We understand that every financial journey is unique—our services are customized to match your personal goals and needs.',
  },
  {
    icon: IconUser,
    title: 'Simple, Transparent Process',
    description:
      'No hidden fees or complex jargon. We make financial services easy to understand and totally transparent',
  },
  {
    icon: IconCookie,
    title: 'Secure & Trusted by Thousands',
    description:
      'With top-tier security and a growing community of satisfied clients, your trust is our top priority',
  },
  {
    icon: IconLock,
    title: 'Expert Support, Anytime',
    description:
      'Our dedicated team is here to guide you through every step—whether it’s mortgages, savings, or insurance',
  },
  {
    icon: IconMessage2,
    title: 'Innovative Digital Tools',
    description:
      'Manage everything from your dashboard with modern tools that keep you informed and in control—anytime, anywhere',
  },
];


interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}
export function Feature({ icon: Icon, title, description }: FeatureProps) {
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

export default function Home() {
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
          At MyBrand, we believe financial services should be simple, transparent, and built around your life goals. Whether you're planning to buy your first home, protect your assets, or manage everyday expenses—we're here to make it happen.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>

        </div>
      </div>
    </div>

    <Container className={classes.wrapper2}>
      <Title className={classes.title2}>Smart. Simple. Secure.</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description2}>
        At MyBrand, we provide modern financial solutions designed to grow with you. Whether you're investing, saving, or securing your future—we're here to guide you with clarity and confidence.n.
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