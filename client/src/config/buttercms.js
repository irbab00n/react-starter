import Butter from 'buttercms';

/* THIS IS AN API KEY, REFACTOR TO NON-LOCAL USE ASAP */
const butter = Butter(process.env.BUTTERCMS_API_KEY);


export default butter;