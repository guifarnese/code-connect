import styles from './notFound/NotFound.module.css';
import banner from './notFound/404.png';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBack } from '@/components/icons/ArrowBack';
import { Heading } from '@/components/Heading';

export default function NotFoound () {
    return (
      <div className={styles.container}>
        <Image src={banner} />
        <Heading>Opa, pagina nao encontrada</Heading>
        <p className={styles.text}>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
        <Link href='/'>
            Voltar ao feed <ArrowBack color='#81FE88' />
        </Link>
      </div>
    )
}