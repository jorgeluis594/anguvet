
export class Paciente {
  constructor(
    public nombremasco: string,
    public nacimiento: Date,
    public raza: string,
    public historia: number,
    public peso: number,
    public sexo: string,
    public agresividad?: string,
    public alergias?: [],
    // datos de la mascota
    public nombrecli?: string,
    public celular?: number,
    public date?: Date,
    public _id?: number
  ) {

  }
}

