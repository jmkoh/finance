'use client';

import { useState } from 'react';
import {
  Stepper,
  Button,
  Group,
  Overlay,
  Title,
  Container,
  Text,
  Radio,
  Flex,
  
  Center,
  Autocomplete,
  SimpleGrid

} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import classes from './home-loan.module.css';
import { IconCalendarWeek } from '@tabler/icons-react';

export default function HomeLoan() {
  const data = [
    { name: 'Option 1', description: 'I have paid a deposit for a property and would like the best home loan.' },
    { name: 'Option 2', description: 'I am looking to switch my existing home loan to a better deal.' },
    { name: 'Option 3', description: 'I would like a bank to approve my home loan before I make an offer for a property.' },
  ];

  const [active, setActive] = useState(0);
  const [value, setValue] = useState<string | null>(null);
  const [attemptedNext, setAttemptedNext] = useState(false);

  const [option1Date, setOption1Date] = useState<Date | null>(null);
  const [option2Select, setOption2Select] = useState<string | undefined>(undefined);

  const [option2Radio, setOption2Radio] = useState<string | null>(null);

  const handlePrev = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const validateStep = () => {
    if (active === 0) {
      if (!value) return false;
      if (value === 'Option 1' && !option1Date) return false;
      if (value === 'Option 2' && (!option2Select || !option2Radio)) return false;
    }
    return true;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttemptedNext(true);

    if (!validateStep()) return;

    if (active === 2) {
      console.log('Submitting form...');
      // Add your form submission logic here
    } else {
      setAttemptedNext(false);
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name} style={{ width: 450 }}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          {/*
          <Text className={classes.label}>{item.name}</Text>
          */}
          <Text className={classes.label}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>Home Loans</Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              Offers mortgage solutions for individuals purchasing residential properties, detailing the loan terms,
              eligibility, and repayment options
            </Text>
          </Container>
        </div>
      </div>
    <p>
        
    </p>
      <Container fluid h={50}>
        <form onSubmit={handleFormSubmit}>
          <Stepper color="indigo" radius="xs" active={active} onStepClick={setActive} allowNextStepsSelect={false}>
            <Stepper.Step label="First step" description="Choose your enquiry type">
              <Radio.Group
                value={value}
                onChange={setValue}
                label="Step 1: Pick one option to proceed"
                description="Choose an option that fits your enquiry"
                error={attemptedNext && !value ? 'Please select an option' : false}
              >
                <Flex wrap="wrap" justify="center" gap="md" pt="md">
                  {cards}
                </Flex>
              </Radio.Group>

              <Text fz="xs" mt="md">
                CurrentValue: {value || '–'}
              </Text>

              <Center>
                {value === 'Option 1' && (
                  <Group>
                    <DatePickerInput
                      label="OTP or S&P Date"
                      placeholder="Choose date"
                      valueFormat="DD MMM YYYY"
                      value={option1Date}
                      onChange={setOption1Date}
                      error={attemptedNext && !option1Date ? 'Date is required' : false}
                      leftSection={<IconCalendarWeek size={16} />}
                      size="lg"
                      required 
                      w={400}
                    />
                  </Group>
                )}

                {value === 'Option 2' && (
                   <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                    <Radio.Group
                      name="yes-no"
                      label="Are you within a lock-in period?"
                      value={option2Radio}
                      onChange={setOption2Radio}
                      error={attemptedNext && !option2Radio ? 'Choose Yes or No' : false}
                      required
                    >
                      <Group mt="xs">
                        <Radio value="yes" label="Yes" />
                        <Radio value="no" label="No" />
                      </Group>
                    </Radio.Group>
                    
                    <Autocomplete
                      label="Which mortgage lender is your loan with?"
                      placeholder="Select"
                      data = {[
                        'Bank of China',
                        'Bank of East Asia',
                        'CIMB',
                        'Citibank',
                        'DBS',
                        'Hong Leong Finance',
                        'HSBC',
                        'Maybank',
                        'OCBC',
                        'RHB Bank',
                        'Sing Investments & Finance',
                        'Singapura Finance',
                        'Standard Chartered',
                        'UOB',
                        'ANZ',
                        'Ethoz',
                        'SBI',
                        'ValueMax',
                        'Lei Shing Hong',
                        'Goldbell Financial Services',
                        'Others'
                      ]}                      
                      value={option2Select}
                      onChange={setOption2Select}
                      error={attemptedNext && !option2Select ? 'Select one' : false}
                      required
                      
                    />
                    
                  </SimpleGrid>
                )}
              </Center>
            </Stepper.Step>

            <Stepper.Step label="Second step" description="Verify email">
              Step 2 content: Verify email
            </Stepper.Step>

            <Stepper.Step label="Final step" description="Get full access">
              Step 3 content: Get full access
            </Stepper.Step>

            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>

          <Group justify="center" mt="xl">
            {active > 0 && (
              <Button variant="default" onClick={handlePrev}>
                Back
              </Button>
            )}

            <Button type="submit">{active === 2 ? 'Submit' : 'Next step'}</Button>
          </Group>
        </form>
      </Container>
    </>
  );
}
