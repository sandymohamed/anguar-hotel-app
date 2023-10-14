import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from '../interfaces/room';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: String = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = true;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
      price: 500,
      rating: 4.5,
      photos: "",
      checkinTime: new Date("11-Nov-2023"),
      checkoutTime: new Date("12-Nov-2023"),
    },
    {
      roomNumber:2,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
      price: 700,
      rating: 2.2,
      photos: "",
      checkinTime: new Date("21-Nov-2023"),
      checkoutTime: new Date("25-Nov-2023"),
    },
    {
      roomNumber:3,
      roomType: "Private Suits",
      amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
      price: 900,
      rating: 3.5,
      photos: "",
      checkinTime: new Date("18-Nov-2023"),
      checkoutTime: new Date("20-Nov-2023"),
    },
    {
      roomNumber:4,
      roomType: "Private Suits",
      amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
      price: 1500,
      rating: 4.7,
      photos: "",
      checkinTime: new Date("11-Dec-2023"),
      checkoutTime: new Date("12-Dec-2023"),
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
