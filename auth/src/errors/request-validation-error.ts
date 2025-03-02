import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    constructor(public errors: ValidationError[]){
        super('Validation problem');

        // Only becasue we are extending a built in calss
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors(){ 
        return this.errors.map(err=>{
            if(err.type==='field'){
                return { message: err.msg, field: err.path}
            }
            return { message: err.msg}
        });
    }
}