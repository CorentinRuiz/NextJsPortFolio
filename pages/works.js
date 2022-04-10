import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumbCheckIt from '../public/images/works/chek_it.png'
import thumbMyPortfolio from '../public/images/works/my-portfolio.png'
import thumbPassAndSafe from '../public/images/works/pass-and-safe.png'
import thumbSomeJava from '../public/images/works/some-java.png'
import thumbTousAntiGaspi from '../public/images/works/tous-anti-gaspi.png'
import thumbYouYou from '../public/images/works/youyou.png'

const Works = () => (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       My Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="waste-app" title="TousAntiGaspi (In progress)" thumbnail={thumbTousAntiGaspi}>
          An anti-waste app develop on android with an API in node JS (Mongo DB)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="java-project" thumbnail={thumbSomeJava} title="Some Java Project (In progress)">
            Some java project develop for the school
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="check-it"
            title="Check it (Finished)"
            thumbnail={thumbCheckIt}
          >
            An app to manage our day, weeks, years (To-Do List manager).
            The interface was develop in React and an API in node JS (MySql)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="myportfolio"
            title="My Portfolio (Finished)"
            thumbnail={thumbMyPortfolio}
          >
           This website is develop in Next JS :) .
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="pass-and-safe" thumbnail={thumbPassAndSafe} title="Pass & Safe (Finished)">
            An desktop app to manage our password. The application detects if the password is too weak and offers you a different way to recreate a better password.
          </WorkGridItem>
        </Section>

      </SimpleGrid>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="youyou" thumbnail={thumbYouYou} title="Youyou Comparator">
            My first web application when I was in High School. It was an app to compare best computer with a small amount of data.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
)

export default Works