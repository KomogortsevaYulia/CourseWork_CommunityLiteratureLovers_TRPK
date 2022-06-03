import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../core";

@Component({
  selector: "app-help-page",
  templateUrl: "./help.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.userService.isAuthenticated.subscribe((authenticated) => {
      
    //   this.cd.markForCheck();
    // });
  }
}
