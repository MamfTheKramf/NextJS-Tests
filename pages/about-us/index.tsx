import { useState } from 'react';
import styles from '../../styles/AboutUs.module.scss';


export default function AboutUs() {

    return (
        <>
            <div className={styles.about_us}>
                <h1>
                    About Us
                </h1>
                <form action="/php/test.php" method="post">
                    <input type="text" name="in_test" id="txt" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    );
}