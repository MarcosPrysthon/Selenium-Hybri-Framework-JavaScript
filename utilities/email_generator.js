//var Chance = require('chance');
import Chance from 'chance';
var chance = new Chance();

const generateEmail = () => {
    return chance.email({domain: 'gmail.com'})
}

export default generateEmail;