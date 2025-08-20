import { Component } from '@angular/core';
import { Conditioncomp } from '../conditioncomp/conditioncomp';
import { Switchdemo } from '../switchdemo/switchdemo';
import { FilteredNames } from '../filtered-names/filtered-names';


@Component({
  selector: 'app-listcomp',
  imports: [Conditioncomp, Switchdemo, FilteredNames ],
  templateUrl: './listcomp.html',
  styleUrl: './listcomp.css',
})
export class Listcomp {
  namesList: string[] = ['vyshnavi', 'Amit', 'Ryan', 'Jack', 'Jhon'];
}
