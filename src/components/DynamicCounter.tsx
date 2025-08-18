import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface DynamicCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const DynamicCounter: React.FC<DynamicCounterProps> = ({ end, duration = 2.5, suffix = '', prefix = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div ref={ref}>
      {isMounted && inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        <>{prefix}{end}{suffix}</>
      )}
    </div>
  );
};

export default DynamicCounter;