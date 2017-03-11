import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SentenceFilterService {

    private url: string = 'https://api.icndb.com/categories';
    private activeFilters: string[];

    constructor(private http: Http) {
        this.activeFilters = new Array();
    }

    get(): Observable<any> {
        return this.http.get(this.url)
            .map(response => response.json())
    }

    getActiveFilters(): string[] {
        return this.activeFilters;
    }

    add(filter: string): void {
        this.activeFilters.push(filter);
    }

    remove(filter: string): void {
        this.activeFilters.splice(this.activeFilters.indexOf(filter), 1);
    }

    clear(): void {
        this.activeFilters = [];
    }
}