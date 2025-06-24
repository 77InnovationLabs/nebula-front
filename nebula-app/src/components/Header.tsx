import { ChevronDown } from 'lucide-react';

export default function Header(){

    return(
        <div>
            <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-indigo-600">NebulaQuest</div>
            <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Courses</a>
            <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
            About Us <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            </div>
            </div>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Menu
            </button>
            </div>
            </nav>
            </header>
        </div>
    )
}