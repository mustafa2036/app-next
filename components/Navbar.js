import Link from "next/link";
import style from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <div className={style.bg}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/posts">Posts</Link>
        </div>
    )
}