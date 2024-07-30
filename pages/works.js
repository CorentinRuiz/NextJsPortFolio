import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumbCheckIt from '../public/images/works/chek_it.png'
import thumbSoa from '../public/images/works/soa.png'
import thumbSnap from '../public/images/works/poly-snap.png'
import thumbPassAndSafe from '../public/images/works/pass-and-safe.png'
import thumbSomeJava from '../public/images/works/some-java.png'
import thumbTousAntiGaspi from '../public/images/works/tous-anti-gaspi.png'
import thumbYouYou from '../public/images/works/youyou.png'
import thumbAL from '../public/images/works/al.png'
import thumbK8S from '../public/images/works/k8s.png'
import thumbRiml from '../public/images/works/riml.jpeg'

const Works = () => (
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      My Works
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem id="soa" title="Mars-y SOA project" thumbnail={thumbSoa}>
          Space base management project in microservices architecture with
          Kafka.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="poly-snap" title="Poly Snap" thumbnail={thumbSnap}>
          Creation of a simplified Snapchat replica as a cloud-native application on Google Cloud Platform.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="al" title="Investment Bank" thumbnail={thumbAL}>
        Creation of an architecture for an investment bank aiming to enable its clients to conduct transactions in the Cayman Islands.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="k8s" title="Poly metrie" thumbnail={thumbK8S}>
        Creation of a very simplified copy of mediametrie API to learn k8s, IaC, GitOps, Prometheus, Grafana.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem id="riml" title="RIML Project" thumbnail={thumbRiml}>
        Creation of a project analyze tools to detect good practices in a microservices architecture. 
        It was for the course of Re-engineering and maintenance of software.
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
        <Section>
          <WorkGridItem
            id="waste-app"
            title="TousAntiGaspi"
            thumbnail={thumbTousAntiGaspi}
          >
            An anti-waste app develop on android with an API in node JS (Mongo
            DB)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="java-project"
            thumbnail={thumbSomeJava}
            title="Some Java Project "
          >
            Some java project develop for the school
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="check-it" title="Check it" thumbnail={thumbCheckIt}>
            An app to manage our day, weeks, years (To-Do List manager). The
            interface was develop in React and an API in node JS (MySql)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="pass-and-safe"
            thumbnail={thumbPassAndSafe}
            title="Pass & Safe "
          >
            An desktop app to manage our password. The application detects if
            the password is too weak and offers you a different way to recreate
            a better password.
          </WorkGridItem>
        </Section>

        <WorkGridItem
          id="youyou"
          thumbnail={thumbYouYou}
          title="Youyou Comparator"
        >
          My first web application when I was in High School. It was an app to
          compare best computer with a small amount of data.
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </Container>
)

export default Works
