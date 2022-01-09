import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { FaRegCaretSquareRight } from "react-icons/fa";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { FaTwitter, FaCodepen, FaDiscord, FaEnvelopeSquare } from "react-icons/fa";

const Business = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m A Full-Stack Developer Who Is A Movie Junkie!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            If You Work, It Will Work.
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
      </Box>

      <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/nawrasse.png"
            alt="Profile image"
          />
       </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Business Offers
        </Heading>
        <Paragraph>
          I&apos;m Currently Open To Freelance And Actively Looking For A
          Full-Time Job Opportunties, So If You Like What You&apos;ve Seen
          Please Don&apos;t Hesitate To Get In Touch! If You Have Any Questions
          Or Would Just Like To Say Hi, You Can Dm Me On Any Of My Socials Below
          Or Send Me A Friend Request In Discord, I&apos;ll Delighted To Get
          Back To You As Soon As Possible.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/images/cv.pdf">
            <Button rightIcon={<FaRegCaretSquareRight />} colorScheme="teal">
              Download My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://codepen.io/NawrasseDahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaCodepen} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaTwitter} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:nawrassehimself@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaEnvelopeSquare} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://discord.com/users/878309088126197860"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaDiscord} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Business;
