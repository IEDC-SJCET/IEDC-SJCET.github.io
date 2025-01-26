import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Menu className='cursor-pointer' onClick={() => setIsOpen(true)} />
      <AnimatePresence>
        {
          isOpen && (
            <motion.div className='flex flex-col gap-3 p-6 py-8 w-screen h-screen fixed overflow-hidden bg-green-500 top-0 left-0 z-10' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className='flex flex-row justify-end'>
                <X className='cursor-pointer' onClick={() => setIsOpen(false)} />
              </div>
              <a href='#why' className='text-3xl font-bold' onClick={() => setIsOpen(false)}>WHY IEDC</a>
              <a href='#events' className='text-3xl font-bold' onClick={() => setIsOpen(false)}>EVENTS</a>
              <a href='#summit' className='text-3xl font-bold' onClick={() => setIsOpen(false)}>SUMMIT</a>
              <a href='#execom' className='text-3xl font-bold' onClick={() => setIsOpen(false)}>EXECOM</a>
              <a href='#about' className='text-3xl font-bold' onClick={() => setIsOpen(false)}>ABOUT US</a>
              <a href='https://iedc-admin.vercel.app/' className='text-3xl font-bold' onClick={() => setIsOpen(false)}>LOGIN</a>
              <div className='w-full border border-neutral-50'></div>
              <div className='flex flex-col gap-1'>
                <a href="https://www.linkedin.com/company/startup-bootcamp-sjcet/">LinkedIn</a>
                <a href="https://www.instagram.com/sjcetbootcamp/">Instagram</a>
                <a href="https://www.twitter.com/sjcetbootcamp">Twitter</a>
                <a href="https://www.facebook.com/sjcetbootcamp">Facebook</a>
                <a href="https://discord.gg/5FCxcERP">Discord</a>
                <a href="https://www.youtube.com/channel/UC6v9cPvbBx4b4uyPUgtN5g">Youtube</a>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;