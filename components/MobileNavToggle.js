'use client';
import { motion } from 'framer-motion';

const Path = props => {
  return (
    <motion.path
      fill='transparent'
      stroke='rgb(39, 39, 42)'
      strokeWidth='3'
      strokeLinecap='round'
      {...props}
    />
  );
};

const MobileNavToggle = ({ toggle }) => {
  return (
    <button onClick={toggle}>
      <svg
        width='60'
        height='60'
        viewBox='0 0 100 36'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Path
          variants={{
            closed: { d: 'M 2 3 L 50 3' },
            open: { d: 'M 3 33 L 48 3' },
          }}
        />
        <Path
          d='M 2 18 L 50 18'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0, d: 'M 2 18 L 90 18' },
          }}
          transition={{ duration: 0.2 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 33 L 50 33' },
            open: { d: 'M 3 3 L 48 33' },
          }}
        />
      </svg>
    </button>
  );
};

export default MobileNavToggle;
