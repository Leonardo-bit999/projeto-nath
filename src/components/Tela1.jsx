// src/components/Tela1.jsx
import { motion } from "framer-motion";
import "../styles/main.css";

export default function Tela1({ proximaTela }) {
  return (
    <motion.section
    className="tela tela-1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >

      <div className="conteudo-tela">
         <motion.img
          src = "/src/images/sol.gif"
          alt="Sol"
          className="img-sol"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <h1 className="mensagem">Hoje é um dia especial…</h1>

        <button className="botao" onClick={proximaTela}>Próximo</button>
      </div>
    </motion.section>
  );
}
