import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private mockUser: IUser = {
    id: 1,
    email: "nuser@mail.com",
    name: "Noname User",
  };
  private MOCK_TOKEN = "token";
  private STORAGE_AUTH_KEY = "auth_token";
  private CORRECT_PASS = "password";
  private readonly currentUser: IUser | null = null;

  constructor() {
    if (this.isAuthenticated()) {
      this.currentUser = this.mockUser;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.STORAGE_AUTH_KEY) || null;
  }

  getUser(): IUser | null {
    return this.currentUser;
  }

  login(email: string, password: string): Observable<ILoginResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (email === this.mockUser.email && password === this.CORRECT_PASS) {
          localStorage.setItem(this.STORAGE_AUTH_KEY, this.MOCK_TOKEN);
          observer.next({ user: this.mockUser, token: this.MOCK_TOKEN });
        } else {
          observer.error({ code: 403, message: "Invalid credentials" });
        }

        observer.complete();
      }, 1500);
    });
  }

  logout(): Observable<void> {
    return new Observable((observer) => {
      setTimeout(() => {
        localStorage.removeItem(this.STORAGE_AUTH_KEY);
        observer.next();
        observer.complete();
      }, 500);
    });
  }
}
