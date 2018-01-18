import React from 'react';

export default function() {
  return (
    <div id="contact">
      <button onClick={() => document.querySelector('#introduction').classList.remove('contact')}>Move up</button>
      <h2>Contact Me:</h2>
    </div>
  );
}
