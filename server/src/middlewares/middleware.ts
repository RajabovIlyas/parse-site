import httpContext from 'express-http-context';



export function loggingBefore (request: Request, response: Response, next?: (err?: any) => any): any {
    console.log('do something Before...');
    console.log('set traceId = 123');
    httpContext.set('traceId', 123);
    next();
}

export function loggingAfter (request: Request, response: Response, next?: (err?: any) => any): any {
    console.log('do something After...');
    console.log(`tracedId = ${httpContext.get('traceId')}`);
    next();
}
