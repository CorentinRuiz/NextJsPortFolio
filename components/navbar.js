import Logo from './logo'
import NextLink from 'next/link'
import { Container,Box,Link,Stack,Heading,Flex,
    Menu,MenuItem,MenuList,MenuButton,IconButton,useColorModeValue, Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({href, path, children}) =>{
    const active = path === href
    const inactiveColor = useColorModeValue('gray.400', 'whiteAlpha.900')

    return(
        <NextLink href={href}>
            <Link p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = props =>{
    const { path } = props

    return(
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}>
          <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justifyContent="space-between">
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo/>
                </Heading>
            </Flex>
            <Stack
            display={{base:'none', md:'flex'}}
            direction={{base:'column',md:'row'}}
            width={{base:'full', md:'auto',}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            >
            <LinkItem href="/works" path={path}>
                Works
            </LinkItem>
            </Stack>
            <Box flex={1} align="right">
                <ThemeToggleButton/>
                
                <Box ml={2} display={{ base:'inline-block', md:'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label='Options'></MenuButton>
                    <MenuList>
                        <NextLink href="/" passHref>
                            <MenuItem as={Link}>About</MenuItem>
                        </NextLink>
                        <NextLink href="/works" passHref>
                            <MenuItem as={Link}>Works</MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
                </Box>
            </Box>

          </Container>
        </Box>
    )
}

export default NavBar