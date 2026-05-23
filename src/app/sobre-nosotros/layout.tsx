import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conoce la historia, misión y visión de JEDYX SPORT. Tu destino premium para equipamiento deportivo.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
