import { HTMLChakraProps,chakra } from "@chakra-ui/react"

const Support = (props : HTMLChakraProps<"svg">) => {
    return (
        <chakra.svg
        width = "20px !important"
        height = "21px !important"
        viewBox="0 0 20 21"
        fill="none"
        {...props}
        >



<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.9H20.5V0.9H0.5V20.9Z" fill="black"/>
</svg>



        </chakra.svg>
    )
}

export default Support