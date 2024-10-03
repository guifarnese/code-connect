import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from './CardPost.module.css';
import Link from "next/link";


export const CardPost = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          <article className={styles.card}>
            <header>
                <figure>
                    <Image 
                        src={post.cover} 
                        width={438} 
                        height={133} 
                        alt={`Capa do post de titulo: ${post.title}`}
                        priority={true}
                    />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar 
                    imageSrc={post.author.avatar} 
                    name={post.author.username}
                />
            </footer>
          </article>
        </Link>
    )
}