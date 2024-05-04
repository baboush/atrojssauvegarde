import type { SnackBarI } from "../interfaces/snackbar.interface";

export class SnackBar {
  constructor(
    readonly title: string,
    readonly icon: string,
    readonly message: string,
    readonly duration: number,
    readonly bgColor: string,
  ) {}
}
