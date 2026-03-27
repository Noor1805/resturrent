import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           
           {/* Brand */}
           <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif text-white tracking-tighter mb-6">OBSIDIAN</h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                 Where shadow meets flavor. Redefining the boundaries of fine dining in the heart of New York City.
              </p>
           </div>

           {/* Links */}
           <div className="lg:col-span-1">
              <h4 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-light text-gray-400">
                 <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Private Events</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">The Chef</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Reservations</a></li>
              </ul>
           </div>

           {/* Contact */}
           <div className="lg:col-span-1">
              <h4 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium mb-6">Contact</h4>
              <ul className="space-y-4 text-sm font-light text-gray-400">
                 <li>+1 (212) 555-0199</li>
                 <li>reservations@obsidian.nyc</li>
                 <li>press@obsidian.nyc</li>
                 <li className="pt-4 flex gap-4">
                    {/* Social Icons Placeholder */}
                    <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-colors cursor-pointer">In</div>
                    <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-colors cursor-pointer">Fb</div>
                 </li>
              </ul>
           </div>

           {/* Location / Hours */}
           <div className="lg:col-span-1">
              <h4 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-medium mb-6">Visit</h4>
              <ul className="space-y-4 text-sm font-light text-gray-400">
                 <li>125 West 55th Street<br/>New York, NY 10019</li>
                 <li className="pt-4">Mon-Wed: 5pm - 11pm</li>
                 <li>Thu-Sat: 5pm - 1am</li>
                 <li>Sun: Closed</li>
              </ul>
           </div>
           
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs text-gray-600 font-light">
           <p>&copy; {new Date().getFullYear()} Obsidian Restaurant. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
