import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    //RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  chambres: any[] = [];
  latestChambres: any[] = [];
  form: FormGroup;

  constructor(private chambreService: RoomService, 
              private fb: FormBuilder, 
              private router: Router)
    {
    this.form = this.fb.group({
      checkin: ['', Validators.required],
      checkout: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.chambreService.getAllChambres().subscribe({
      next: (data) => {
        this.chambres = data;
        // Assuming each chambre has a property `id` or `createdDate` to determine the order
        this.latestChambres = this.chambres
          .sort((a, b) => b.id - a.id) // Sort by `id` in descending order
          .slice(0, 3); // Get the first three items
  
      },
      error: (err) => {
        console.error('Error fetching rooms:', err);
      }
    });
  }

  Book() {

  }

}
