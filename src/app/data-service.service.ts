import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url = "http://localhost:3003/api/assest/"
  constructor() { }
}
