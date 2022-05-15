import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  isAuthenticated: boolean;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
      this.cd.markForCheck();
    });
  }
}
