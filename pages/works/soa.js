import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SOA Project">
    <Container>
      <Title>
        Mars-y SOA project <Badge>2023</Badge>
      </Title>
      <P>
      Space base management project. Learning microservices architecture by creating 15 microservices in NestJS. All services run in Docker containers.
      Exploring patterns such as CQRS and event-driven architecture with Apache Kafka.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nest JS, Kafka, K6, Redis, PostgreSQL, Docker</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/soa.png" alt="SOA" />
      <WorkImage src="/images/works/SOA/soa-archi.png" alt="SOA-Diag-archi" />
    </Container>
  </Layout>
)

export default Work