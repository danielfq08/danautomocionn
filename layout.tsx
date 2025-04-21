import './styles/globals.css';

export const metadata = {
  title: 'Danautomoción',
  description: 'Sitio oficial bilingüe para Danautomoción LLC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
