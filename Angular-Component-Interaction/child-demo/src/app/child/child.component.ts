import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnChanges {
  // private _loggedIn: boolean;
  message: string;
  name = "Niraj";

  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }

  // @Input()
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value;
  //   if (value === true) {
  //     this.message = 'Welcome back Niraj!';
  //   } else {
  //     this.message = 'Please log in';
  //   }
  // }

  @Input() loggedIn: boolean;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const loggedInValue = changes["loggedIn"];
    if (loggedInValue.currentValue === true) {
      this.message = "Welcome back Niraj!!";
    } else {
      this.message = "Please log in";
    }
  }

  greetNiraj() {
    alert("Hey Niraj!");
  }
}
