import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  chambres: any[] = [];

  constructor(private chambreService: RoomService) {}

  ngOnInit(): void {
    this.chambreService.getAllChambres().subscribe({
      next: (data) => {
        this.chambres = data;
      },
      error: (err) => {
        console.error('Error fetching chambres:', err);
      }
    });
  }

}
