import React , {useState}from 'react';
import '../../App.css'
import Wizard from '../Wizard/Wizard.jsx';
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
      <div className={styles.hero}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/s36WRbd3A_Y?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Wizard step={step} stepCount={stepCount}/>
      <div>
        <button className={styles.button} onClick={handlePrev}>Prev</button>
        <button className={styles.button} onClick={handleNext}>Next</button>
      </div>
      <div style={{ marginTop: '10px' }}>QA: {step}</div>
    </div>
  );
}

export default Home;