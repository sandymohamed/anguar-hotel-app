import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Room, RoomList } from '../interfaces/room';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

// ------------------------------------------

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // standalone: true,
  // imports: [NgbRatingModule, NgIf],

})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterContentInit {


  hotelName: String = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = true;
  title = "Rooms List"

  selectedRooms!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = []
  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  constructor() { }




  ngOnInit(): void {


    this.roomList = [
      {
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
    ]
  }

  ngDoCheck(): void {

    // console.log('ngDoCheck');

  }

  ngAfterViewInit() {
    console.log(this.headerComponent);
    // this.headerComponent.title = "Rooms View";

  }

  ngAfterContentInit() {
    console.log(this.headerComponent);
    if (this.headerComponent) {
      this.headerComponent.title = "Rooms View";
      console.log("HeaderComponent exists and title has been set.");
    } else {
      console.log("HeaderComponent is still undefined.");
    }
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List!!!"
  }

  selectedRoom(room: RoomList) {
    this.selectedRooms = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, free wi-fi, TV, Bathroom, Kitchen",
      price: 900,
      rating: 4,
      photos: "",
      checkinTime: new Date("11-Oct-2023"),
      checkoutTime: new Date("12-Oct-2023"),
    }
    // this.roomList.push(room);

    this.roomList = [... this.roomList, room]
  }





}
