import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <>
      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}
