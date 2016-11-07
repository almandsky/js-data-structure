import React from 'react';
import ReactDOM from 'react-dom';
import CodeStore from './CodeStore';
import CodeViewer from './CodeViewer';

import '../vendor/css/theme.css';
import '../vendor/js/syntaxhighlighter';

const app = document.getElementById('app');

ReactDOM.render(<CodeViewer store={CodeStore} />, app);
