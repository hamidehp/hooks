

import Accordion from './components/Accordion';
import UseRefExample from './hooks/UseRefExample';
import UseMemoExample from './hooks/UseMemoExample';
import UseCallbackExample from './hooks/UseMemoExample';
//import { UseMemoExample, UseRefExample, UseCallbackExample } from './hooks';
const App = () => {
  return (
    <div className="container">
      <div className="text-center mt-2">
        <h2>React Hooks 🚀</h2>
      </div>
      <hr className="text-danger" />
      <Accordion title="useRef hook example" heading="headingOne">
        <UseRefExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="useMemo hook example" heading="headingTwo">
        <UseMemoExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="useCallback example" heading="headingThree">
       <UseCallbackExample />
      </Accordion>
      <hr className="text-dark" />
    </div>
  );
};

export default App;
