import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileJson: User | null | undefined;

  constructor(public auth: AuthService) { }

  getProfile(): void {
    this.auth.user$.subscribe((profile) => {
      this.profileJson = profile
    });
  }

  ngOnInit(): void {
    this.getProfile();
  }
}