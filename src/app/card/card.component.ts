import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() surveyName:String='';
  @Input() surveyType:String='';
  selected='option1'; 
  @Input() username : String='sample';
  constructor() { }

  ngOnInit(): void {
  }

}
