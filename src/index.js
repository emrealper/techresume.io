import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Resume from './resume';



ReactDOM.render(<Resume/>, document.getElementById('root'));

registerServiceWorker();
