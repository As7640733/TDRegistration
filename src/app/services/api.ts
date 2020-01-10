import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class api{
    constructor(private http: HttpClient){}
    post(url:string, obj: string):Observable<any>{
        return this.http.post(url, obj,{responseType:'text'});
    }
}