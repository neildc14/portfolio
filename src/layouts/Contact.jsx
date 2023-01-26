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
    <Section id="contact">
      <CustomeDivider />
      <CustomHeading heading="Contact" />

      <Box
        mt={10}
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        {isDesktopSize && (
          <div data-aos="flip-up">
            <Image src={email} width="100%" maxW="lg" />{" "}
          </div>
        )}

        <Card
          maxW={{ base: "lg", md: "sm" }}
          width="100%"
          borderColor="gray.300"
          borderWidth="1px"
          data-aos="flip-down"
        >
          <CardHeader>
            <Heading as="h3" size="md" fontWeight="semibold">
              Send me a message..
            </Heading>
          </CardHeader>

          <CardBody>
            <form
              action="https://formsubmit.co/0b0b2cc2b07727d0fda5b0f785573caa"
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
                _hover={{ bgColor: "blue.300" }}
                aria-label="Click to send email"
                rightIcon={<EmailIcon />}
              >
                Send email
              </Button>
            </form>
          </CardBody>
        </Card>
      </Box>
    </Section>
  );
};

export default Contact;
