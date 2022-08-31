import dotenv from 'dotenv'
import { TitanLog } from './utils/TitanLog.js'

dotenv.config()

const log = new TitanLog({option: 'hi'});
log.init();

log.log("Logging Stuff", true);



log.logError("Oh This Broke...")


console.log("TitanCore loaded...");