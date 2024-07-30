import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Poly metrie">
    <Container>
      <Title>
        Poly metrie <Badge>2023-2024</Badge>
      </Title>
      <P>
      Creation of a very simplified copy of mediametrie API to learn k8s, IaC, GitOps, Prometheus, Grafana.
      Learn and compare difference between k8s,docker-compose and docker swarm.
      Learn and compare difference between Terraform and Ansible.
      And finally learn the monitoring of k8s cluster with Prometheus and Grafana.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ macOS /Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Fast API, SQLAlchemy, Postgres, Redis, Helm, ArgoCD, Terraform, Ansible, Prometheus, Grafana, ELK </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/k8s/grafana.png" alt="ArchiAl" />
    </Container>
  </Layout>
)

export default Work
