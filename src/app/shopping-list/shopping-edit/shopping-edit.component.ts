import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef
  @ViewChild('amountInput') amountInputRef:ElementRef
  @Output() addedItem = new EventEmitter<Ingridient>();
  
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    const newIngridient = new Ingridient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    )
    this.addedItem.emit(newIngridient);
  }

}
