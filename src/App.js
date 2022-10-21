/*
 * NOTE
 * Simple project to showcase all the hooks with examples in ReactJs
 * Created By : Younes Ghorbany
 * Contact Information : younes.gh@chmail.ir
 */

import Accordion from "./components/Accordion";
import {
  UseMemoExample,
  UseRefExample,
  UseCallbackExample,
  UseReducerExample,
  UseLayoutEffectExample,
  UseDeferredValueExample,
  UseTransition,
  UseImperativeHandleExample,
  CustomHooks,
} from "./hooks";

const App = () => {
  return (
    <div className="container">
      <div className="text-center mt-2">
        <h2>React Hooks 🚀</h2>
      </div>
      <hr className="text-danger" />
      <Accordion title="useRef hook" heading="headingOne">
        <UseRefExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="useMemo hook" heading="headingTwo">
        <UseMemoExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="useCallback hook" heading="headingThree">
        <UseCallbackExample />
      </Accordion>
      <hr className="text-dark" />
      <Accordion title="useReducer hook" heading="headingFour">
        <UseReducerExample />
      </Accordion>
      <hr className="text-info" />
      <Accordion title="useLayoutEffect hook" heading="headingFive">
        <UseLayoutEffectExample />
      </Accordion>
      <hr className="text-warning" />
      <Accordion title="useDeferredValue hook" heading="headingSix">
        <UseDeferredValueExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="useTransition hook" heading="headingSeven">
        <UseTransition />
      </Accordion>
      <hr className="text-success" />
      <Accordion
        title="useImperativeHandle hook"
        heading="headingEight"
      >
        <UseImperativeHandleExample />
      </Accordion>
      <hr className="text-danger" />
      <Accordion title="custom hook" heading="headingNine">
        <CustomHooks />
      </Accordion>
      <hr className="text-dark" /> 
    </div>
  );
};

export default App;
