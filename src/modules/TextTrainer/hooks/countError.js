class CounterError {
    constructor() {
        this._count = 0;
    }

    counter() {
        this._count += 1; 
    }

    getCountError() {
        return this._count;
    }

    clear() {
        this._count = 0;
    }

    getSpeed(length, time) {
        console.log(length, time)
        return Math.floor((length * 60) / Math.floor(time / 1000));
    }
}

export default new CounterError();

