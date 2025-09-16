import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-success',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './success.html',
  styleUrl: './success.css'
})
export class Success implements OnInit {
  bookingId!: string;

 
  passenger: any;
  flight: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.bookingId = this.route.snapshot.params['bookingId'];
  }
  ngOnInit(): void {
  const url = `http://localhost:8080/api/bookings/${this.bookingId}`;
  this.http.get(url).subscribe((res: any) => {
    this.passenger = res.passenger;
    this.flight = res.flight;
  });


}

  downloadPdf() {
    const url = `http://localhost:8080/api/bookings/download?bookingId=${this.bookingId}`;

    this.http.get(url, { responseType: 'blob' }).subscribe({
      next: (blob: Blob) => {
        const file = new Blob([blob], { type: 'application/pdf' });
        const fileURL = window.URL.createObjectURL(file);

        const a = document.createElement('a');
        a.href = fileURL;
        a.download = `Booking_${this.bookingId}.pdf`;
        a.click();

        URL.revokeObjectURL(fileURL);
      },
      error: (err) => {
        console.error('Download error:', err);
      }
    });
  }

 
  goHome() {
    this.router.navigate(['/']);
  }
}
