import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class SentenceHistoricalFilterService {

    private filterSubject: Subject<string[]>;

    constructor() {
        this.filterSubject = new BehaviorSubject(new Array());
    }

    getActiveFilters(): Observable<string[]> {
        return this.filterSubject.asObservable();
    }

    next(filters: string[]) {
        this.filterSubject.next(filters);
    }

}