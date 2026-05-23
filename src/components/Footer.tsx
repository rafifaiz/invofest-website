import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                <div>
                    <img 
                        src="https://www.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png" 
                        alt="EQUATOR_APT // SYSTEM_BREACH" 
                        className="h-12 mb-4"
                    />
                    <p className="text-sm opacity-80">
Red Team Initiative - Equity & Attack Path (EQUATOR_APT // SYSTEM_BREACH).
                        Red Team • Pentest • Incident Response
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Menu Navigasi</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><Link to="/" className="text-white hover:text-green-300 hover:underline transition-colors">Beranda</Link></li>
                        <li><Link to="/seminar" className="text-white hover:text-green-300 hover:underline transition-colors">Seminar</Link></li>
                        <li><Link to="/competition" className="text-white hover:text-green-300 hover:underline transition-colors">Competition</Link></li>
                        <li><Link to="/workshop" className="text-white hover:text-green-300 hover:underline transition-colors">Workshop</Link></li>
                        <li><Link to="/talkshow" className="text-white hover:text-green-300 hover:underline transition-colors">Talkshow</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Ikuti Kami</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li>
                            <a href="https://www.instagram.com/invofest_harkatnegeri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 hover:underline transition-colors">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@invofest2024" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 hover:underline transition-colors">
                                Youtube
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Alamat</h3>
                    <p className="text-sm opacity-80 mb-2">
                        Jl. Sisingamangaraja No.69, Tegal, Jawa Tengah
                    </p>
                    <a 
                        href="https://www.google.com/maps?ll=-6.868477,109.10792&z=15&t=m&hl=en&gl=ID&mapclient=embed&cid=16421846192122562303" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-green-300 underline"
                    >
                        Lihat di Google Maps →
                    </a>
                </div>
            </div>
            <div className="border-t border-green-300/20 mt-12 pt-8 text-center text-xs opacity-70">
© 2026 EQUATOR_APT // SYSTEM_BREACH. All rights reserved.
            </div>
        </footer>
    );
};

