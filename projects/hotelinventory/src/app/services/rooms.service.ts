import { Injectable } from '@angular/core';
import {  RoomList } from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomlist: RoomList[] = [{
    roomNumber: 1,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
    price: 500,
    rating: 4.5,
    photos: "",
    checkinTime: new Date("11-Nov-2023"),
    checkoutTime: new Date("12-Nov-2023"),
  },
  {
    roomNumber: 2,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
    price: 700,
    rating: 2.2,
    photos: "",
    checkinTime: new Date("21-Nov-2023"),
    checkoutTime: new Date("25-Nov-2023"),
  },
  {
    roomNumber: 3,
    roomType: "Private Suits",
    amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
    price: 900,
    rating: 3.5,
    photos: "",
    checkinTime: new Date("18-Nov-2023"),
    checkoutTime: new Date("20-Nov-2023"),
  },
  {
    roomNumber: 4,
    roomType: "Private Suits",
    amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
    price: 1500,
    rating: 4.7,
    photos: "",
    checkinTime: new Date("11-Dec-2023"),
    checkoutTime: new Date("12-Dec-2023"),
  },
  ];

  constructor() { }

  getRooms() {
    return this.roomlist;
  }

}