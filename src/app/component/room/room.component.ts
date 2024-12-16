import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RoomService } from '../../service/room.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [ FooterComponent, CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {

  chambres: any[] = [];

  constructor(private chambreService: RoomService) {}

  ngOnInit(): void {
    this.chambreService.getAllChambres().subscribe({
      next: (data) => {
        this.chambres = data;
      },
      error: (err) => {
        console.error('Error fetching rooms:', err);
      }
    });
  }

  Book() {
    alert("Clicked")
    //console.log("this.form.value"); // Check the form values
    //this.router.navigate(['/booking']); // Redirect to the booking page
  }

}
