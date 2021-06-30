import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/Home.module.css'

export default function FirstPost(){
    return (
        <>
        <Head> <title>First Post</title></Head>
        <h1>First Post</h1>
        <h2 className={styles.title}><Link href="/"><a>Back to Home</a></Link></h2>
        </>
    )
}