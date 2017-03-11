import { Component, OnInit } from '@angular/core';
import { SentenceFilterService } from './sentence-filter.service';

@Component({
    moduleId: module.id,
    selector: 'sentence-filter',
    templateUrl: 'sentence-filter.component.html',
    styleUrls: ['./sentence-filter.component.css']
})
export class SentenceFilterComponent implements OnInit {

    private filters: string[];

    constructor(private sentenceFilterService: SentenceFilterService) { }

    ngOnInit() {
        this.sentenceFilterService.get().subscribe(filters => this.filters = filters.value);
    }

    toogle(filter) {
        if (!this.isActive(filter)) {
            this.sentenceFilterService.add(filter);
        } else {
            this.sentenceFilterService.remove(filter);
        }
    }

    isActive(filter): boolean {
        return this.sentenceFilterService.getActiveFilters().indexOf(filter) !== -1;
    }

    clear() {
        this.sentenceFilterService.clear();
    }
}