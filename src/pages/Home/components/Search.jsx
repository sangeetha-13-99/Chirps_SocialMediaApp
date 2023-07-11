import { VStack, Input, Box, Text, InputLeftElement, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserCard } from '../../../common/UserCard';
import { Close,Search as SearchIcon } from '../../../utils/icons';

export const Search = () => {
    const [searchValue,setSearchValue]=useState("");
    const [filteredData,setFilteredData]=useState([]);
    const {Allusers}=useSelector((state)=>state.user);
    const [fallBackText,setFallBackText]=useState("")
    useEffect(()=>{
        const timer=setTimeout(()=>{
            let data;
            if(searchValue.length>2){
                data=Allusers.filter((user)=>{
                    if(user.firstName.includes(searchValue) || user.lastName.includes(searchValue) || user.username.includes(searchValue) ||user.userHandler.includes(searchValue) ){
                        return true;
                    }
                    return false;
                });
            }
            if(data && data.length>0){
                setFilteredData(data);
                setFallBackText("")
            }
            else{
                setFilteredData([]);
                if(searchValue.length>0){
                    setFallBackText("No Users Found")
                }
                else{
                    setFallBackText("")
                }
            }
        },500);
        return ()=>clearInterval(timer);
    },[searchValue,Allusers])

    const searchHandler=(e)=>{
        setSearchValue(e.target.value);
    }

  return (
    <VStack mt="2rem" alignItems="flex-start">
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <SearchIcon className="icon" style={{"scale":" 1.4 1.4"}} />
            </InputLeftElement>
            <Input onChange={searchHandler} placeholder='search users' value={searchValue} />
        </InputGroup>
        {filteredData.length>0 ? filteredData.map(user=>{
            return <UserCard key={user._id} user={user}/>
        }):<Box textAlign="center">
        <Text fontFamily="heading" fontSize="3rem">
            {fallBackText}
        </Text>
      </Box>}
    </VStack>
  )
}
