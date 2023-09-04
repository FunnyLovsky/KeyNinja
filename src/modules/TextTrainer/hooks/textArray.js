import arrayTexts from '../data/textTrainer.js';

class TextArray {
    constructor() {
        this._text = '';
        this._arr = [];
        this._counter = 0;
        this._length = 0;
        this._texts = arrayTexts;
    }

    getArray() {
        if((this._texts.length - 1) >= this._counter) {
            return this.createArray();
        } else {
            this._counter = 0;
            return this.createArray();
        }
    }

    createArray() {
        this._arr = [];
        this._text = this._texts[this._counter].split('');

        this._text.forEach((element) => {
            this._arr.push({
                id: Math.floor(Date.now() / (Math.random() * 10)),
                text: element,
                status: 'none'
            })
        })
        this._length = this._arr.length;
        console.log('arr.length', this._length)
        this._counter += 1;
        console.log('get',this._arr[0]);
        return this._arr;
    }

    resetArray() {
        this._arr.forEach(elem => {
            elem.status = 'none';
        });
        console.log('res',this._arr[0]);
        return this._arr
    }
} 

export default new TextArray();
