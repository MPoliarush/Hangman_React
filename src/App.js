

import Header from "./Header";
import Modal from "./Modal";
import FinalMessage from "./FinalMessage";

import Main from './Main'
import Word from "./Word";


function App() {
  return (
    <Modal>
      {/* <FinalMessage></FinalMessage> */}
      <Header></Header>
      <Main></Main>
      <Word></Word>
    </Modal>
     
  );
}

export default App;
