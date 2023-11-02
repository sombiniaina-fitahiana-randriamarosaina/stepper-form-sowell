export default class Validator {
    static required(value : string){
        return !!value;
    }

    static date(value : string){
        return /^(19|20)\d\d(\/|-)(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12][0\/9]|3[01])$/.test(value);
    }

    static year(value : string){
        return /^(19|20)\d\d$/.test(value);
    }

    static positiveNumber(value : string){
        return parseInt(value) > 0;
    }

    static link(value : string){
        const urlPattern = /^http(s)?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\S*)$/;
        return urlPattern.test(value);
    }
}