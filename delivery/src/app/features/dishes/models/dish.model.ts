export interface DishModel {
  dishCalories: number;
  dishCookingTimeMinutes: number;
  dishType: string;
  id: number;
  dishImage: string;
  restaurantId: number;
  mainDishInfo: {
    dishName: string;
    dishPrice: number;
  };
}
export interface DishModelForSend {
  dishCalories: number;
  dishCookingTimeMinutes: number;
  dishType: string;
  dishImage: string;
  mainDishInfo: {
    dishName: string;
    dishPrice: number;
  };
}

export interface DishModelForUpdateSend {
  dishCalories?: number;
  dishCookingTimeMinutes?: number;
  dishType?: string;
  dishImage?: string;
  dishName?: string;
  dishPrice?: number;
}

export interface DialogUpdateDIshModel {
  id: string;
}
export enum TypesOfDishes {
  DRINK = 'DRINK',
  MAIN = 'MAIN',
  SALAD = 'SALAD',
  BURGER = 'BURGER',
  DESSERT = 'DESSERT',
  PIZZA = 'PIZZA',
  SUSHI = 'SUSHI',
  BAKERY = 'BAKERY'
}

export interface DeleteOrAddDishToOrderDialogDataModel {
  dishId: number;
  userId: string | null;
}

export interface DishFromOrderModel {
  count: number;
  dishId: number;
}

export interface DishIdDataModel {
  dishId: number;
}

export interface DishFromBasketModel {
  count: number;
  dishId: number;
  userId: string | null;
}

export interface DishesFromOrderToDisplayModel extends DishModel {
  count: number;
}

export interface UpdateDishCountInputModel {
  dishId: number;
  userId: string | null;
  count: number;
}

export interface DishTypesModel {
  dishType: string;
  dishImage: string;
}
