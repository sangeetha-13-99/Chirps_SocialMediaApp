import { Box, Button, Card, CardBody, HStack, Text } from "@chakra-ui/react"
import { Calendar, FilterIcon, Trending } from "../../../utils/icons"
import { useDispatch, } from "react-redux"
import { postSliceActions } from "../../../store/postSlice"
import { setSortByAllUsersActivityPosts } from "../../../store/postActions"


export const Filter = () => {
    const dispatch=useDispatch();
    
  return (
    <Card  my="2" borderRadius="none" >
        <CardBody p="2">
            <HStack justifyContent="space-between">
                <HStack  w="40%" >
                    <Text pr="2" >Sort By</Text>
                    <FilterIcon className="icon"/>
                </HStack>
                <HStack justifyContent="space-between" w="60%" >
                    <Button leftIcon={<Calendar className="icon"/>} onClick={()=>dispatch(setSortByAllUsersActivityPosts('latest'))}>
                        Latest
                    </Button >
                    <Button leftIcon={<Trending className="icon"/>} onClick={()=>dispatch(setSortByAllUsersActivityPosts('trending'))}>
                        Trending
                    </Button>
                </HStack>
            </HStack>
        </CardBody>
    </Card>
  )
}
