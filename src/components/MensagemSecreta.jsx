// src/components/MensagemSecreta.jsx
import { motion } from "framer-motion";
import "../styles/main.css";

export default function MensagemSecreta({ onClose }) {
  return (
    <motion.div
      className="mensagem-secreta-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mensagem-secreta-box"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <p>
          Entre risos leves que dançam no ar,<br />
          Há um sorriso que sabe iluminar.<br />
          Com cachos soltos como ondas do mar,<br />
          E um olhar que sabe onde pousar.
        </p>
        <p>
          De remo em punho, desafia o vento,<br />
          No seu shape, move o tempo.<br />
          Vai serena, firme e divertida,<br />
          Brilha com força, transborda vida.
        </p>
        <p>
          Já sabe de quem estamos falando?<br />
          Uma dica: ela transforma qualquer dia comum em algo especial...
        </p>
        <p>
          🎈Hoje o mundo acordou com um pouco mais de cor,<br />
          🎉 E não é coincidência...
        </p>
        <p>
          <strong>
            Parabéns, Nath! 💖<br />
            Que esse novo ciclo venha com vento a favor,<br />
            muita luz nos caminhos e sorrisos que durem mais que os dias.
          </strong>
        </p>
        <button className="botao" onClick={onClose}>Fechar</button>
      </motion.div>
    </motion.div>
  );
}
