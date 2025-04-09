import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="menu">
            <div className="menu-items">
                <Link href="/">Inicio</Link>
                <Link href="/about">Acerca de</Link>
                <Link href="/games">Juegos</Link>
                <Link href="/contact">Contacto</Link>
            </div>
        </nav>
    );
}