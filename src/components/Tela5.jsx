// src/components/Tela5.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import MensagemSecreta from "./MensagemSecreta";

import "../styles/main.css";

export default function Tela5({ voltarInicio }) {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  return (
    <motion.section
        className="tela tela-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        
      <div className="conteudo-tela">
        <div className="fogos-container">
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className={`fogo f${i + 1}`}>
                    {Array.from({ length: 15 }).map((_, j) => (
                    <span key={j} />
                ))}
                </div>
            ))}
        </div>

        <h1 className="mensagem">
        Parabéns, Nath!<br />Você é uma explosão de luz, alegria e amor 💖🎉
        </h1>

        <div className="navegacao">
          <button className="botao" onClick={voltarInicio}>Rever história</button>
          <button className="botao" onClick={() => setMostrarMensagem(true)}>Mensagem secreta</button>
        </div>
      </div>

      {mostrarMensagem && <MensagemSecreta onClose={() => setMostrarMensagem(false)} />}
    </motion.section>
  );
}
