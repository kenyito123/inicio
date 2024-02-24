import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'SEO descripcion',
 keywords: ['Sobre contacto', 'Nylan', 'Informaión']
};

export default function page() {
  return (
    <div>Estas en contacto</div>
  )
}
