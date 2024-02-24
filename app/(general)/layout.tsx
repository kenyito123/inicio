export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Este es el layout para esas 3 páginas</h1>
      {children}
    </div>
  );
}