import { Image, Stack, Box } from '@chakra-ui/react';
import BookButton from '../BookButton';

const Desktop = () => {
  return (
    <>
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
            src="/images/barber_shop-desktop.png"
            alt="barber"
            width={1792}
            height={1024}
            style={{ objectFit: 'cover' }}
          />
          <BookButton />
        </Box>
      </Stack>
    </>
  );
};

export default Desktop;
