import React , {useState}from 'react';
import '../../../App.css'
import Wizard from '../../Wizard/Wizard.jsx';
import styles from './Home.module.css'; 


function Home() {
  const stepCount =7;
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => (prevStep < stepCount ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className='page'>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Wizard step={step} stepCount={stepCount}/>
      <div>
        <button className={styles.button} onClick={handlePrev}>Prev</button>
        <button className={styles.button} onClick={handleNext}>Next</button>
      </div>
      <div>QA: {step}</div>
    </div>
  );
}

export default Home;