import { Component, OnInit } from '@angular/core';
import { SentenceHistoricalService } from './sentence-historical.service';
import { SentenceHistoricalFilterService } from './filter';
import * as _ from 'lodash';
import { Sentence } from '../sentence';

@Component({
    moduleId: module.id,
    selector: 'sentence-historical',
    templateUrl: 'sentence-historical.component.html',
    styleUrls: ['./sentence-historical.component.css']
})
export class SentenceHistoricalComponent implements OnInit {

    private sentenceHistorical: Sentence[];
    private activeFilters: string[];

    constructor(
        private sentenceHistoricalService: SentenceHistoricalService,
        private sentenceHistoricalFilterService: SentenceHistoricalFilterService
    ) { }

    ngOnInit() {
        this.sentenceHistoricalService.getSentences().subscribe((sentences: Sentence[]) => this.sentenceHistorical = sentences);
        this.sentenceHistoricalFilterService.getActiveFilters().subscribe((activeFilters: string[]) => {
            this.activeFilters = activeFilters;
        });
    }

    categoryIsSelected(categories: string[]): boolean {
        return _.intersection(categories, this.activeFilters).length !== 0;
    }

    categoryFilterIsEmpty(): boolean {
        return this.activeFilters.length === 0;
    }

    clearCache(): void {
        this.sentenceHistoricalService.clearCache();
    }
}