export interface IFetchResponse<T> {
  data: null | T;
  isPending: boolean;
  error: null | string | Error;
  postData?: (postData: unknown) => void;
}

export interface IRecipe {
  id: number | string;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
}
