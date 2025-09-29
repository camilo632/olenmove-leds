import "./Leds";
import { motion } from "framer-motion"; 
import { useState, useEffect } from 'react';

interface LedProps {
  stateLed1: number; // 0 = Off, 1 = On, 2 = Blinking
  stateLed2: number;
  stateLed3: number;
  text: string;
}

function Leds({ stateLed1, stateLed2, stateLed3, text }: LedProps) {

  // States to control blinking effect for each LED
  const [isGreen, setIsGreen] = useState(true);
  const [isOrange, setIsOrange] = useState(true);
  const [isRed, setIsRed] = useState(true);

  // Interval for blinking Green LED
  useEffect(() => {
    if (stateLed1 === 2) {
      const interval = setInterval(() => {
        setIsGreen(prev => !prev);
      }, 500); // 500ms blink
      return () => clearInterval(interval);
    }
  }, [stateLed1]);

  // Interval for blinking Orange LED
  useEffect(() => {
    if (stateLed2 === 2) {
      const interval = setInterval(() => {
        setIsOrange(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [stateLed2]);

  // Interval for blinking Red LED
  useEffect(() => {
    if (stateLed3 === 2) {
      const interval = setInterval(() => {
        setIsRed(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [stateLed3]);

  // Static class assignments for On/Off states
  const led1Class = stateLed1 === 1 ? 'led-green-on' : 'led-off';
  const led2Class = stateLed2 === 1 ? 'led-orange-on' : 'led-off';
  const led3Class = stateLed3 === 1 ? 'led-red-on' : 'led-off';

  return (
        <div className="flex flex-col gap-1">
        <p className="text-md text-gray-400">{text}</p>
        <div className="flex flex-row gap-5 justify-start py-5 px-8 bg-slate-950 w-fit rounded-2xl">
        
        {/* LED 1: Green */}
        {stateLed1 === 2 ? (
                <motion.span
                className={`${isGreen ? 'led-green-on' : 'led-off'} rounded-full h-10 w-10`}
                transition={{ repeat: Infinity, repeatType: 'loop' }}
                />
        ) : (
                <span className={`${led1Class} rounded-full h-10 w-10`}></span>
        )}

        {/* LED 2: Orange */}
        {stateLed2 === 2 ? (
                <motion.span
                className={`${isOrange ? 'led-orange-on' : 'led-off'} rounded-full h-10 w-10`}
                transition={{ repeat: Infinity, repeatType: 'loop' }}
                />
        ) : (
                <span className={`${led2Class} rounded-full h-10 w-10`}></span>
        )}

        {/* LED 3: Red */}
        {stateLed3 === 2 ? (
                <motion.span
                className={`${isRed ? 'led-red-on' : 'led-off'} rounded-full h-10 w-10`}
                transition={{ repeat: Infinity, repeatType: 'loop' }}
                />
        ) : (
                <span className={`${led3Class} rounded-full h-10 w-10`}></span>
        )}
        </div>
        </div>
  );
}

export default Leds;
