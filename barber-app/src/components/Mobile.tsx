// src/components/Mobile.tsx
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack, Image, useDisclosure } from '@chakra-ui/react';

const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div >
      <Image 
        src="/images/barber_shop-mobile.png"
        alt="barber"
        width={720}
        height={1024}
        objectFit={"cover"}
      />

      <Button
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
      >
        &#8801;
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Button variant="ghost">Reservar</Button>
              <Button variant="ghost">Profesionales</Button>
              <Button variant="ghost">Encuentranos</Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Mobile;
