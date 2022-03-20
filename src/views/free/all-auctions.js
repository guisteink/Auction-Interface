
import
{
    Flex, Wrap, WrapItem, Text, useColorMode,
    useColorModeValue, Box, Badge
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from '../../components/header/Nav'
import Card from '../../components/card/card'
import CardHeader from '../../components/card/card-header'
import CardBody from '../../components/card/card-body'
import api from '../../services/api'
import _ from 'lodash'
import moment from 'moment'

export default function AllAuctions() 
{
    const [auctions, setAuctions] = useState()

    useEffect(() =>
    {
        loadAuctions()
    }, [])

    const loadAuctions = async () =>
    {
        try {
            const result = await api.getAllAuctions('OPEN')
            console.log(result?.data)
            setAuctions(result?.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')}>
            <Flex flexDirection='column'>
                <Navbar />
                {/* <Text>Todos os items para leilão</Text> */}
                <Wrap justify='center'  >
                    {_.map(auctions, auction =>
                    {
                        return (
                            <WrapItem ml="5vw" mr="5vw" key={auction.id}>
                                <Card border="1px solid white" p="10px" minW={'35vw'} sx={{ backgroundImage: auction?.pictureUrl, backgroundPosition: 'center' }}>
                                    <CardHeader>
                                        <Wrap justify="space-between" align="center" gap={5}>
                                            <Flex direction='column' >
                                                <Text isTruncated fontSize='4xl' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>{auction.title}</Text>
                                                <Text isTruncated fontSize='lg' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>Seller: {auction.seller}</Text>
                                            </Flex>
                                            <WrapItem direction='column'>
                                                <Badge
                                                    border="1px solid white"
                                                    bg={auction.status === "OPEN" ? "green.400" : 'RED'}
                                                    color={"white"}
                                                    fontSize="2xl"
                                                    p="6px 20px"
                                                    borderRadius="16px"
                                                >
                                                    <Text isTruncated fontSize='2xl' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>{auction.status}</Text>
                                                    <Flex m="5px 0px" w={'100%'} borderTop="1px solid white" />

                                                    {auction?.highestBid?.bidder &&
                                                        <Flex direction='row'>
                                                            <Text fontSize='md' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>Highest bid: R${auction?.highestBid?.amount.toFixed(2)}</Text>
                                                        </Flex>}
                                                    <Text isTruncated fontSize='md' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>Until {moment(auction.endingAt).format('lll')}</Text>
                                                </Badge>
                                            </WrapItem>
                                        </Wrap>
                                    </CardHeader>
                                    <CardBody>
                                        <Flex direction='column' height={'100%'}>
                                            {auction?.status === 'OPEN' &&
                                                <Flex direction="row" justify="flex-end">
                                                    <Badge
                                                        border="1px solid white"
                                                        w={'100%'}
                                                        bg={"red.400"}
                                                        color={"white"}
                                                        fontSize="2xl"
                                                        mt="15px"
                                                        mb="0px"
                                                        p="6px 20px"
                                                        borderRadius="16px">
                                                        <Text fontSize='md' fontWeight='bold' textShadow={"1px 1px 1px black"}>Click here to place Bid</Text>
                                                    </Badge>
                                                </Flex>}
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </WrapItem>)
                    })}
                </Wrap >
            </Flex >

        </Box>);

}

