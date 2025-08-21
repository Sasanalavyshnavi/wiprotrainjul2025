import { Component, signal } from '@angular/core';
import { UpperCasePipe , DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CentitofahrenPipe } from './centitofahren-pipe';
import { Highlightandstrikethrudir } from './highlightandstrikethrudir';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe,DatePipe, FormsModule,ReactiveFormsModule,CommonModule,CentitofahrenPipe,Highlightandstrikethrudir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipe');
 textEnter: string = '';



  date: string | null = null;

  centigrade: number = 20;
  
}
