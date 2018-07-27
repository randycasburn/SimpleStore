import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  
  save(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string{
    return localStorage.getItem(key);
  }

  getInner(storeKey: string, searchKey: string){
    return JSON.parse(this.get(storeKey))
      .map(obj=>(obj[searchKey])? {[searchKey]: obj[searchKey]} :'');
  }

  clear(): void {
    localStorage.clear();  
  }

}
