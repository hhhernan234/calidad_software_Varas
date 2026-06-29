// Componente trivial usado únicamente para verificar la configuración.
interface GoodbyeProps {
  name: string;
}

export function Goodbye({ name }: GoodbyeProps) {
  return <p>Adiós, {name}</p>;
}