import {chakra,HTMLChakraProps} from "@chakra-ui/react"

const Platform = (props : HTMLChakraProps<"svg">) => {
    return (
        <chakra.svg 
        width="90px !important"
        height = "90px !important"
        viewBox="0 0 90 90"
        fill="none"
        {...props}>

<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="45" cy="45" r="45" fill="#F6FBFF"/>
</svg>





        </chakra.svg>
    )
}

export default Platform;