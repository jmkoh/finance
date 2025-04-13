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
  Autocomplete,
  SimpleGrid,
  Center,
  Card,
  Divider,
  Paper,
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Box, 
  Stack
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import classes from './home-loan.module.css';
import { IconCalendarWeek, IconHome } from '@tabler/icons-react';

export default function HomeLoan() {
  const [active, setActive] = useState(0);

  type FormValues = {
    enquiryType: string;
    otpDate: Date | null;
    lockIn: string;
    lender: string;
    propertyType: string;
    completionStatus: string;
    ratesPreference: string;
    borrowAmount: number | '';
    propertyLease: string;
    spareFund: number | '';
    sellIn3Years: string;
    surname: string;
    givenName: string;
    email: string;
    contactNumber: string;
    gender: string;
    lawFirmContact: string;
    bankingCustomer: string;
    referralCode: string;
    remarks: string;
  };

  const form = useForm<FormValues>({
    initialValues: {
      enquiryType: '',
      otpDate: null,
      lockIn: '',
      lender: '',
      propertyType: '',
      completionStatus: '',
      ratesPreference: '',
      borrowAmount: '',
      propertyLease: '',
      spareFund: '',
      sellIn3Years: '',
      surname: '',
      givenName: '',
      email: '',
      contactNumber: '',
      gender: '',
      lawFirmContact: '',
      bankingCustomer: '',
      referralCode: '',
      remarks: '',
    },

    validate: (values) => {
      const errors: Partial<Record<keyof FormValues, string>> = {};

      if (active === 0) {
        if (!values.enquiryType) errors.enquiryType = 'Please select an option';
      }

      if (active === 1) {
        if (values.enquiryType === 'Option 1' && !values.otpDate) {
          errors.otpDate = 'Date is required';
        }
        if (values.enquiryType === 'Option 2') {
          if (!values.lockIn) errors.lockIn = 'Choose Yes or No';
          if (!values.lender) errors.lender = 'Select one';
        }
        if (!values.propertyType) errors.propertyType = 'Required';
        if (!values.completionStatus) errors.completionStatus = 'Required';
        if (!values.ratesPreference) errors.ratesPreference = 'Required';
        if (!values.borrowAmount) errors.borrowAmount = 'Enter borrow amount';
      }

      if (active === 2) {
        ['surname', 'givenName', 'email', 'contactNumber', 'gender', 'lawFirmContact'].forEach((field) => {
          if (!values[field as keyof FormValues]) {
            errors[field as keyof FormValues] = 'Required';
          }
        });
      }

      return errors;
    },
  });

  const nextStep = () => {
    if (!form.validate().hasErrors) {
      setActive((current) => (current < 4 ? current + 1 : current));
    }
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (active === 3) {
      console.log('Submitting form...', form.values);
    } else {
      nextStep();
    }
  };

  const enquiryOptions = [
    { name: 'Option 1', description: 'I have paid a deposit for a property and would like the best home loan.' },
    { name: 'Option 2', description: 'I am looking to switch my existing home loan to a better deal.' },
    { name: 'Option 3', description: 'I would like a bank to approve my home loan before I make an offer for a property.' },
  ];

  const cards = enquiryOptions.map((item) => (
    <Card key={item.name} withBorder shadow="sm" p="lg" radius="md" style={{ width: 450 }}>
      <Radio
        value={item.name}
        label={<Text fw={500}>{item.description}</Text>}
        size="md"
        styles={{ label: { whiteSpace: 'normal' } }}
      />
    </Card>
  ));
  const labels = {
    enquiryType: 'Enquiry Type',
    otpDate: 'OTP or S&P Date',
    lockIn: 'Within Lock-in Period',
    lender: 'Current Mortgage Lender',
    propertyType: 'Property Type',
    completionStatus: 'Completion Status',
    ratePreference: 'Rates Preference',
    borrowAmount: 'Borrow Amount',
    lease: 'Property Lease',
    spareFund: 'Spare Fund After Purchase',
    sellPlan: 'Planning to Sell Property',
    surname: 'Surname',
    givenName: 'Given Name',
    email: 'Email',
    phone: 'Contact Number',
    gender: 'Gender',
    lawFirmContact: 'Law Firm Contact Consent',
    bankingCustomer: 'Banking Customer Tier',
    referralCode: 'Referral Code',
    remarks: 'Remarks',
  };

  const Summary = () => (
    <Box>
      <Title order={3} mb="lg">Summary</Title>
      <Stack>
        {Object.entries(form.values).map(([key, value]) => (
          value && (
            <Group key={key} justify="space-between">
              <Text fw={500}>{labels[key]}</Text>
              <Text>{String(value)}</Text>
            </Group>
          )
        ))}
      </Stack>
    </Box>
  );
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />
        <Container style={{ position: 'relative', zIndex: 2, color: 'white' }} size="sm">
          <Group align="center" spacing="xs">
            <IconHome size={32} />
            <Title order={1} style={{ fontWeight: 700 }}>Home Loans</Title>
          </Group>
          <Text size="lg" mt="md">
            Mortgage solutions tailored for residential property buyers. Explore the best deals, eligibility, and repayment options.
          </Text>
        </Container>
      </div>

      <Container size="md" py="xl">
        <Paper p="xl" shadow="md" radius="md" withBorder>
          <form onSubmit={handleSubmit}>
            <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} size="md" color="indigo">
              <Stepper.Step label="Enquiry Type" description="Your goal">
                <Radio.Group label="Step 1: Choose the type of enquiry" {...form.getInputProps('enquiryType')} spacing="lg">
                  <Flex wrap="wrap" justify="center" gap="md" pt="md">{cards}</Flex>
                </Radio.Group>
              </Stepper.Step>

              <Stepper.Step label="Enquiry Details" description="Details">
                {form.values.enquiryType === 'Option 1' && (
                  <DatePickerInput label="OTP or S&P Date" placeholder="Choose date" valueFormat="DD MMM YYYY" leftSection={<IconCalendarWeek size={16} />} required style={{ width: 300 }} {...form.getInputProps('otpDate')} />
                )}

                {form.values.enquiryType === 'Option 2' && (
                  <>
                    <Radio.Group label="Are you within a lock-in period?" required {...form.getInputProps('lockIn')}>
                      <Group mt="xs">
                        <Radio value="yes" label="Yes" />
                        <Radio value="no" label="No" />
                      </Group>
                    </Radio.Group>

                    <Autocomplete label="Which mortgage lender is your loan with?" placeholder="Select lender" data={[
                      'Bank of China', 'Bank of East Asia', 'CIMB', 'Citibank', 'DBS', 'Hong Leong Finance',
                      'HSBC', 'Maybank', 'OCBC', 'RHB Bank', 'Sing Investments & Finance', 'Singapura Finance',
                      'Standard Chartered', 'UOB', 'ANZ', 'Ethoz', 'SBI', 'ValueMax', 'Lei Shing Hong', 'Goldbell Financial Services', 'Others',
                    ]} required {...form.getInputProps('lender')} />
                  </>
                )}

                <Select label="Property Type" data={["Private", "HDB"]} required {...form.getInputProps('propertyType')} />
                <Select label="Completion Status" data={["Completed", "Under Construction"]} required {...form.getInputProps('completionStatus')} />

                <Select label="Rates Preference" data={["No Preference", "Fixed", "Floating"]} required {...form.getInputProps('ratesPreference')} />

                {form.values.ratesPreference === 'Fixed' && (
                  <Text mt="sm" size="sm">
                    Interest rates are set at a rate that is normally higher than floating rates. The rate will not change for a set period, protecting you from interest rate increases.
                  </Text>
                )}
                {form.values.ratesPreference === 'Floating' && (
                  <Text mt="sm" size="sm">
                    The interest rate can rise or fall. Lenders give notice before changes. Partial prepayments are often allowed.
                  </Text>
                )}

                <NumberInput label="Borrow Amount" prefix="$" required {...form.getInputProps('borrowAmount')} />
                <TextInput label="Property Lease" placeholder="e.g. Freehold, 99 years" {...form.getInputProps('propertyLease')} />
                <NumberInput label="Spare fund after purchase" prefix="$" {...form.getInputProps('spareFund')} />
                <Select label="Selling in next 3 years?" data={["Yes, in 1 year", "Yes, in 2 years", "Yes, in 3 years", "No"]} {...form.getInputProps('sellIn3Years')} />
              </Stepper.Step>

              <Stepper.Step label="Contact Details" description="Final step">
                <SimpleGrid cols={2} spacing="md">
                  <TextInput label="Surname" required {...form.getInputProps('surname')} />
                  <TextInput label="Given Name" required {...form.getInputProps('givenName')} />
                  <TextInput label="Email" required type="email" {...form.getInputProps('email')} />
                  <TextInput label="Contact Number" required {...form.getInputProps('contactNumber')} />
                  <Select label="Gender" data={["Male", "Female", "Other"]} required {...form.getInputProps('gender')} />
                  <Select label="Would you like a law firm to contact you?" data={["Yes", "No"]} required {...form.getInputProps('lawFirmContact')} />
                  <Select label="Are you a priority/premier/private banking customer?" data={["Yes", "No"]} {...form.getInputProps('bankingCustomer')} />
                  <TextInput label="Referral Code" {...form.getInputProps('referralCode')} />
                </SimpleGrid>
                <Textarea label="Remarks" minRows={3} mt="md" {...form.getInputProps('remarks')} />
              </Stepper.Step>

              <Stepper.Step label="Confirmation">
                 <Summary />
              
                <pre>{JSON.stringify(form.values, null, 2)}</pre>
               
              </Stepper.Step>

              <Stepper.Completed>
                <Text>Form completed. Thank you for your submission!</Text>
              </Stepper.Completed>
            </Stepper>

            <Divider my="xl" />

            <Group justify="center">
              {active > 0 && (
                <Button variant="default" onClick={prevStep} size="md">Back</Button>
              )}
              <Button type="submit" size="md">{active === 3 ? 'Submit' : 'Next step'}</Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </>
  );
}