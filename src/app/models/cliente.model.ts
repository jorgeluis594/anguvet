
export class Cliente {
  constructor(
    // tslint:disable-next-line:variable-name
    public nombre: string,
    public dni: number,
    public celular: number,
    public distrito: string,
    public direccion: string,
    public telefono?: number,
    public email?: string,
    public _id?: string
  ) {

  }

}
