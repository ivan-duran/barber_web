import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome to the Barber Shop App</h1>
        <p className="text-lg text-center">The best place to get a fresh haircut</p>
      </header>
    </main>
  );
}
