import { Component, OnInit } from "@angular/core";
import { GreetService } from "../greet.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  constructor(private _greetService: GreetService) {}
  public message = "";
  ngOnInit() {
    this._greetService.teacherGreeted$.subscribe((message) => {
      if (message === "Good Morning") {
        this.message = message;
        // alert("Good Morning Teacher!");
      } else if (message === "Well Done") {
        this.message = message;
        // alert("Thank you Teacher!");
      }
    });
  }
}
