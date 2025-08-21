import {chakra,HTMLChakraProps} from "@chakra-ui/react"

const SupportIcon = (props : HTMLChakraProps<"svg">) => {
    return (
        <chakra.svg 
        width="24px !important"
        height = "24px !important"
        viewBox="0 0 24 24"
        fill="none"
        {...props}>



<path d="M0.5 20.9H20.5V0.9H0.5V20.9Z" />




        </chakra.svg>
    )
}

export default SupportIcon;