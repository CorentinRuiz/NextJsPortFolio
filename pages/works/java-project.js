import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Some Java Projects">
    <Container>
      <Title>
       Some of my java project<Badge>2021-2023</Badge>
      </Title>
      <P>
      This year of study made me develop several projects in java: <br/>
        - A citadels game play only by AI that we develop <br/>
        - A poker game that compares the hands of different participants <br/>
        - A boat race game or obstacles is added every week. 
        - A Cookie Factory it was an API to learn testing (cucmber, Junit, Mockito, etc.) and to learn Spring Boot
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/SomeJava/view.png" alt="CheckItLogo" />
      <WorkImage src="/images/works/SomeJava/citadelle.jpeg" alt="CheckItMainPage" />
    </Container>
  </Layout>
)

export default Work
