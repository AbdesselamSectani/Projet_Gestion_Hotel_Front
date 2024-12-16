import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../service/reservation.service';
import { ReservationResponse } from '../../grpc/reservation_pb';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  chambres: any[] = [];
  sharedData: any;
  bookForm!: FormGroup;
  user_info: any;
  reservation: ReservationResponse | null = null;

  constructor(private chambreService: RoomService, private router: Router, private fb: FormBuilder, private reservationService: ReservationService) {

    const user = localStorage.getItem('User');

    if(user){
      this.user_info = JSON.parse(user);
      this.bookForm = this.fb.group({
        firstName: [this.user_info.prenom, Validators.required],
        famillyName: [this.user_info.nom, Validators.required],
        email: [this.user_info.email, Validators.required],
        phone: [this.user_info.telephone, Validators.required],
        checkin: ['', Validators.required],
        checkout: ['', Validators.required],
        room: ['', Validators.required]
      });
    } else {
      this.bookForm = this.fb.group({
        firstName: ['', Validators.required],
        famillyName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        checkin: ['', Validators.required],
        checkout: ['', Validators.required],
        room: ['']
      });
    }

  }

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
    this.reservationService.getReservation(9).subscribe(
      (response) => {
        this.reservation = response;
      },
      (error) => {
        console.error('Error fetching reservation:', error);
      }
    );
    //console.log(this.bookForm.value);
    console.log(this.reservation);
  }
}
