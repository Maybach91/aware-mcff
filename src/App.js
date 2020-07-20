import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  Box,
  Heading,
  Button,
  Flex,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/core'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box backgroundColor="#819422" color="whiteAlpha.900" pt={8} pb="100px">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pl={5}
        pr={5}
      >
        <Heading textAlign="center">fundmypresent</Heading>
        <Box
          display="flex"
          justifyContent="center"
          pt={5}
          pb={5}
          fontSize="md"
          maxWidth="400px"
        >
          <Text textAlign="center" display="inline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non laboro,
            inquit, de nomine. Neque enim disputari sine reprehensione nec cum
            iracundia aut pertinacia recte disputari potest. Omnes enim iucundum
            motum, quo sensus hilaretur. Quid enim de amicitia s
          </Text>
        </Box>
      </Flex>
    </Box>
    <Box p={5}>
      <Flex justifyContent="center" mt="-100px" mb={10}>
        <Box
          backgroundColor="#ffffff"
          p={10}
          shadow="  0 2.8px 2.2px rgba(0, 0, 0, 0.02),   0 6.7px 5.3px rgba(0, 0, 0, 0.028),   0 12.5px 10px rgba(0, 0, 0, 0.035),   0 22.3px 17.9px rgba(0, 0, 0, 0.042),   0 41.8px 33.4px rgba(0, 0, 0, 0.05),   0 100px 80px rgba(0, 0, 0, 0.07)"
          borderRadius="8px"
          maxWidth="500px"
          textAlign="center"
        >
          <Flex flexDirection="column">
            <Heading color="#6c7501">Du willst spenden?</Heading>
            <Text color="gray.900" pt={5} pb={5}>
              Es gibt bereits ein Projekt, an dem du dich beteiligen willst?
              Dann brauchst du nur den Invite-Code!
            </Text>
            <FormControl mb={5}>
              <FormLabel>Invite Code:</FormLabel>
              <Input placeholder="z.B. JAASFHJKLASDF" />
              <FormErrorMessage>Error message</FormErrorMessage>
              <FormHelperText href="yes">
                Woher bekomme ich den Invite-Code?
              </FormHelperText>
            </FormControl>
          </Flex>
          <Button
            variantColor="orange"
            display="block"
            size="lg"
            rightIcon="arrow-forward"
            ml="auto"
            mr="auto"
          >
            Projekt beitreten
          </Button>
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        pb={2}
        alignItems="stretch"
        flexDirection="row"
        pt={8}
      >
        <Box
          p={10}
          backgroundColor="blackAlpha.50"
          borderRadius="8px"
          maxWidth="500px"
          mb={10}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading color="gray.700">Eigenes Projekt</Heading>
            <Text textAlign="center" pt={3} pb={3} mb={4}>
              Du willst ein Geschenk für deine Liebsten finanzieren und
              organisieren? Dann erstelle jetzt dein eigenes Projekt!
            </Text>
          </Flex>
          <Button
            variant="solid"
            variantColor="green"
            href="test"
            size="md"
            ml="auto"
            mr="auto"
            display="block"
          >
            Projekt erstellen
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box p={4}>
          <Link href="login">Login</Link>
        </Box>
      </Flex>
    </Box>
  </ThemeProvider>
)

export default App
