"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

  const handleRouteChange = (url: string) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setNextPath(url);
      setTimeout(() => {
        router.push(url);
        setIsAnimating(false); // Reset después del cambio de página
      }, 1000); // Espera a que termine la animación
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Máscara de transición */}
      {isAnimating && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black z-50"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}

      {/* Mantiene el contenido visible */}
      {children}
    </div>
  );
};

export default PageTransition;
