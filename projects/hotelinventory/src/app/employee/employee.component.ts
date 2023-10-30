import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { RoomList } from '../interfaces/room';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  room : RoomList = {
    roomType: '',
    roomNumber: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
    
  }

  message: string='';

  constructor(
    private roomService: RoomsService
  ) {

  }

  ngOnInit(): void {
      
  }

  AddRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe(data => {
      console.log('Added successfully');
      this.message = "Room added Successfully";
      // this.roomService.getRooms().subscribe();
      // roomsForm.reset();
      
      roomsForm.resetForm({
        roomType: 't',
        roomNumber: '',
        amenities: '',
        price: 0,
        photos: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0,
      })
    })
  }
}
