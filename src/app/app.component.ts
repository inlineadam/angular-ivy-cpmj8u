import { Component, VERSION } from "@angular/core";
import { of, from } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  ngOnInit() {
    of(2, 4, 60)
      .pipe(map(item => item * 2))
      .subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        map(item => item * 2)
        map(item => item - 10)
      )
      .subscribe(
        item => console.log(`resulting item .. ${item}`),
        err => console.log(`error occured .. ${err}`),
        () => console.log(`No more apples go home`)
      );
  }
}
