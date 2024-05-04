import type { SnackBarI } from "../domain/interfaces/snackbar.interface";
import "../styles/snackbar.scss";

export function SnackBarComponent({ ...props }: SnackBarI) {
  return (
    <>
      <div className={`snackbar ${props.bgColor}`}>{props.title}</div>
    </>
  );
}
