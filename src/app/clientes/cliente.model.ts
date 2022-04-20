export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  correo: string;
  grupo: number;
}

export interface Grupo {
  id: number;
  nombre: string;
}
