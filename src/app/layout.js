import { Prompt } from 'next/font/google';
import { Aside } from '@/components/Aside';
import './globals.css';
import Busca from '@/components/Busca';

export const metadata = {
  title: "Code Connet",
  description: "Uma rede social para Devs!",
};

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'> 
          <Aside />
          <div className='main-content'>
            <Busca />
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
