class Timer {
    constructor() {
        this._start = 0;
        this._time = 0;
        this._min = '';
        this._sec = '';
        this._milsec = '';
        this._speed = 0;
    }

    start() {
        this._start = Date.now();
        console.log('start', this._start);
    }

    getTime() {
        this._time = new Date(Date.now() - this._start);
        this._speed = this._time.getTime();
        console.log('time', this._time.getTime());

        this._min = this._time.getMinutes().toString();
        this._sec = this._time.getSeconds().toString();
        this._milsec = this._time.getMilliseconds().toString();


        if(this._min.length < 2) {
            this._min = `0${this._min}`
        }
        
        if(this._sec.length < 2) {
            this._sec = `0${this._sec}`
        }

        if(this._milsec.length < 2) {
            this._milsec = `0${this._milsec}`
        } else {
            this._milsec = this._milsec.slice(0, 2)
        }

        return `${this._min}:${this._sec}:${this._milsec}`;

    }
}

export default new Timer();