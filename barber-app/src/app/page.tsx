'use client';

import Image from "next/image";
import Head from "next/head";
import { Button, Stack, useDisclosure } from '@chakra-ui/react';
import Mobile from "@/components/Mobile/Mobile";
import Desktop from "@/components/Desktop/Desktop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()



  return (
    <>
      <Head>
        <title>BARBERIA - Encuentra la Mejor barberia en la Ciudad</title>
        <meta name="description" content="BARBERIA ...... Reserva tu cita fácilmente con nuestros expertos." />
        <meta name="keywords" content="barbería, barberia, barbero, reserva de citas, peluqueria, peluquería, reserva, citas" />
        <meta property="og:title" content="Barber App - Encuentra el Mejor Barbero en la Ciudad" />
        <meta property="og:description" content="Barber App te ayuda a encontrar el mejor barbero en tu área. Reserva tu cita fácilmente con nuestros expertos." />
        <meta property="og:image" content="/images/barber_shop-desktop.png" />
        <meta property="og:url" content="https://tu-sitio-web.com" />
        <link rel="canonical" href="https://tu-sitio-web.com" />
      </Head>

      <div style={{ position: 'relative', textAlign: 'center' }} >
        <div className="hidden md:block" >
          <Desktop/>
        </div>
        <div className="block md:hidden"> 
          <Mobile/>

        </div>

      </div>
    </>
  );
}
