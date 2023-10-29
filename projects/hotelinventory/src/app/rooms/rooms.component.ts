import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Room, RoomList } from '../interfaces/room';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';

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

  constructor(
    private roomsService: RoomsService
  ) { }




  ngOnInit(): void {


    this.roomsService.getRooms().subscribe((rooms) => {
      console.log(rooms);
      
      this.roomList = rooms;
    });
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
      roomNumber: '5',
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
