import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'about descripcion',
 keywords: ['Sobre about', 'Nylan', 'Informaión']
};

export default function page() {
  return (
    <div>
        <h2>Estas en about</h2>
    </div>
  )
}
