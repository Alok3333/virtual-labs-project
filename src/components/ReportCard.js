import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import styles from './ReportCard.module.css'

function ReportCard() {
    const popup = () => {
        alert("Submitted successfully!");
    }
    return (
        <div className={`card ${styles.carditem}`} style={{ width: "20rem" }}>
            <div class="card-body">
                <h5 class="card-title" className={styles.rate}>Report a Bug </h5>
                <hr />
                <div className={styles.ratestart}>
                    <p>Please select the issue</p>
                    <div>
                        <input type="checkbox" id="issue" name="issue" />
                        <label for="issue">Incorrect Options</label>
                    </div>
                    <div>
                        <input type="checkbox" id="issue" name="issue" />
                        <label for="issue">Incorrect Answer</label>
                    </div>
                    <div>
                        <input type="checkbox" id="issue" name="issue" />
                        <label for="issue">Incorrect Question</label>
                    </div>
                    <div>
                        <input type="checkbox" id="issue" name="issue" />
                        <label for="issue">Page Not Loading</label>
                    </div>
                    <div>
                        <input type="checkbox" id="issue" name="issue" />
                        <label for="issue">Content Not Visible</label>
                    </div>
                    <div>
                        <input type="checkbox" id="issue" name="issue" />
                        <label for="issue">Incorrect Content</label>
                    </div>
                    <br />
                    <div>
                        <p>Please describe your issue</p>
                        <textarea cols="28" rows="3"></textarea>
                    </div>
                </div>
                <hr />
                <div className={styles.btn}>
                    <a href="#" class="btn btn-primary" onClick={popup}>Submit</a>
                    <a href="#" class="btn btn-primary">Cancel</a>
                </div>
            </div>
        </div>
    )
}

export default ReportCard;
