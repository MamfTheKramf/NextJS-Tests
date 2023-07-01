"use-client"

import Link from "next/link";
import Script from "next/script";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

type LinkEntry = {
    text: string;
    path: string;
}

const links: LinkEntry[] = [
    {
        text: 'Home',
        path: '/',
    },
    {
        text: 'About Us',
        path: '/about-us',
    },
    {
        text: 'Extra',
        path: '/extra',
    },
]

export default function Navbar() {
    const path = useActive();

    const [show, setShow] = useState(false)

    function toggleShow() {
        setShow(!show);
    }

    return (
        <>
            <nav className={`${styles.nav} ${clsx({
                [styles.show]: show,
            })}`} onClick={toggleShow}>
                <ul className={styles.wide}>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.path} className={clsx({
                                [styles.active]: isActive(link.path, path)
                            })}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={styles.narrow}>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.path} className={clsx({
                                [styles.active]: isActive(link.path, path)
                            })}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

function useActive(): string {
    const [active, setActive] = useState("");
    useEffect(() => {
        
        function handleLoad() {
            console.log(window.location.pathname);
            setActive(window.location.pathname);
        }

        handleLoad();

        return () => window.removeEventListener("resize", handleLoad);
    });

    return active;
}

function isActive(neededPrefix: string, actualPath: string): boolean {
    if (!neededPrefix || neededPrefix === "/") {
        return !actualPath || actualPath === "/";
    }
    return actualPath.startsWith(neededPrefix);
}
