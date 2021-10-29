import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe('', '', '');
  @Input() ind: number = 0;
  @Output() selectedRecipe = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipe() {
    this.selectedRecipe.emit()
  }

}
