import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../../data.service';
import { DishIdDataModel } from '../../../../../features/dishes/models/dish.model';
import { DishesApiService } from '../../../../../features/dishes/services/dishes-api.service';

@Component({
  templateUrl: './delete-dish-from-basket-dialog.dialog.html',
  styleUrls: ['./delete-dish-from-basket-dialog.dialog.sass'],
  providers: [DataService]
})
export class DeleteDishFromBasketDialogDialog implements OnInit {
  loading = false;

  constructor(
    private readonly http: HttpClient,
    private readonly dataService: DataService,
    private readonly dishesApiService: DishesApiService,
    @Inject(MAT_DIALOG_DATA)
    public data: DishIdDataModel,
    private readonly dialogRef: MatDialogRef<DeleteDishFromBasketDialogDialog, boolean>
  ) {}

  ngOnInit(): void {}

  handleDeleteDishFromBasketClick(): void {
    this.loading = true;
    this.dishesApiService.deleteDishFromBasket(this.data.dishId, this.dataService.getUserId()).subscribe(
      () => {
        this.loading = false;
        this.dialogRef.close(true);
      },
      (error) => {
        this.loading = false;
        console.error(error);
      }
    );
  }
}
