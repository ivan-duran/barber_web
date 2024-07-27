import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack, Image, useDisclosure, Box, Flex } from '@chakra-ui/react';

const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative" width="100%" height="100%">
      <Image 
        src="/images/barber_shop-mobile.png"
        alt="barber"
        width={720}
        height={1024}
        objectFit={"cover"}
      />
      
      <Button
        variant="outline"
        onClick={onOpen}
        position="fixed"
        top="4"
        right="4"
        zIndex="1000"
        borderColor="#761B19" 
        color="#761B19" 
      >
        &#8801;
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg='teal'>
          <ModalCloseButton color="#761B19"/>
          <ModalBody p={0} display="flex" alignItems="center" justifyContent="center" height="100vh">
          <Stack spacing={10} align="center">
              <Button variant="link" color="#761B19">RESERVAR</Button>
              <Button variant="link" color="#761B19">PROFESIONALES</Button>
              <Button variant="link" color="#761B19">ENCUENTRANOS</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Mobile;
