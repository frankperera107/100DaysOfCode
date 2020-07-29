import { Component,Input } from '@angular/core';

@Component({
  selector : 'search-box',
  templateUrl : 'search-box.component.html',
  styleUrls: ['search-box.component.css', 'test.css',],
})

export class SearchBoxComponent{

  @Input('searchBoxPlaceholder')
  text = 'Type your search';

  clear(input){
    console.log('Clear ');
    input.value = '';
  }

  onSearch(searchText){
    alert(searchText);
  }

}