import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 lg:col-span-2">
            <img
              src="/Southerndepotlogowhitetext.png"
              alt="Southern Pine Depot"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Factory Direct Southern Yellow Pine. <br />
              <span className="text-white font-medium">Milled in Mississippi. Stocked in Mt Juliet.</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Contact & Location</h3>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Mt Juliet Warehouse</p>
                <p className="text-gray-400 text-sm">245 Couchville Industrial Blvd<br />Mount Juliet, TN 37122</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">601-927-6692</p>
            </div>
          </div>

          <div>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Hours</h3>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">By Appointment Only</p>
                <p className="text-gray-400 text-sm">(Will-Call)</p>
                <p className="text-gray-500 text-xs mt-2">Please schedule at least 24 hours in advance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Southern Pine Depot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;