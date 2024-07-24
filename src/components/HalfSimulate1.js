import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './HalfSimulate.module.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

function HalfSimulate1() {
    const [isSupply, setIsSupply] = useState(false);
    const [inputA, setInputA] = useState(false);
    const [inputB, setInputB] = useState(false);

    return (
        <div>
            <Link to={"/theory"} className='btnlink'>INSTRUCTIONS</Link>
            <div className={`container ${styles.cntwrapper}`}>
                <p className={styles.title}>
                    <b>Experiment to perform logic of half adder on kit</b>
                </p>
                <div className='d-flex mx-3 mt-3'>
                    <div className='ms-5 mt-3'>
                        {isSupply ? (
                            <img src='https://de-iitr.vlabs.ac.in/exp/half-full-adder/simulation/switchon.png' onClick={() => setIsSupply(!isSupply)} width="70" height="40" alt="..." />
                        ) : (
                            <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/simulation/switchoff.png" onClick={() => setIsSupply(!isSupply)} width="70" height="40" alt="..." />
                        )
                        }
                        <p>Supply</p>

                        {inputA ? (
                            <img src='https://de-iitr.vlabs.ac.in/exp/half-full-adder/simulation/switchon.png' onClick={() => setInputA(!inputA)} style={{ marginTop: "127px" }} width="70" height="40" alt="..." />
                        ) : (
                            <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/simulation/switchoff.png" onClick={() => setInputA(!inputA)} style={{ marginTop: "127px" }} width="70" height="40" alt="..." />
                        )
                        }
                        <p>Input A</p>

                        {inputB ? (
                            <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/simulation/switchon.png" onClick={() => setInputB(!inputB)} width="70" height="40" alt="..." />
                        ) : (
                            <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/simulation/switchoff.png" onClick={() => setInputB(!inputB)} width="70" height="40" alt="..." />
                        )
                        }
                        <p>Input B</p>
                    </div>

                    {
                        isSupply ? (
                            inputA && inputB ? (<img src={img3} alt="..." />) : (<img src={img1} alt="..." />) &&
                                inputA ? (<img src={img2} alt="..." />) : (<img src={img1} alt="..." />) &&
                                    inputB ? (<img src={img2} alt="..." />) : (<img src={img1} alt="..." />)
                        ) : (<img src={img1} alt="..." />)
                    }
                </div>

                {/* <div className='pt-5 ps-5'>
                    <button type="submit" className="btn btn-outline-primary">Add</button>
                    <button type="reset" className="btn btn-outline-primary ms-2">Reset</button>
                </div> */}


                <div className='p-5'>
                    <h2>EXAMPLE OF TRUTH TABLE</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Serial No.</th>
                                <th scope="col">InputA</th>
                                <th scope="col">InputB</th>
                                <th scope="col">Sum</th>
                                <th scope="col">Carry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to={"/"}>Back to home</Link>
        </div>
    )
}

export default HalfSimulate1;
