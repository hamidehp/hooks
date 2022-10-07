
import './App.css';
import Accordion from './Accordion';
import UseRefExample from './hooks/UseRefExample';
import UseMemoExample from './hooks/UseMemExample';
const App=() =>{
  return (
    <div className="container">
       <div className="text-center mt-2">
     <h2>آموزش استفاده از هوک های ری اکت</h2>
     </div>
     <hr className='text-danger' />
     <Accordion title="useREf Hook " heading ="headingOne">
     <UseRefExample />
     </Accordion>
     <hr className='text-primary' />
     <Accordion title="useMemo Hook " heading ="headingTwo">
     <UseMemoExample />
     </Accordion>
     <hr className='text-success' />
    </div>
  );
}

export default App;
