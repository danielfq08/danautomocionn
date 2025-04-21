
export const metadata = {
  title: 'Danautomoción',
  description: 'Sitio oficial de Danautomoción LLC.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
