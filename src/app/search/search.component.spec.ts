import { SearchComponent } from './search.component';
const x = new SearchComponent();

describe('check', () =>{
  it('value', () =>{
    expect(x.searchMovie('Batman').toBe(this.router.navigate(['path', 'Batman'])))
  });
});
