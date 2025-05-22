// src/components/Tela2.jsx
import { motion } from "framer-motion";
import "../styles/main.css";

export default function Tela2({ proximaTela, telaAnterior }) {
  return (
    <motion.section
      className="tela tela-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="conteudo-tela">
        <motion.img
          src = "/images/remadora.png"
          alt="Remadora"
          className="img-remadora"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <h1 className="mensagem">
          Ela rema com força, mas conquista com o sorriso.
        </h1>

        <div className="navegacao">
          <button className="botao" onClick={telaAnterior}>Voltar</button>
          <button className="botao" onClick={proximaTela}>Próximo</button>
        </div>
      </div>
    </motion.section>
  );
}
