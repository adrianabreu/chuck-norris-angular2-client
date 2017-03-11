import { Component, OnInit } from '@angular/core';
import { SentenceHistoricalFilterService } from './sentence-historical-filter.service';
import { SentenceHistoricalService } from '../';

import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    selector: 'sentence-historical-filter',
    templateUrl: 'sentence-historical-filter.component.html',
    styleUrls: ['./sentence-historical-filter.component.css']
})
export class SentenceHistoricalFilterComponent implements OnInit {

    private activeFilters: string[];
    private categories: string[];

    constructor(
        private sentenceHistoricalFilterService: SentenceHistoricalFilterService,
        private sentenceHistoricalService: SentenceHistoricalService
    ) { }

    ngOnInit() {
        this.sentenceHistoricalService.getCategories().subscribe((categories: string[]) => {
            this.categories = categories;
        });
        this.sentenceHistoricalFilterService.getActiveFilters().subscribe((filters: string[]) => this.activeFilters = filters);
    }


    toogleFilter(filter: string) {
        if (!this.isActive(filter)) {
            this.activeFilters.push(filter);
        } else {
            this.activeFilters.splice(this.activeFilters.indexOf(filter), 1);
        }
        this.sentenceHistoricalFilterService.next(this.activeFilters);

    }

    isActive(filter: string | string[]): boolean {
        if (!Array.isArray(filter)) {
            filter = [filter];
        }
        return _.size(_.intersection(this.activeFilters, filter)) > 0;
    }

    isEmpty(): boolean {
        return this.activeFilters.length === 0;
    }

    get(): string[] {
        return this.activeFilters;
    }

    clearFilter() {
        this.activeFilters = [];
        this.sentenceHistoricalFilterService.next(this.activeFilters);
    }
}