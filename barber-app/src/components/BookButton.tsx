import { Button, Flex } from '@chakra-ui/react';

const BookButton = () => {
    
    return (
        <div>
            <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            align="center"
            justify="center"
            width="100%"
            height="100%">
                <Button 
                variant='solid'
                size={"lg"}
                borderColor="#761B19" 
                color="#761B19" 
                _hover={{ bg: "#761B19", color: "white" }}
                >
                Reservar Cita
                </Button>
            </Flex>
        </div>
    )
}

export default BookButton;