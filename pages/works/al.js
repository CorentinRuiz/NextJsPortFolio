import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Invest Bank">
    <Container>
      <Title>
        Investment Bank <Badge>2023</Badge>
      </Title>
      <P>
      Creation of an architecture for an investment bank aiming to enable its clients to conduct transactions in the Cayman Islands. 
      This unique project allows for the exploration of the architecture lifecycle and the migration from a monolith to a microservices architecture by applying certain patterns.
      Patterns such as CQRS, Event Sourcing, Circuit Breaker and Saga are used to ensure the project's success.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nest JS, Redis, Postgres, Python, Flask </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/al/archi-al.png" alt="ArchiAl" />
    </Container>
  </Layout>
)

export default Work
