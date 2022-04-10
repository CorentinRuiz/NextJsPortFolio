import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My Portfolio">
    <Container>
      <Title>
        My Portfolio <Badge>2022-</Badge>
      </Title>
      <P>
      I created this portfolio first of all to be able to exhibit my CV in an interactive way and also to learn Next.Js
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github Source</Meta>
          <Link href="https://github.com/CorentinRuiz/NextJsPortFolio">
          https://github.com/CorentinRuiz/NextJsPortFolio<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.Js</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
