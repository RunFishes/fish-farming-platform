
const localStorage = window.localStorage

class localInfomation {
    save(key,value) {
        try {
            if(typeof value === 'object' && value) {
                value = JSON.stringify(value)
                localStorage.setItem(key,value) 
            }else {
                localStorage.setItem(key,value)
            }
        }catch(e) {
            console.log(e)
            throw e
        }
    }

    get(key) {
        try {
            const result = localStorage.getItem(key) || null
            if(result) {
                if(result[0] === '{' || result[0] === '[') {
                    return JSON.parse(result)
                }
                return result
            }
            return null
        }catch(e) {
            console.log(e)
            throw e
        }
    }
}

export default new localInfomation()