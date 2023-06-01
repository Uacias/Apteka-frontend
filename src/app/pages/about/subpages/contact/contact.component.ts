import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  openingHours = [
    { pharmacyName: 'PharmaXpress', location: 'Warszawa', monday: '8:00 - 18:00', tuesday: '8:00 - 18:00', wednesday: '8:00 - 18:00', thursday: '8:00 - 18:00', friday: '8:00 - 18:00', saturday: '9:00 - 15:00', sunday: 'Zamknięte' },
    { pharmacyName: 'PharmaXpress', location: 'Kraków', monday: '9:00 - 17:00', tuesday: '9:00 - 17:00', wednesday: '9:00 - 17:00', thursday: '9:00 - 17:00', friday: '9:00 - 17:00', saturday: 'Zamknięte', sunday: 'Zamknięte' },
    { pharmacyName: 'PharmaXpress', location: 'Gdańsk', monday: '9:00 - 18:00', tuesday: '9:00 - 18:00', wednesday: '9:00 - 18:00', thursday: '9:00 - 18:00', friday: '9:00 - 18:00', saturday: '10:00 - 14:00', sunday: 'Zamknięte' },
    { pharmacyName: 'PharmaXpress', location: 'Poznań', monday: '8:30 - 17:30', tuesday: '8:30 - 17:30', wednesday: '8:30 - 17:30', thursday: '8:30 - 17:30', friday: '8:30 - 17:30', saturday: 'Zamknięte', sunday: 'Zamknięte' },
    { pharmacyName: 'PharmaXpress', location: 'Wrocław', monday: '9:00 - 19:00', tuesday: '9:00 - 19:00', wednesday: '9:00 - 19:00', thursday: '9:00 - 19:00', friday: '9:00 - 19:00', saturday: '10:00 - 16:00', sunday: 'Zamknięte' },
    // Dodaj więcej lokalizacji i godzin otwarcia dla innych aptek
  ];


}
