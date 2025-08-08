import { VentaComponent } from './Venta/venta.component';
import { Component } from '@angular/core';

interface Cliente {
  nombre: string;
  cedula: string;
}

interface FormaPago {
  id: number;
  descripcion: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VentaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  formasPago: FormaPago[] = [
    { id: 1, descripcion: 'Efectivo' },
    { id: 2, descripcion: 'Tarjeta de crédito' },
    { id: 3, descripcion: 'Transferencia bancaria' }
  ];

  cliente: Cliente = {
    nombre: '',
    cedula: ''
  };

  formaPagoSeleccionada: number | null = null;

  mensajeConfirmacion: string = '';

  confirmarVenta() {
    if (this.cliente.nombre && this.cliente.cedula && this.formaPagoSeleccionada !== null) {
      const pago = this.formasPago.find(fp => fp.id === this.formaPagoSeleccionada)?.descripcion;
      this.mensajeConfirmacion = `Venta registrada para ${this.cliente.nombre} (${this.cliente.cedula}) con pago en ${pago}.`;
    } else {
      this.mensajeConfirmacion = 'Por favor, complete todos los campos.';
    }
  }
}
