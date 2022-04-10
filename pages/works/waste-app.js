import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TousAntiGaspi">
    <Container>
      <Title>
        Tous Anti Gaspi<Badge>2022-</Badge>
      </Title>
      <P> 
        An android app to manage all the food in your house !
        The app sends a notification when the food is nearing its expiry date.
        You can scan bar code of food for add it directly in the app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Source</Meta>
          <Link href="https://github.com/CorentinRuiz/TousAntiGaspi">
          https://github.com/CorentinRuiz/TousAntiGaspi <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tousAntiGaspi/Accueil.png" alt="CheckItLogo" />
      <WorkImage src="/images/works/tousAntiGaspi/myProducts.png" alt="CheckItMainPage" />
      <WorkImage src="/images/works/tousAntiGaspi/myProductWithSome.png" alt="SigIn" />
    </Container>
  </Layout>
)

export default Work