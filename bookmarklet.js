const localDeliveryParamName = 'deliveryMethod';
const localDeliveryParamVal = 'local_pick_up';

const url = window.location.toString();

const appendOperator = url.includes('?') ? '&' : '?';
const newUrl = url.concat(appendOperator, localDeliveryParamName, '=', localDeliveryParamVal);

window.open(newUrl, '_self');

