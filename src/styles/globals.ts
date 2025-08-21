
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";


const styles = {
    global : (props : GlobalStyleProps) => ({
        html : {
            height : "100%"
        },
        "#_next":{
            display : "flex",
            flexDirection : "column",
            height : "100%"
        },
        main : {
            flex : "1 0 auto"
        },
        body : {
            height : "100%",
            margin:0,
            padding:0,
            color : mode("black","#fff")(props),
            background : mode("rgba(255, 255, 255, 1)","black")(props),
           
        }
    })
}

export default styles