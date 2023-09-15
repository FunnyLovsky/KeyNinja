export const resultProvider = () => {

    const getResult = (array, time, countError) => {
        const endTime = Date.now() - time;
        const speed = Math.floor((array.length * 60) / Math.floor(endTime / 1000));

        const fullTime = new Date(endTime);
    
        let minut = fullTime.getMinutes().toString();
        let second = fullTime.getSeconds().toString();
        let milsecond = fullTime.getMilliseconds().toString();
    
        if(minut.length < 2) {
            minut = `0${minut}`
        }
        
        if(second.length < 2) {
            second = `0${second}`
        }
    
        if(milsecond.length < 2) {
            milsecond = `0${milsecond}`
        } else {
            milsecond = milsecond.slice(0, 2)
        }

    
        return [`${minut}:${second}:${milsecond}`, countError, speed];
    }

    return getResult;
}