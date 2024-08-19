import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack, Image, useDisclosure, Box, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dot } from 'node:test/reporters';
import BookButton from '../BookButton';
import SlideMobile from './SlideMobile';

const images = [
  "/images/barber01.png",
  "/images/barber02.png",
  "/images/barber03.png",
];

const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <Box position="relative" width="100%" height="100%" padding="0">

      <Stack spacing={4} width="100%">
        <Box
          width="100%"
          height="auto"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          position="relative"
        >
          <Image 
            src="/images/barber_shop-mobile.png"
            alt="barber"
            width="100%"
            height="auto"
            style={{ objectFit: 'cover' }}
          />      
          <BookButton />
        </Box>

        <Box
          width="100%"
          height="auto"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
        >
        <SlideMobile />
        </Box>

      </Stack>

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
