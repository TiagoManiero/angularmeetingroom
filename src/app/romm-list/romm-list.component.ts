import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-romm-list',
  templateUrl: './romm-list.component.html',
  styleUrls: ['./romm-list.component.css']
})
export class RommListComponent implements OnInit {
  rooms: Observable<Room[]>;


  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.rooms=this.roomService.getRoomsList();
  }

  deleteRoom(id: number){
    this.roomService.deleteRoom(id).subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error)
    );
  }

  roomDetails(id: number){
    this.router.navigate(['details',id]);
  }

  updateRoom(id: number){
    this.router.navigate(['update',id]);
  }

}
