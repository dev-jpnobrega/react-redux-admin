import React from 'react';
import ReactToaster from 'react-redux-toastr';

//import './react-redux-toastr.css'

export default props => {  
    console.warn('props', props);
    return (
        <ReactToaster 
            timeOut={4000}
            newestOnTop={false}
            preventDuplicate={true}
            transitionIn="bounceIn"
            transitionOut="bounceOut"
            position="top-right"
            progressBar  
        />
    );
};