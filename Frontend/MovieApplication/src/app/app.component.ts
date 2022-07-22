import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customThemes';

  searchText:string='';

  onSearchTextEntered(searchValue:string)
  {
  this.searchText=searchValue;
  console.log(this.searchText)
  }
  
  @Output()
  getText:EventEmitter<string>=new EventEmitter<string>();

  onSearchText(){
    this.getText.emit(this.searchText);
    console.log(this.searchText);
  }


}