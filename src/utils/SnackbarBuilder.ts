import { SnackBar } from "../domain/class/snackbar.class";
import type { SnackBarI } from "../domain/interfaces/snackbar.interface";

export class SnackBarBuilder implements SnackBarI {
  title!: string;
  icon!: string;
  message!: string;
  bgColor!: string;
  duration!: number;

  constructor() {}

  private setTitle(title: string) {
    return (this.title = title);
  }

  private setIcon(icon: string) {
    return (this.icon = icon);
  }

  private setBackgroundColor(bg: string) {
    return (this.bgColor = bg);
  }

  public buildSuccess(): SnackBarI {
    this.setTitle("Success");
    this.setIcon("url icon");
    this.setBackgroundColor("success");
    return this.builder();
  }

  private builder() {
    return new SnackBar(
      this.title,
      this.icon,
      this.message,
      this.duration,
      this.bgColor,
    );
  }
}
