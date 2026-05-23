import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Trophy, User, Laptop, MessageCircle, UserCircle, Menu, X } from 'lucide-react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-black shadow-sm z-50 py-4 px-4 md:px-8 flex justify-between items-center">
            <div className="text-white font-sans font-extrabold text-xl tracking-tight">EQUATOR_APT //</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center">
                <Link to="/" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors">
                    <Home size={18} />
                    <span>Beranda</span>
                </Link>
                <Link to="/competition" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors">
                    <Trophy size={18} />
                    <span>Competition</span>
                </Link>
                <Link to="/seminar" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors">
                    <User size={18} />
                    <span>Seminar</span>
                </Link>
                <Link to="/workshop" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors">
                    <Laptop size={18} />
                    <span>Workshop</span>
                </Link>
                <Link to="/talkshow" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors">
                    <MessageCircle size={18} />
                    <span>Talkshow</span>
                </Link>
                <Link to="/login" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors">
                    <UserCircle size={20} />
                </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black shadow-lg md:hidden">
                    <nav className="flex flex-col p-4 gap-4">
                        <Link to="/" className="flex items-center gap-3 p-2 text-white hover:bg-green-900/60 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                            <Home size={18} />
                            <span>Beranda</span>
                        </Link>
                        <Link to="/competition" className="flex items-center gap-3 p-2 text-white hover:bg-green-900/60 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                            <Trophy size={18} />
                            <span>Competition</span>
                        </Link>
                        <Link to="/seminar" className="flex items-center gap-3 p-2 text-white hover:bg-green-900/60 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                            <User size={18} />
                            <span>Seminar</span>
                        </Link>
                        <Link to="/workshop" className="flex items-center gap-3 p-2 text-white hover:bg-green-900/60 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                            <Laptop size={18} />
                            <span>Workshop</span>
                        </Link>
                        <Link to="/talkshow" className="flex items-center gap-3 p-2 text-white hover:bg-green-900/60 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                            <MessageCircle size={18} />
                            <span>Talkshow</span>
                        </Link>
                        <Link to="/login" className="flex items-center gap-3 p-2 text-white hover:bg-green-900/60 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                            <UserCircle size={20} />
                            <span>Login</span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

