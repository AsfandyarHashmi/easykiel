import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';
import { Guide } from '../models/Guide';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuideService {
  constructor(private http: HttpClient, private auth: AuthService) {
  }

  create(guide: Guide) {
    var user = this.auth.currentUser();
    guide.user_id = user.id;
    return this.http.post("http://localhost:3000/guides/create", guide);
  }

  getBySlug(slug: string) {
    return this.http.get<Guide>("http://localhost:3000/guides/" + slug);
  }

  getByUser(id: string) {
    return this.http.get("http://localhost:3000/guides/user/" + id);
  }
}
