"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Link from 'next/link';

export default function Header() {
    const { isConnected } = useAccount();

    return (
        <div>
            <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-8">
                            <div className="hidden md:flex space-x-8">
                                <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
                                <Link href="/catalog" className="text-gray-700 hover:text-indigo-600 transition-colors">Catalog</Link>
                                <Link href="/aboutUs" className="text-gray-700 hover:text-indigo-600 transition-colors">About Us</Link>
                                <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
                                {isConnected && (
                                    <Link href="/profile" className="text-gray-700 hover:text-indigo-600 transition-colors">Profile</Link>
                                )}
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-indigo-600">NebulaQuest</div>
                        <ConnectButton/>
                    </div>
                </nav>
            </header>
        </div>
    )
}