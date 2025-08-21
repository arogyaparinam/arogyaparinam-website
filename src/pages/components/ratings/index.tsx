import { HStack, Icon } from "@chakra-ui/react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

type RatingsProps = {
    ratings : number
}

const Ratings : React.FC<RatingsProps> = ({ratings}) => {
    const stars = []

    for(let i=1;i <=5; i++) {
        if(ratings >= i){
            stars.push(<Icon as={FaStar} key={i} color="yellow.400" />);
        } else if(ratings >= i - 0.5) {
             stars.push(<Icon as={FaStarHalfAlt} key={i} color="yellow.400" />);
        } else {
            stars.push(<Icon as={FaRegStar} key={i} color="gray.300" />);
        }
    }

    return <HStack spacing={1}>{stars}</HStack>
}

export default Ratings