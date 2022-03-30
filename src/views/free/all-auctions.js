
import
{
    Flex, Wrap, WrapItem, Text, useColorMode,
    useColorModeValue, Box, Badge, useDisclosure
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from '../../components/header/Nav'
import Footer from '../../components/footer/footer'
import Card from '../../components/card/card'
import CardHeader from '../../components/card/card-header'
import CardBody from '../../components/card/card-body'
import api from '../../services/api'
import _ from 'lodash'
import moment from 'moment'
import
{
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    InputGroup, Image,
    Button,
    InputLeftElement,
} from '@chakra-ui/react'

const mockArray = [
    {
        createAt: "2022-03-22T00:13:09.205Z",
        endingAt: "2022-03-22T23:13:09.205Z",
        highestBid:
        {
            amount: 20,
            bidder: 'maria.silva@gmail.com'
        },
        id: "ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58",
        pictureUrl: "https://auctions-bucket-12d1ada2e-dev.s3.eu-west-1.amazonaws.com/ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58.jpg",
        seller: "guilherme.steink@gmail.com",
        status: "CLOSED",
        title: "90's Nokia phone",
    },
    {
        createAt: "2022-03-22T00:13:09.205Z",
        endingAt: "2022-03-22T23:13:09.205Z",
        highestBid:
        {
            amount: 20,
            bidder: 'maria.silva@gmail.com'
        },
        id: "ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58",
        pictureUrl: "https://auctions-bucket-12d1ada2e-dev.s3.eu-west-1.amazonaws.com/ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58.jpg",
        seller: "guilherme.steink@gmail.com",
        status: "OPEN",
        title: "90's Nokia phone",
    },
    {
        createAt: "2022-03-22T00:13:09.205Z",
        endingAt: "2022-03-22T23:13:09.205Z",
        highestBid:
        {
            amount: 20,
            bidder: 'maria.silva@gmail.com'
        },
        id: "ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58",
        pictureUrl: "https://auctions-bucket-12d1ada2e-dev.s3.eu-west-1.amazonaws.com/ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58.jpg",
        seller: "guilherme.steink@gmail.com",
        status: "OPEN",
        title: "90's Nokia phone",
    },
    {
        createAt: "2022-03-22T00:13:09.205Z",
        endingAt: "2022-03-22T23:13:09.205Z",
        highestBid:
        {
            amount: 20,
            bidder: 'maria.silva@gmail.com'
        },
        id: "ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58",
        pictureUrl: "https://auctions-bucket-12d1ada2e-dev.s3.eu-west-1.amazonaws.com/ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58.jpg",
        seller: "guilherme.steink@gmail.com",
        status: "OPEN",
        title: "90's Nokia phone",
    },
    {
        createAt: "2022-03-22T00:13:09.205Z",
        endingAt: "2022-03-22T23:13:09.205Z",
        highestBid:
        {
            amount: 20,
            bidder: 'maria.silva@gmail.com'
        },
        id: "ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58",
        pictureUrl: "https://auctions-bucket-12d1ada2e-dev.s3.eu-west-1.amazonaws.com/ba7bc5bf-57f4-4eaf-94cf-7c66e5c7ac58.jpg",
        seller: "guilherme.steink@gmail.com",
        status: "OPEN",
        title: "90's Nokia phone",
    }
]

export default function AllAuctions() 
{
    const [auctions, setAuctions] = useState()
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModalData] = useState()
    const [bidValue, setBidValue] = useState(0)

    useEffect(() =>
    {
        loadAuctions()
        console.log('auctions', auctions)
    }, [])

    const loadAuctions = async () =>
    {
        try {
            setAuctions(mockArray)
            // const result = await api.getAllAuctions('OPEN')
            // console.log(result?.data)
            // setAuctions(result?.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectModalData = (index) =>
    {
        setModalData(auctions[index])
        return onOpen()
    }

    return (
        <Box w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')}>
            <Flex flexDirection='column'>
                <Navbar />
                {modalData ?
                    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                        <ModalOverlay />
                        <ModalContent bg={"#2D3748"}>
                            <ModalHeader>
                                <Image src={modalData?.pictureUrl} alt='Dan Abramov' borderRadius="15px" />

                                <Flex direction='row' justify="space-between" align="center" gap={5}>
                                    <Flex direction='row'>
                                        <Text isTruncated fontSize='4xl' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>{modalData.title}</Text>
                                    </Flex>
                                    <Flex direction='row'>
                                        <Badge
                                            textShadow={"1px 1px 1px black"}
                                            bg={modalData.status === "OPEN" ? "green.400" : 'yellow.400'}
                                            color={"white"}
                                            p="6px 20px"
                                            borderRadius="16px">
                                            {modalData?.status}
                                        </Badge>
                                    </Flex>
                                </Flex>
                            </ModalHeader>
                            <ModalBody>
                                <Flex direction='row'>
                                    <Text isTruncated fontSize='lg' color={'white'} textShadow={"1px 1px 1px black"}>Seller: {modalData.seller}</Text>
                                </Flex>
                                {modalData?.highestBid?.bidder &&
                                    <Flex direction='row'>
                                        <Text isTruncated fontSize='lg' color={'white'} textShadow={"1px 1px 1px black"}>Last bid: {parseInt(modalData.highestBid?.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} by {modalData.highestBid?.bidder}</Text>
                                        {/* <Text isTruncated fontSize='lg' color={'white'} textShadow={"1px 1px 1px black"}>Last bid: {modalData.highestBid?.amount} by {modalData.highestBid?.bidder}</Text> */}
                                    </Flex>}

                            </ModalBody>
                            <ModalFooter justify="space-between">
                                <InputGroup pr="10px">
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={"R$"}
                                    />
                                    <Input variant='filled' value={bidValue} onChange={(e) => setBidValue(e.target.value)} />
                                </InputGroup>

                                <Button bg={"red.400"} mr={3} color="white" textShadow={"1px 1px 1px black"}>
                                    Place a bid
                                </Button>
                                <Button bg={"blue.400"} onClick={onClose} color="white" textShadow={"1px 1px 1px black"}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal> : ''}

                <Wrap justify='center' pt="20px">
                    {_.map(auctions, (auction, index) =>
                    {
                        return (
                            <WrapItem key={auction.id}>
                                <Card minW={'35vw'} sx={{ backgroundImage: auction?.pictureUrl, backgroundColor: !auction?.pictureUrl ? "none" : "#2D3748", backgroundPosition: 'center' }}>
                                    <CardHeader>
                                        <Wrap justify="space-between" align="center" gap={5}>
                                            <Flex direction='column' onClick={() => handleSelectModalData(index)} cursor="pointer">
                                                <Text isTruncated fontSize='4xl' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>{auction.title}</Text>
                                                <Text isTruncated fontSize='lg' color={'white'} textShadow={"1px 1px 1px black"}>Seller: {auction.seller}</Text>
                                            </Flex>
                                            <WrapItem direction='column'>
                                                <Badge
                                                    bg={auction.status === "OPEN" ? "green.400" : 'yellow.400'}
                                                    color={"white"}
                                                    p="6px 20px"
                                                    borderRadius="16px"
                                                >
                                                    <Flex direction='row' align="center" justify="space-between">
                                                        <Text isTruncated fontSize='2xl' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>{auction.status} </Text>
                                                        {auction.status === "OPEN" ? "=)" : "=("}
                                                    </Flex>
                                                    <Flex m="5px 0px" w={'100%'} borderTop="1px solid white" />


                                                    {auction?.highestBid?.amount === 0 &&
                                                        <Flex direction='row'>
                                                            <Text isTruncated fontSize='md' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>No bids yet</Text>
                                                        </Flex>}

                                                    {auction.status === "OPEN" && auction?.highestBid?.bidder &&
                                                        <>
                                                            <Flex direction='row'>
                                                                <Text isTruncated fontSize='md' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>Highest bid: R${auction?.highestBid?.amount.toFixed(2)}</Text>
                                                            </Flex>
                                                            <Text isTruncated fontSize='md' color={'white'} textShadow={"1px 1px 1px black"}>Until {moment(auction.endingAt).format('lll')}</Text>
                                                        </>
                                                    }

                                                    {auction.status === "CLOSED" && auction?.highestBid?.bidder &&
                                                        <>
                                                            <Flex direction='row'>
                                                                <Text isTruncated fontSize='md' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>Auctioned for: R${auction?.highestBid?.amount.toFixed(2)}</Text>
                                                            </Flex>
                                                            <Text isTruncated fontSize='md' color={'white'} textShadow={"1px 1px 1px black"}>Ended at {moment(auction.endingAt).format('ll')}</Text>
                                                        </>
                                                    }


                                                </Badge>
                                            </WrapItem>
                                        </Wrap>
                                    </CardHeader>
                                    <CardBody minH={'6vh'}>
                                        <Flex direction='column' height={'100%'}>
                                            {auction?.status === 'CLOSED' &&
                                                <Badge
                                                    sx={{ cursor: 'pointer' }}
                                                    w={'100%'}
                                                    bg={"gray.400"}
                                                    color={"white"}
                                                    fontSize="2xl"
                                                    mt="15px"
                                                    mb="0px"
                                                    p="6px 20px"
                                                    borderRadius="16px">
                                                    <Text fontSize='md' fontWeight='bold' textShadow={"1px 1px 1px black"}>Bought by {auction?.highestBid?.bidder}</Text>
                                                </Badge>}
                                            {auction?.status === 'OPEN' &&
                                                <Badge
                                                    onClick={() => handleSelectModalData(index)}
                                                    sx={{ cursor: 'pointer' }}
                                                    w={'100%'}
                                                    bg={"red.400"}
                                                    color={"white"}
                                                    fontSize="2xl"
                                                    mt="15px"
                                                    mb="0px"
                                                    p="6px 20px"
                                                    borderRadius="16px">
                                                    <Text fontSize='md' fontWeight='bold' textShadow={"1px 1px 1px black"}>Click here to place Bid</Text>
                                                </Badge>}
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </WrapItem>)
                    })}
                </Wrap >
            </Flex >

            <Footer />

        </Box>);

}

