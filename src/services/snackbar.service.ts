import type { SnackBarI } from "../domain/interfaces/snackbar.interface";
import { SnackBarBuilder } from "../utils/SnackbarBuilder";

export class SnackBarService {
  successSnackBar!: SnackBarI;

  public displaySuccessSnackBar() {
    this.successSnackBar = new SnackBarBuilder().buildSuccess();
    return this.successSnackBar;
  }
}
