// src/components/Carregando.jsx
import { motion } from "framer-motion";
import "../styles/main.css";

export default function Carregando() {
  return (
    <motion.div
      className="tela-carregamento"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="loader"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        💖
      </motion.div>
      <p className="texto-carregando">Carregando surpresa mágica...</p>
    </motion.div>
  );
}
