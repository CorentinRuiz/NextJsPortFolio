import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PassAndSafe">
    <Container>
      <Title>
        Pass & Safe <Badge>2020</Badge>
      </Title>
      <P> 
        An desktop app to manage all your password !
        The app detect when an password is too weak and 
        proposes to modify it with a password generated randomly or 
        with a password generated thanks to words that the users impose
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows / Mac Os / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Java FX</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Pass&Safe/pass.png" alt="CheckItLogo" />
    </Container>
  </Layout>
)

export default Work