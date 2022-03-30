import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/Card";

const config = {
    initialColorMode: 'teal',
    useSystemColorMode: false,
}

export default extendTheme(
    config,
    CardComponent, // Card componPanel Container component
);