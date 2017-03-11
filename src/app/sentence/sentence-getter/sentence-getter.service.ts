import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ApiResponse, Sentence } from '../sentence';

@Injectable()
export class SentenceGetterService {

    constructor(private http: Http) { }

    getSentence(filters: string[]): Observable<Sentence> {
        debugger;
        let urlSearchParams: URLSearchParams = new URLSearchParams();
        urlSearchParams.set('escape', 'javascript');
        if (filters != null && filters.length) {
            urlSearchParams.set('limitTo', filters.toString())
        }
        return this.http.get('https://api.icndb.com/jokes/random', { search: urlSearchParams })
            .map(response => response.json() as ApiResponse)
            .map(response => response.value);
    }
}