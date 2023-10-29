import { Injectable } from '@angular/core';
import {  RoomList } from '../interfaces/room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomlist: RoomList[] = [];

  constructor(
    private http : HttpClient,

  ) { }

  getRooms() {
    return this.http.get<RoomList[]>('http://localhost:4000/api/rooms');
  }
  addRoom(data:RoomList) {
    return this.http.post<RoomList[]>('http://localhost:4000/api/rooms', data);
  }

}