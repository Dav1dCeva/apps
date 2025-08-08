import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {

  cliente: Usuario = {
    cedula: 0,
    nombre: '',
    telefono: ''
  };

  formaPagoSeleccionado: string = '';
  formasPago: string[] = ["Efectivo", "Tarjeta", "Transferencia"];
  usuarios: any[] = [];

  ngOnInit() {
    fetch('/Objeto.json')
      .then(res => res.json())
      .then(data => {
        this.usuarios = data.usuarios || [];
      });
  }

  guardarVenta() {
    if (!this.formaPagoSeleccionado) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }
    alert(`Venta registrada:\nCliente: ${this.cliente.nombre}\nCédula: ${this.cliente.cedula}\nTeléfono: ${this.cliente.telefono}\nForma de pago: ${this.formaPagoSeleccionado}`);
  }
}
