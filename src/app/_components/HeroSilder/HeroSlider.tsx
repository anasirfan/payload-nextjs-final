'use client'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import { ChakraCustomProvider } from '../../_providers/ChakraCustomProvider'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import Bg from './bg3.png'
import './Hero.css'
import RichText from '../RichText'
import Navbar from './Navbar'
import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'

interface HeaderProp {
  header: Header | null
}


export default  function HeroSlider<HeaderProp>({header , ...props}) {
  // console.log(process.env.NEXT_PUBLIC_SERVER_URL+ "/media/"+props?.hero?.media?.filename)
  return (
    <>
      <ChakraProvider>
        <Flex
          w={'full'}
          h={'100vh'}
          backgroundImage={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${props?.hero?.media?.filename}`}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          backgroundAttachment={'fixed'}
        >
          <VStack
            ml={10}
            w={'full'}
            justify={'flex-end'}
            
            align={'flex-start'}
            className="herosection-content"
            // px={useBreakpointValue({ base: 4, md: 8 })}
            // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            h={'100%'}
          >
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}
            
            >
              <Text
                className="hero_section_heading"
                color={'whiteAlpha.900'}
                fontSize={'5xl'}
              >
                {props?.hero?.richText ? (
                  <RichText content={props?.hero?.richText} />
                ) : (<></>)}
              </Text>
            </Stack>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={2}>
              <p className="hero_text">
              {props?.hero?.media?.caption ? (
                  <RichText content={props?.hero?.media?.caption} />
                ) : (<></>)}
              </p>
            </Stack>
          </VStack>
        </Flex>
      </ChakraProvider>
      <Navbar header={header}/>
    </>
  )
}

