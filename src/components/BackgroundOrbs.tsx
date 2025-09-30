import { motion } from 'framer-motion';

export const BackgroundOrbs = () => {
  const orbs = [
    {
      size: 'w-[500px] h-[500px]',
      color: 'bg-primary/20',
      position: 'top-0 left-0',
      duration: 20,
      delay: 0,
    },
    {
      size: 'w-[400px] h-[400px]',
      color: 'bg-accent/15',
      position: 'top-1/4 right-0',
      duration: 25,
      delay: 2,
    },
    {
      size: 'w-[600px] h-[600px]',
      color: 'bg-primary/10',
      position: 'bottom-0 left-1/4',
      duration: 30,
      delay: 4,
    },
    {
      size: 'w-[350px] h-[350px]',
      color: 'bg-secondary/20',
      position: 'bottom-1/3 right-1/4',
      duration: 22,
      delay: 1,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-3xl`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
