import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Where are the Alices? - A Psychological Horror Game | ZimmZimmGames</title>
                <meta name="description" content="Enter a world where nightmares come to life and dolls hold dark secrets. Discover what really happened to the Alices... if you dare." />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Text:wght@400;600&family=Special+Elite&display=swap" rel="stylesheet" />
            </Head>

            <main>
                {/* Hero Section */}
                <section className="hero">
                    <div className="container">
                        <Image
                            src="/game-logo.png"
                            alt="ZimmZimmGames Logo"
                            width={200}
                            height={100}
                            className="logo"
                        />
                        <h1>Where are the Alices?</h1>
                        <p>Enter a world where nightmares come to life and dolls hold dark secrets. Discover what really happened to the Alices... if you dare.</p>
                        <Link href="#trailer" className="btn btn-primary">Watch Trailer</Link>
                    </div>
                </section>

                {/* Platforms Section */}
                <section className="platforms-grid">
                    <div className="platform-card">
                        <h3>Nintendo Switch</h3>
                        <p>Coming Soon</p>
                        <div className="platform-buttons">
                            <Link href="#" className="btn">Nintendo eShop</Link>
                            <Link href="#" className="btn">Physical Edition</Link>
                        </div>
                    </div>

                    <div className="platform-card">
                        <h3>PC / Mac</h3>
                        <p>Coming Soon</p>
                        <div className="platform-buttons">
                            <Link href="#" className="btn">Steam</Link>
                            <Link href="#" className="btn">Epic Games</Link>
                            <Link href="#" className="btn">GOG</Link>
                        </div>
                        <p className="demo-text">Demo coming soon</p>
                    </div>

                    <div className="platform-card">
                        <h3>PlayStation</h3>
                        <p>Coming Soon</p>
                        <div className="platform-buttons">
                            <Link href="#" className="btn">PS4 / PS5</Link>
                            <Link href="#" className="btn">Physical Edition</Link>
                        </div>
                    </div>
                </section>

                {/* Characters Section */}
                <section className="characters">
                    <div className="container">
                        <h2>Enter the Rabbit Hole</h2>
                        <p>Talk to nightmares made real</p>

                        <div className="character-card">
                            <div className="character-image">
                                <Image
                                    src="/juno-detective.png"
                                    alt="Juno the Detective"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <div className="character-info">
                                <h3>Juno the Detective</h3>
                                <p>A young detective determined to uncover the truth behind the disappearances. Her determination will lead her to face horrors beyond her comprehension, but nothing will stop her until she finds all the Alices.</p>
                                <Link href="#" className="btn">Start Conversation</Link>
                            </div>
                        </div>

                        <div className="character-card">
                            <div className="character-image">
                                <Image
                                    src="/cb-white-rabbit.png"
                                    alt="CB the White Rabbit"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <div className="character-info">
                                <h3>CB the White Rabbit</h3>
                                <p>A cunning and manipulative antagonist who delights in playing with the minds of his victims. Beneath his elegant appearance and refined manners lies an entity that collects lost souls in his twisted wonderland.</p>
                                <Link href="#" className="btn">Chat with CB</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section className="support-grid">
                    <div className="container">
                        <h2>Support Development</h2>
                        <p>Help us bring more nightmares to reality</p>

                        <div className="support-grid">
                            <div className="support-card">
                                <h3>PayPal</h3>
                                <p>One-time contribution to development</p>
                                <Link href="#" className="btn">Donate with PayPal</Link>
                            </div>

                            <div className="support-card">
                                <h3>Patreon</h3>
                                <p>Exclusive access to development and special content</p>
                                <Link href="#" className="btn">Join on Patreon</Link>
                            </div>

                            <div className="support-card">
                                <h3>Ko-fi</h3>
                                <p>Buy us a coffee to keep the nightmares alive</p>
                                <Link href="#" className="btn">Buy a Ko-fi</Link>
                            </div>

                            <div className="support-card">
                                <h3>Indiegogo</h3>
                                <p>Crowdfunding campaign coming soon</p>
                                <Link href="#" className="btn">Coming Soon</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="footer-grid">
                            <div>
                                <h3>About Us</h3>
                                <p>ZimmZimm Games is your destination for exciting games and unique experiences.</p>
                            </div>
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link href="/games">Games</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <Link href="#" className="btn">Gamejolt</Link>
                                    <Link href="#" className="btn">itch.io</Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>© 2025 ZimmZimmGames. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}