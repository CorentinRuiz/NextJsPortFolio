import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RIML Project">
    <Container>
      <Title>
        RIML Project<Badge>2023</Badge>
      </Title>
      <P>
        Analysis tools for open source projects, enabling the identification of
        strategies and best practices for effectively integrating and using an
        event bus in distributed systems. Tools created using Python scripting
        with the GitHub API.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Source</Meta>
          <Link href="https://github.com/CorentinRuiz/RIML">
            https://github.com/CorentinRuiz/RIML <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Bash, Github API </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/riml/riml-tools.png" alt="RIMLTools" />
    </Container>
  </Layout>
)

export default Work
