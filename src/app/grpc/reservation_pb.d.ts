import * as jspb from 'google-protobuf'



export class CreateReservationRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): CreateReservationRequest;

  getChambreid(): number;
  setChambreid(value: number): CreateReservationRequest;

  getDateDebut(): string;
  setDateDebut(value: string): CreateReservationRequest;

  getDateFin(): string;
  setDateFin(value: string): CreateReservationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReservationRequest): CreateReservationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReservationRequest;
  static deserializeBinaryFromReader(message: CreateReservationRequest, reader: jspb.BinaryReader): CreateReservationRequest;
}

export namespace CreateReservationRequest {
  export type AsObject = {
    userid: number,
    chambreid: number,
    dateDebut: string,
    dateFin: string,
  }
}

export class UpdateReservationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateReservationRequest;

  getUserid(): number;
  setUserid(value: number): UpdateReservationRequest;

  getChambreid(): number;
  setChambreid(value: number): UpdateReservationRequest;

  getDateDebut(): string;
  setDateDebut(value: string): UpdateReservationRequest;

  getDateFin(): string;
  setDateFin(value: string): UpdateReservationRequest;

  getMontantTotal(): number;
  setMontantTotal(value: number): UpdateReservationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReservationRequest): UpdateReservationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReservationRequest;
  static deserializeBinaryFromReader(message: UpdateReservationRequest, reader: jspb.BinaryReader): UpdateReservationRequest;
}

export namespace UpdateReservationRequest {
  export type AsObject = {
    id: number,
    userid: number,
    chambreid: number,
    dateDebut: string,
    dateFin: string,
    montantTotal: number,
  }
}

export class DeleteReservationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteReservationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReservationRequest): DeleteReservationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReservationRequest;
  static deserializeBinaryFromReader(message: DeleteReservationRequest, reader: jspb.BinaryReader): DeleteReservationRequest;
}

export namespace DeleteReservationRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReservationResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ReservationResponse;

  getUserid(): number;
  setUserid(value: number): ReservationResponse;

  getChambreid(): number;
  setChambreid(value: number): ReservationResponse;

  getDateDebut(): string;
  setDateDebut(value: string): ReservationResponse;

  getDateFin(): string;
  setDateFin(value: string): ReservationResponse;

  getMontantTotal(): number;
  setMontantTotal(value: number): ReservationResponse;

  getUser(): User | undefined;
  setUser(value?: User): ReservationResponse;
  hasUser(): boolean;
  clearUser(): ReservationResponse;

  getChambre(): Chambre | undefined;
  setChambre(value?: Chambre): ReservationResponse;
  hasChambre(): boolean;
  clearChambre(): ReservationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReservationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReservationResponse): ReservationResponse.AsObject;
  static serializeBinaryToWriter(message: ReservationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReservationResponse;
  static deserializeBinaryFromReader(message: ReservationResponse, reader: jspb.BinaryReader): ReservationResponse;
}

export namespace ReservationResponse {
  export type AsObject = {
    id: number,
    userid: number,
    chambreid: number,
    dateDebut: string,
    dateFin: string,
    montantTotal: number,
    user?: User.AsObject,
    chambre?: Chambre.AsObject,
  }
}

export class ReservationByIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReservationByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReservationByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReservationByIdRequest): ReservationByIdRequest.AsObject;
  static serializeBinaryToWriter(message: ReservationByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReservationByIdRequest;
  static deserializeBinaryFromReader(message: ReservationByIdRequest, reader: jspb.BinaryReader): ReservationByIdRequest;
}

export namespace ReservationByIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReservationByUserIdRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): ReservationByUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReservationByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReservationByUserIdRequest): ReservationByUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ReservationByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReservationByUserIdRequest;
  static deserializeBinaryFromReader(message: ReservationByUserIdRequest, reader: jspb.BinaryReader): ReservationByUserIdRequest;
}

export namespace ReservationByUserIdRequest {
  export type AsObject = {
    userid: number,
  }
}

export class MessageResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): MessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    message: string,
  }
}

export class User extends jspb.Message {
  getNom(): string;
  setNom(value: string): User;

  getPrenom(): string;
  setPrenom(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getTelephone(): string;
  setTelephone(value: string): User;

  getAdresse(): string;
  setAdresse(value: string): User;

  getCni(): string;
  setCni(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    adresse: string,
    cni: string,
  }
}

export class Chambre extends jspb.Message {
  getNumero(): string;
  setNumero(value: string): Chambre;

  getNombreLits(): number;
  setNombreLits(value: number): Chambre;

  getPrix(): number;
  setPrix(value: number): Chambre;

  getImage(): string;
  setImage(value: string): Chambre;

  getDescription(): string;
  setDescription(value: string): Chambre;

  getDisponible(): boolean;
  setDisponible(value: boolean): Chambre;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chambre.AsObject;
  static toObject(includeInstance: boolean, msg: Chambre): Chambre.AsObject;
  static serializeBinaryToWriter(message: Chambre, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chambre;
  static deserializeBinaryFromReader(message: Chambre, reader: jspb.BinaryReader): Chambre;
}

export namespace Chambre {
  export type AsObject = {
    numero: string,
    nombreLits: number,
    prix: number,
    image: string,
    description: string,
    disponible: boolean,
  }
}

