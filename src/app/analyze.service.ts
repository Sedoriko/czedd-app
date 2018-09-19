import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  constructor() { }

  public word = '';
  public outputWord = '';

  public analyzator(inputWord) {
    this.outputWord = inputWord.split("").reverse().join("")
    return this.outputWord
  }
}
