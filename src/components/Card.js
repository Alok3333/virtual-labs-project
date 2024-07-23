import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import styles from './Card.module.css'

function Card() {
    const [rating, setRating] = useState(0);

    const popup = () => {
        alert("Submitted successfully!");
    }
    return (
        <div className={`card ${styles.carditem}`} style={{ width: "20rem" }}>
            <img src={logo} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title" className={styles.rate}>Rate</h5>
                <div className={styles.ratestart}>
                    {[1, 2, 3, 4, 5].map((star) => {
                        return (
                            <span
                                className='start'
                                style={{
                                    cursor: 'pointer',
                                    color: rating >= star ? 'gold' : 'gray',
                                    fontSize: `35px`,
                                    transition: `.5s`,
                                }}
                                onClick={() => {
                                    setRating(star)
                                }}
                            >
                                {' '}
                                ★{' '}
                            </span>
                        )
                    })}
                </div>
                <hr />
                <div className={styles.btn}>
                    <a href="#" class="btn btn-primary" onClick={popup}>Submit</a>
                    <a href="#" class="btn btn-primary" onClick={() => setRating(0)}>Cancel</a>
                </div>
            </div>
        </div>
    )
}

export default Card
