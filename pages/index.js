import { Container,Box, Heading, Link, useColorModeValue, Button } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} align="center" mt={12} mb={5}>
               Hello, I&apos;m a student and a Full-Stack Developer in apprenticeship.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Corentin R.
                    </Heading>
                    <p>Student Developer passionate about IT</p>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3"
                variant="section-title" mb={4}>
                    About Me
                </Heading>
               <Paragraph> I am currently in my first year of engineering school in Nice and am looking for a 2-year apprenticeship contract to learn more about computer development in a company.
                           I am rigorous and persevering, I integrate easily into a team and I am quickly operational.
                           I am passionate about IT and would like to learn more and strengthen my skills.
                </Paragraph>
                <Box align="center" my={5}>
                    <NextLink href="/works">
                        <Button colorScheme="blue"
                        rightIcon={<ArrowForwardIcon/>}>My works</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3"
                variant="section-title" mb={4}>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Montélimar (France).
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    High School Diploma of Science (Baccalauréat Scientifique).
                </BioSection>
                <BioSection>
                    <BioYear>2020-2021</BioYear>
                    Second year of bachelor's degree in IT (DUT Informatique).
                </BioSection>
                <BioSection>
                    <BioYear>Currently</BioYear>
                    Bachelor's Student in IT at Polytech Nice Sophia and work at Altrnativ.com as Mobile and Web Developer (Apprenticeship).
                </BioSection>
            </Section>
            <Section>
                <Heading as="h3"
                    variant="section-title" mb={4}>
                        Hobbies 💙
                </Heading>
                Music, Piano, Read and IT things.
            </Section>
        </Container>
        )
}

export default Page