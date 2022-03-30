/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props)
{
  return (
    <Flex
      p="50px 0px 20px 0px" flexDirection={{ base: "column", xl: "row", }} alignItems={{ base: "center", xl: "start", }} justifyContent='center'>
      <Text
        color='gray.400'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {1900 + new Date().getYear()}
        {" - "}
        <Link
          color='blue.400'
          href='https://github.com/guisteink'
          target='_blank'>
          {"Guilherme Stein"}
        </Link>
      </Text>
    </Flex>
  );
}
