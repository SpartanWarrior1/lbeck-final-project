import { library } from '@fortawesome/fontawesome-svg-core';

import { 
    faEnvelope, 
    faLock, 
    faPhone,
    faCircleNotch
} from '@fortawesome/free-solid-svg-icons';

import {
    faPlusSquare,
    faTimesCircle
} from '@fortawesome/free-regular-svg-icons';

const Icons = () => {
    return library.add(faEnvelope, faLock, faPhone, faCircleNotch, faPlusSquare, faTimesCircle);
}

export default Icons;