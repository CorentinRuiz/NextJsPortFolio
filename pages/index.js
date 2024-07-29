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
               Hello, I&apos;m a student and a software engineer in apprenticeship.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Corentin R.
                    </Heading>
                    <p>Student engineer passionate about IT</p>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3"
                variant="section-title" mb={4}>
                    About Me
                </Heading>
               <Paragraph> I am currently in my last year of engineering school in Nice and am looking for a contract as a software engineer or cloud engineer.
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
                    <BioYear>2021-Currently</BioYear>
                    Soon graduate with an engineering degree from Polytech Nice Sophia and currently working at PRO BTP GROUPE as a software engineering apprentice.
                </BioSection>
            </Section>
            <Section>
                <Heading as="h3"
                    variant="section-title" mb={4}>
                        Hobbies 💙
                </Heading>
                Music, Read, Sport and IT things.
            </Section>
        </Container>
        )
}

export default Page