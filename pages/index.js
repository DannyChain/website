import React from "react";
import {
  Button,
  Box,
  VStack,
  Text,
  Link,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import { TwitterLogo } from "phosphor-react";
import ProjectCard from "@/components/project-card";
import { getTable } from "@/lib/airtable";

const Home = ({ projects }) => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <Heading size="xl">Hey, I'm Danny 👋</Heading>
            <VStack>
              <Text>
                Hello guys, my name is Daniela, and I am from Brazil. I'm a "discreet" entrepreneur, a trader, a tech enthusiast, and a hobbyist developer.
              </Text>
              <Text>
                In my spare time, I publish some art pieces on <Link
                  variant="text"
                  href="https://nftshowroom.com/dannychain/gallery/?r=dannychain"
                  isExternal
                >
                  NFT Showroom
                </Link>  and I also develop <Link
                  variant="text"
                  href="https://github.com/DannyChain"
                  isExternal
                >
                  awkward stuff
                </Link>.
              </Text>
            </VStack>
            <Link href="https://twitter.com/Danny_Chain" isExternal>
              <Button
                colorScheme="blue"
                rounded="xl"
                size="lg"
                leftIcon={<TwitterLogo weight="fill" />}
                mt={4}
              >
                Follow me on Twitter
              </Button>
            </Link>
          </VStack>
        </Section>
        <Section>
          <VStack align="start" spacing={8}>
            <Heading size="lg">Projects</Heading>

            <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
              {projects.map((projects) => (
                <ProjectCard
                  key={projects.id}
                  name={projects.fields.name}
                  description={projects.fields.description}
                  logo={projects.fields.logo}
                  link={projects.fields.link}
                  type={projects.fields.type}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export async function getStaticProps() {
  const projects = await getTable("Projects");

  return {
    props: {
      projects,
    },
    revalidate: 600,
  };
}

export default Home;
