import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Checkit">
    <Container>
      <Title>
        Check It <Badge>2020-2021</Badge>
      </Title>
      <P>
        It's the project of my final year of DUT Informatique. 
        It's an web app who wants to do something like Trello.
        The app allow to create some category and in this category create some task etc...
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Source</Meta>
          <Link href="https://github.com/CorentinRuiz/To-do-list">
          https://github.com/CorentinRuiz/To-do-list <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS, Express, MySql</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chek_it.png" alt="CheckItLogo" />
      <WorkImage src="/images/works/check-it/mainpage.png" alt="CheckItMainPage" />
      <WorkImage src="/images/works/check-it/sigin.png" alt="SigIn" />
    </Container>
  </Layout>
)

export default Work