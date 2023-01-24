import React from "react";
import Section from "../components/Section";
import CustomeDivider from "../components/CustomeDivider";
import CustomHeading from "../components/CustomHeading";
import {
  Box,
  Image,
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Heading,
  FormControl,
  FormLabel,
  Button,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import email from "../assets/images/email.png";
import useInput from "../hooks/useInput";

const Contact = () => {
  const { colorMode } = useColorMode();
  const [isDesktopSize] = useMediaQuery("(min-width: 62em)");
  const [mail, mailBind] = useInput();
  const [message, messageBind] = useInput();

  return (
    <Section>
      <CustomeDivider />
      <CustomHeading heading="Contact" />

      <Box
        mt={10}
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="lg"
        boxShadow="inset 0px -69px 50px -26px rgba(0,0,0,0.1)"
      >
        {isDesktopSize && <Image src={email} width="100%" maxW="lg" />}

        <Card as="form" maxW={{ base: "lg", md: "sm" }} width="100%">
          <CardHeader>
            <Heading as="h3" size="md" fontWeight="semibold">
              Send me a message..
            </Heading>
          </CardHeader>

          <CardBody
            as="form"
            action="https://formsubmit.co/neiledwarddelacruz1999@gmail.com"
            method="POST"
          >
            <FormControl pb={4}>
              <FormLabel>Email:</FormLabel>
              <Input
                type="email"
                name="email"
                aria-label="Input your email address"
                required
                {...mailBind}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Message:</FormLabel>
              <Textarea
                id="textarea"
                name="message"
                height={40}
                aria-label="Input message you want to send"
                {...messageBind}
              ></Textarea>
            </FormControl>

            <Button
              type="submit"
              size="md"
              mt={6}
              bgColor="blue.500"
              color="white"
              _hover={{ bgColor: colorMode === "light" && "blue.300" }}
              aria-label="Click to send email"
              rightIcon={<EmailIcon />}
            >
              Send email
            </Button>
          </CardBody>
        </Card>
      </Box>
    </Section>
  );
};

export default Contact;
