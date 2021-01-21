import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar () {
    return (
    <nav>
        <a className="navitem" href="/html/">HTML</a> |
        <a className="navitem" href="/css/">CSS</a> |
        <a className="navitem" href="/js/">JavaScript</a> |
        <a className="navitem" href="/python/">Python</a>
    </nav>
    )
  }