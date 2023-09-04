import textArray from "./textArray.js";
import counterError from "./countError.js";
import timer from './timer.js';

class App {
    constructor() {

    }

    start() {
        timer.start()
    }

    getArray() {
        return textArray.getArray();
    }

    resetArray() {
        return textArray.resetArray();
    }

    getResult() {
        let time = timer.getTime();

        return [time, counterError.getCountError(), counterError.getSpeed(textArray._length, timer._speed)]
    }
}

export default App;