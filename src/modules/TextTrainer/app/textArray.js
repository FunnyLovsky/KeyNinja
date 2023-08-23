
class TextArray {
    constructor() {
        this._text = '';
        this._arr = [];
        this._counter = 0;
        this._length = 0;
    }

    getArray() {
        if((texts.length - 1) >= this._counter) {
            return this.createArray();
        } else {
            this._counter = 0;
            return this.createArray();
        }
    }

    createArray() {
        this._arr = [];
        this._text = texts[this._counter].split('');

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

const texts = [
    `На Западе норманны захватили часть Франции, потом Англию и Южную Италию.`,

    `Дикие татары Южной Сибири промышляли охотой и рыбной ловлей, они не знали даже ханской власти и управлялись старейшинами, подчиняясь им добровольно.`,

    `Образовались партии, боровшиеся друг с другом, а с крестьян взимали налоги наоплату всех этих беззаконных действий.`,

    `На рельсах стоял неподвижно другой поезд, груженный углем. Мы затаили дыхание, когда убедились, что скорый поезд несется по тому же пути.`
];



export default new TextArray();
