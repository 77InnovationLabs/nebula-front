import { Shield, Code, Globe, Briefcase, Lock } from 'lucide-react';

export const courses = [
    {
      id: 1,
      title: "Blockchain Basics",
      description: "Learn the fundamentals of blockchain technology, including its history, key concepts, and real-world applications.",
      thumbnail: "blockchain-network",
      icon: Globe,
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      id: 2,
      title: "Smart Contract Development",
      description: "Dive into smart contract development with hands-on exercises and real-world projects. Learn to write, test, and deploy secure smart contracts.",
      thumbnail: "code-editor",
      icon: Code,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Decentralized Applications (dApps)",
      description: "Build decentralized applications (dApps) from scratch, integrating smart contracts and blockchain technology.",
      thumbnail: "dapp-interface",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Advanced Blockchain Concepts",
      description: "Explore advanced topics in blockchain, including scalability solutions, interoperability, and emerging trends.",
      thumbnail: "blockchain-sphere",
      icon: Shield,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 5,
      title: "Blockchain Security",
      description: "Learn about the security aspects of blockchain technology, including common vulnerabilities and best practices for secure development.",
      thumbnail: "security-shield",
      icon: Lock,
      gradient: "from-gray-600 to-blue-600"
    },
    {
      id: 6,
      title: "Blockchain in Business",
      description: "Understand how blockchain technology can be applied to various business sectors, including finance, supply chain, and healthcare.",
      thumbnail: "business-globe",
      icon: Briefcase,
      gradient: "from-teal-500 to-green-500"
    }
  ];