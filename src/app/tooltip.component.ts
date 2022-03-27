import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() label : string = "";
  @Input() message : string = "";
  @Input() overideShowMessage : boolean = false;

  showMessage : boolean = false;

  constructor() { }

  ngOnInit(): void { 

   }

}
