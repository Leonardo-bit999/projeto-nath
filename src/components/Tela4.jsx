// src/components/Tela4.jsx
import { motion } from "framer-motion";
import "../styles/main.css";

export default function Tela4({ proximaTela, telaAnterior }) {
  const simbolos = ["❤️", "💖", "⭐", "✨", "💫", "🌟"];

  return (
    <motion.section
      className="tela tela-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Partículas dançantes */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => {
          const item = simbolos[Math.floor(Math.random() * simbolos.length)];
          const left = Math.random() * 100;
          const dur = (Math.random() * 3 + 3).toFixed(2); // entre 3s e 6s
          const delay = (Math.random() * 3).toFixed(2);

          return (
            <motion.span
              key={i}
              className="particle"
              style={{ left: `${left}%`, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {item}
            </motion.span>
          );
        })}
      </div>

      <div className="conteudo-tela">
        <h1 className="mensagem">
          Onde Nath chega, a vibe muda.
        </h1>

        <div className="navegacao">
          <button className="botao" onClick={telaAnterior}>Voltar</button>
          <button className="botao" onClick={proximaTela}>Próximo</button>
        </div>
      </div>
    </motion.section>
  );
}
