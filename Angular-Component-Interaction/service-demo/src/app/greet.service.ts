import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GreetService {
  private teacherGreetedSource = new Subject<string>();

  teacherGreeted$ = this.teacherGreetedSource.asObservable();

  greet(message: string) {
    this.teacherGreetedSource.next(message);
  }

  constructor() {}
}
