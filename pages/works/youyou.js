import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="YouyouComparator">
    <Container>
      <Title>
        Youyou Comparator<Badge>2018</Badge>
      </Title>
      <P> 
      My first app of my life.
      An application that compares the best pc for a given price.
      This project was the project for the ISN speciality of the "Baccalauréat Scientifique".
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Window / MacOs / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, MySQL, HTML/CSS </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/youyou/youyou.png" alt="youyou website" />
    </Container>
  </Layout>
)

export default Work
