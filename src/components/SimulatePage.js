import React from 'react';
import styles from './SimulatePage.module.css';

const SimulatePage = () => {
    return (
        <>
            <div className="container mt-4 height">
                <h2 className={styles.title}>
                    Construction of half/ full adder using XOR and NAND gates and
                    verification of its operation
                </h2>

                <div className={styles.title1}>
                    <h2>Simulation</h2>
                </div>
                <div className="btns">
                    <button type="button" className="btn btn-primary">
                        Half Adder
                    </button>
                    <button type="button" className="btn btn-primary">
                        Full Adder
                    </button>
                </div>
            </div>
        </>
    )
}

export default SimulatePage;