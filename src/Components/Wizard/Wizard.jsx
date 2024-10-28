import React , {useState}from 'react';
import styles from './Wizard.module.css'; 

const Wizard = ({ step, stepCount }) => {
    const [showWizard, setShowWizard] = useState(true);

    const closeWizard = () => {
        setShowWizard(false);
    };

    const getCircleClass = (circleNumber) => 
        circleNumber <= step ? `${styles.circle} ${styles.active}` : styles.circle;

    if (!showWizard) return null;

    const circles = [];
    for (let i = 1; i <= stepCount; i++) {
        circles.push(
            <div key={i} className={getCircleClass(i)}>{i}</div>
        );
    }

    return (
        <div className={styles.wizard}>
            <button className={styles.closeButton} onClick={closeWizard}>✖</button>
            {circles}
        </div>
    );
};

export default Wizard;
