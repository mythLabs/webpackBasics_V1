import '../css/main.css';
import '../css/input-elements.css';

import {secretButton,secretParagraph} from './dom-loader';

var showSecret =false;
secretButton.addEventListener('click',toggleSecretState);
updatesecretParagraph();
function toggleSecretState() {
    showSecret = !showSecret;
    updatesecretbutton (); 
    updatesecretParagraph ();
}

function updatesecretbutton () {
    if(showSecret) {
         secretButton.textContent="Hide the secret";
    } else {
        secretButton.textContent="Show the secret";
    }
}

function updatesecretParagraph () {
    if(showSecret) {
         secretParagraph.style.display="block";
    } else {
        secretParagraph.style.display="none";
    }
}