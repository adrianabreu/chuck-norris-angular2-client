import { Component, OnInit } from '@angular/core';
import { SentenceFilterService } from '../sentence-filter';
import { SentenceGetterService } from './sentence-getter.service';
import { SentenceHistoricalService } from '../sentence-historical';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';

@Component({
    moduleId: module.id,
    selector: 'sentence-getter',
    templateUrl: 'sentence-getter.component.html',
    styleUrls: ['./sentence-getter.component.css']
})
export class SentenceGetterComponent implements OnInit {

    private sentence: string;
    private sentenceRequested: boolean;

    constructor(
        private sentenceHistoricalService: SentenceHistoricalService,
        private sentenceFilterService: SentenceFilterService,
        private sentenceGetterService: SentenceGetterService
    ) { }

    ngOnInit() { }

    get() {
        let filters: string[] = this.sentenceFilterService.getActiveFilters();

        this.sentenceGetterService.getSentence(filters)
            .take(1)
            .subscribe(sentence => {
                this.sentence = sentence.joke;
                this.sentenceHistoricalService.add(sentence);
                this.sentenceRequested = true;
            });
    }
}