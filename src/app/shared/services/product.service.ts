import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**
 * Servicio para gestionar las solicitud HTTP para consumo de productos.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  /**
   * Realiza una solicitud GET para obtener todos los productos.
   * @returns Un observable que emite la información obtenida por la petición.
  */
  public getProducts(): Promise<any> {
    return firstValueFrom(this.http.get(`https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards`));
  }
}
