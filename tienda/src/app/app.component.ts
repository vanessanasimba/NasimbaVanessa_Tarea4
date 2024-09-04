import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProveedorService } from './Services/proveedor.service';
import { Iproveedor } from '../../../plantilla/src/app/Interfaces/iproveedor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista de Proveedores';

  ProveedoresList: Iproveedor[]= [];


  constructor(private ServicioProveedor: ProveedorService) {}
  ngOnInit() {
    this.cargatabla();
  }

  cargatabla() {
    this.ServicioProveedor.todos().subscribe((data) => {
      this.ProveedoresList = data;
    });
  }
  eliminar(idProveedor: number) {
    this.ServicioProveedor.eliminar(idProveedor).subscribe((data) => {
      console.log(data);
      this.cargatabla();
    });
  }
}
