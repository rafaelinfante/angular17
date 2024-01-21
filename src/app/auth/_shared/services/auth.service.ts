import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserStorageService } from '../../../_shared/services/browser-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private browserStorage: BrowserStorageService
  ) {}
  public isAuthenticated(): boolean {
    const token = this.browserStorage.getItem('authToken');
    //const helper = new JwtHelperService();
    //const isExpired = helper.isTokenExpired(token);
    //return !isExpired;
    return false;
  }
}
