import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';
import { Guide } from 'src/app/models/Guide';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  guides;

  constructor(private guideService: GuideService, private auth: AuthService) { 
    this.guideService.getByUser(auth.currentUser().id).subscribe(res => {
      this.guides = res;
      console.log(this.guides);
    });
  }

  ngOnInit() {

  }

}
