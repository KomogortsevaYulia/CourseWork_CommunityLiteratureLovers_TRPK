import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { User, UserService } from '../core';

@Component({
  selector: "app-admin-page",
  templateUrl: "./admin.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}
  currentUser: User;
  isAuthenticated: boolean;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;

      this.cd.markForCheck();
    });
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.cd.markForCheck();
      }
    );
  }
}