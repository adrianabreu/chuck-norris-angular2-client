import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SentenceComponent } from './sentence.component';
import { SentenceFilterService, SentenceFilterComponent } from './sentence-filter';
import { SentenceGetterComponent, SentenceGetterService } from './sentence-getter';
import {
    SentenceHistoricalComponent,
    SentenceHistoricalService,
    SentenceHistoricalFilterComponent,
    SentenceHistoricalFilterService
} from './sentence-historical';

import { sentenceRoutes } from './sentence.routing';

@NgModule({
    imports: [HttpModule, CommonModule, RouterModule.forChild(sentenceRoutes)],
    exports: [],
    declarations: [
        SentenceComponent,
        SentenceFilterComponent,
        SentenceGetterComponent,
        SentenceHistoricalComponent,
        SentenceHistoricalFilterComponent
    ],
    providers: [
        SentenceFilterService,
        SentenceGetterService,
        SentenceHistoricalService,
        SentenceHistoricalFilterService
    ],
})
export class SentenceModule { }
