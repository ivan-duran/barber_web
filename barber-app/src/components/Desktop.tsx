import { Image } from '@chakra-ui/react';

const Desktop = () => {
  return (
    <div>
      <Image 
        src="/images/barber_shop-desktop.png"
        alt="barber"
        width={1792}
        height={1024}
        objectFit="cover"
      />
    </div>
  );
};

export default Desktop;
