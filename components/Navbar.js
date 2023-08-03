import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 px-9 bg-transparent backdrop-blur-sm'>
      <div className='w-2/6'>
        <h2 className='font-dm-sans font-bold text-xl'>
          H&L CONSTRUCTION AND DEVELOPMENT, INC.
        </h2>
      </div>
      <div className='flex justify-around w-2/6'>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
      </div>
      <div className='flex justify-end w-2/6'>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
