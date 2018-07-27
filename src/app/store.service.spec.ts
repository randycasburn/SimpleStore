import {
  TestBed,
  inject
} from '@angular/core/testing';
import {
  StoreService
} from './store.service';

describe('StoreService', () => {
  const incepts = [{
    fundOne: 'one',
    fundTwo: 'two',
    fundhree: 'three'
  }];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService]
    });
    this.store = TestBed.get(StoreService);
    this.store.save('inceptions', JSON.stringify(incepts));
  });

  it('after saving an inception named "fundOne" it should be retrieve an inception named "fundOne"', () => {
    let actual = this.store.getInner('inceptions', 'fundOne')[0];
    const expected = {fundOne: "one"};
    expect(JSON.stringify(expected)).toEqual(JSON.stringify(actual));
  });
});
