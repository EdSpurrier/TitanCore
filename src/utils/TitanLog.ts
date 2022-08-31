import chalk from 'chalk';


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
const good = chalk.bold.green;
const lineBreak = chalk.bold.grey;
const line = chalk.bold.grey;

export class TitanLog {

    debug : boolean = false;
  
    

	constructor(options) {

		console.log("TitanLog Loaded:", options);

        this.debug = process.env.DEBUG === 'true';

        this.log = console.log;
	}

    lineSpace = () => {
        this.log('');
    }

    lineBreak = () => {
        this.lineSpace();
        this.log(lineBreak('[====================]'));
        this.lineSpace();
    }

    line = () => {
        this.log(line('[====================]'));
    }

    debugLog = (...output) => {
        if(this.debug)
        this.log(output);
    }

    log = (...output) => {
        this.log(output);
    }

    logError = (...output) => {
        this.lineBreak();
        this.log(error('[ERROR]>', output));
        this.lineBreak();
    }

    init = () => {
        this.log(this.debug?good('Debug => Active'):warning('Debug => Inactive'));
    }
}
