import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Poly Snap">
    <Container>
      <Title>
        Poly Snap <Badge>2023</Badge>
      </Title>
      <P>
      Creation of a simplified Snapchat replica as a cloud-native application on Google Cloud Platform. 
      Microservices architecture developed using Node.js and Express (and React js front-end). Utilized PaaS, FaaS, CDN, Bucket, Pub/Sub, and Load Balancer. 
      Gained knowledge of cloud-native technologies and justified design choices to maximize load handling.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React JS, Node JS, Express, GCP, Firestore, Redis, PostgreSQL </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/PolySnap/DiagSnap.png" alt="Diag-archi" />
    </Container>
  </Layout>
)

export default Work