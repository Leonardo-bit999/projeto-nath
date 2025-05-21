// src/components/Tela3.jsx
import { motion } from "framer-motion";
import "../styles/main.css";

export default function Tela3({ proximaTela, telaAnterior }) {
  const gerarGranulados = () => {
    return Array.from({ length: 40 }).map((_, i) => {
      const left = Math.random() * 100; // posição de 0% a 100%
      const hue = Math.floor(Math.random() * 360); // cor
      const dur = (Math.random() * 2 + 3).toFixed(2); // entre 3s e 5s
      const rot = (Math.random() * 30 - 15).toFixed(0); // -15 a +15 graus

      return (
        <span
          key={i}
          className="granulado"
          style={{
            left: `${left}%`,
            "--hue": hue,
            "--dur": `${dur}s`,
            "--rot": `${rot}deg`
          }}
        />
      );
    });
  };

  return (
    <motion.section
      className="tela tela-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

    {/* Chuva de granulados */}
      <div className="chuva-granulado">{gerarGranulados()}</div>

      <div className="conteudo-tela">
        <motion.img
          src = "src/images/brigadeiros.gif"
          alt="brigadeiros"
          className="img-brigadeiros"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <h1 className="mensagem">
          Ela adoça os dias<br />com sua presença.
        </h1>

        <div className="navegacao">
          <button className="botao" onClick={telaAnterior}>Voltar</button>
          <button className="botao" onClick={proximaTela}>Próximo</button>
        </div>
      </div>
    </motion.section>
  );
}
