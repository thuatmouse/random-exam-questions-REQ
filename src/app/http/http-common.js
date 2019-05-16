import axios from 'axios';
// var Component = module.exports;

// Component.posJSON = function() {

// }


var Component = {
    postJSON: function(url, formData, callback) {
        // console.log('line 16', url, formData);
        axios.post(url, {
                body: formData
            })
            .then(response => {
                callback(response);
            })
            .catch(e => {
                console.log('line 23', e);
            })
    },
    // return this;
};


export default Component;