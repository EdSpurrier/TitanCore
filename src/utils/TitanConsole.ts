import chalk from 'chalk';


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
const good = chalk.bold.green;
const lineBreak = chalk.bold.grey;
const line = chalk.bold.grey;


const classColor = chalk.hex('#6d3ddb');
const processComplete = chalk.hex('#3ddbcc');
const success = chalk.hex('#3ddb45');


export class TitanConsole {

    debug : boolean = false;
  
    

	constructor(options) {

		

        this.debug = process.env.DEBUG === 'true';

        this.log = console.log;
        this.logProcessComplete(this.constructor.name, 'Constructed');
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

    logProcessComplete = (processClass, ...output) => {
        this.log(classColor(processClass), '=>', processComplete(...output), success('[Complete]'));
    }

    init = () => {
        this.log(this.debug?good('Debug => Active'):warning('Debug => Inactive'));
    }
}
