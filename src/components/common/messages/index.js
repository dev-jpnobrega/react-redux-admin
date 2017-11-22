import React from 'react';
import ReactToaster from 'react-redux-toastr';

const MessageToaster = (props) => {
    console.warn('props', props);
    return (
        <ReactToaster 
            timeOut={4000}
            newestOnTop={false}
            preventDuplicate={true}
            transitionIn="bounceIn"
            transitionOut="bounceOut"
            position="bottom-center"
            progressBar  
        />
    );
};

export default MessageToaster;