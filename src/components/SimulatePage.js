import React from 'react';
import styles from './SimulatePage.module.css';
import { Link, Outlet } from 'react-router-dom';

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
                    <Link to="/halfadder" className="btnlink">Half Adder</Link>
                    <Link to="/fulladder" className="btnlink">Full Adder</Link>
                </div>
                <div className={`container ${styles.wrapper}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default SimulatePage;