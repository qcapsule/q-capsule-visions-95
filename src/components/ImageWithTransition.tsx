import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageWithTransitionProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

export const ImageWithTransition = ({
  src,
  alt = "",
  className = "",
  style = {},
  onLoad,
  onError,
}: ImageWithTransitionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);

    // Preload the image
    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      setHasError(true);
      onError?.();
    };

    img.src = src;
  }, [src, onLoad, onError]);

  if (hasError) {
    return (
      <div className={`${className}`} style={style}>
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`${className}`}
      style={{
        backgroundImage: `url(${src})`,
        ...style,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </motion.div>
  );
};
