import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import styles from './PopUp.module.css';

const PopUp = () => (
  <Popup
    trigger={<p className={styles.popUp}>Click me</p>}
    position="bottom left"
  >
    <div>
      <p
        className={styles.popUpText}
        style={{ width: '200px', marginRight: '20px' }}
      >
        “Photography is a way of feeling, of touching, of loving. What you have
        caught on film is captured forever… It remembers little things, long
        after you have forgotten everything.”
      </p>
    </div>
  </Popup>
);

export default PopUp;
