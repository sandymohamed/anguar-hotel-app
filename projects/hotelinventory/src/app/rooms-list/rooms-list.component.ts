import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../interfaces/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomList[] = [];
  @Input() title: string = "";
  @Output() selectRoom = new EventEmitter<RoomList>();



  constructor() {

  }

  ngOnInit(): void {

  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectedRoom(room: RoomList) {
    this.selectRoom.emit(room);
  }
}
