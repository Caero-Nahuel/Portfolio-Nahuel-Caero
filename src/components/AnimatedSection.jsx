import { useInView, fadeInUp, fadeInLeft, fadeInRight } from '../hooks/useInView';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const animations = {
    fadeInUp,
    fadeInLeft,
    fadeInRight
  };

  const selectedAnimation = animations[animation] || fadeInUp;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView 
          ? 'translateY(0) translateX(0)' 
          : `translateY(${selectedAnimation.initial.y}px) translateX(${selectedAnimation.initial.x}px)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
