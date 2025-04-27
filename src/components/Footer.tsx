
import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F1F0FB] py-6 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center text-gray-600">
          <Copyright className="mr-2 h-5 w-5" />
          <span>2024 Platform Engineering Playlist. Made with ❤️ by </span>
          <a 
            href="https://lovable.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-1 font-bold text-[#8B5CF6] hover:underline"
          >
            Lovable
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
