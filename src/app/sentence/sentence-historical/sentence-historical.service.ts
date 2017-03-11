import { Injectable } from '@angular/core';
import { Sentence } from '../sentence';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class SentenceHistoricalService {

    private sentences: Sentence[];
    private categories: any[];
    private sentencesSource: Subject<Sentence[]>;
    private categoriesSource: Subject<String[]>;

    constructor() {
        this.defaultStorage();
        this.sentences = this.getObj('sentences');
        this.categories = this.getObj('categories');
        this.sentencesSource = new BehaviorSubject(this.sentences);
        this.categoriesSource = new BehaviorSubject(this.categories);
    }

    add(sentence: Sentence) {
        this.sentences.push(sentence);
        sentence.categories.map(category => this.addCategory(category));
        this.setObj('sentences', this.sentences);
        this.sentencesSource.next(this.sentences);

    }

    addCategory(category: string) {
        this.setObj('categories', _.union(this.categories, [category]));
        this.categories = _.union(this.categories, [category]);
        this.categoriesSource.next(this.categories);
    }

    getSentences(): Observable<Sentence[]> {
        return this.sentencesSource.asObservable();
    }

    getCategories(): Observable<string[]> {
        return this.categoriesSource.asObservable();
    }

    clearCache() {
        this.setObj('sentences', new Array());
        this.setObj('categories', new Array());
        this.sentences = this.getObj('sentences');
        this.categories = this.getObj('categories');
        this.sentencesSource.next(this.sentences);
        this.categoriesSource.next(this.categories);
    }

    private defaultStorage() {
        if (this.getObj('sentences') == null) {
            this.setObj('sentences', new Array());
        }

        if (this.getObj('categories') == null) {
            this.setObj('categories', new Array());
        }
    }

    private setObj(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    private getObj(key: string): any {
        let value = localStorage.getItem(key);
        return value && JSON.parse(value);
    }
}