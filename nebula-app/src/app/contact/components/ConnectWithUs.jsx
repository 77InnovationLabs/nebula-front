import { Twitter, Linkedin } from 'lucide-react';

export default function () {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>

            <div className="mb-6">
                <p className="text-gray-600">
                    Email: <a href="mailto:support@skillstamp.com" className="text-blue-600 hover:text-blue-700">support@nebulaquest.edu</a>
                </p>
            </div>

            <div className="mb-6">
                <p className="text-gray-600 mb-4">Follow us on social media:</p>

                <div className="flex space-x-6">
                    <a
                        href="#"
                        className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                        <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center group-hover:border-gray-400 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </div>
                        <span className="text-sm">Twitter</span>
                    </a>

                    <a
                        href="#"
                        className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                        <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center group-hover:border-gray-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );
}