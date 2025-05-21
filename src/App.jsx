import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";
import Tela4 from "./components/Tela4";
import Tela5 from "./components/Tela5";

import "./styles/main.css";

function App() {
  const [telaAtual, setTelaAtual] = useState(1);

  const proximaTela = () => {
    if (telaAtual < 5) setTelaAtual(telaAtual + 1);
  };

  const telaAnterior = () => {
    if (telaAtual > 1) setTelaAtual(telaAtual - 1);
  };

  const voltarInicio = () => {
    setTelaAtual(1);
  };

  return (
    <>
      {telaAtual === 1 && <Tela1 proximaTela={proximaTela} />}
      {telaAtual === 2 && <Tela2 proximaTela={proximaTela} telaAnterior={telaAnterior} />}
      {telaAtual === 3 && <Tela3 proximaTela={proximaTela} telaAnterior={telaAnterior} />}
      {telaAtual === 4 && <Tela4 proximaTela={proximaTela} telaAnterior={telaAnterior} />}
      {telaAtual === 5 && <Tela5 voltarInicio={voltarInicio} />}
    </>
  );
}

export default App;
