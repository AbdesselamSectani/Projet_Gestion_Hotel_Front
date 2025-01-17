/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.0
// source: reservation.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as reservation_pb from './reservation_pb'; // proto import: "reservation.proto"


export class ReservationServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateReservation = new grpcWeb.MethodDescriptor(
    '/ReservationService/CreateReservation',
    grpcWeb.MethodType.UNARY,
    reservation_pb.CreateReservationRequest,
    reservation_pb.MessageResponse,
    (request: reservation_pb.CreateReservationRequest) => {
      return request.serializeBinary();
    },
    reservation_pb.MessageResponse.deserializeBinary
  );

  createReservation(
    request: reservation_pb.CreateReservationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<reservation_pb.MessageResponse>;

  createReservation(
    request: reservation_pb.CreateReservationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reservation_pb.MessageResponse) => void): grpcWeb.ClientReadableStream<reservation_pb.MessageResponse>;

  createReservation(
    request: reservation_pb.CreateReservationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reservation_pb.MessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ReservationService/CreateReservation',
        request,
        metadata || {},
        this.methodDescriptorCreateReservation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ReservationService/CreateReservation',
    request,
    metadata || {},
    this.methodDescriptorCreateReservation);
  }

  methodDescriptorUpdateReservation = new grpcWeb.MethodDescriptor(
    '/ReservationService/UpdateReservation',
    grpcWeb.MethodType.UNARY,
    reservation_pb.UpdateReservationRequest,
    reservation_pb.MessageResponse,
    (request: reservation_pb.UpdateReservationRequest) => {
      return request.serializeBinary();
    },
    reservation_pb.MessageResponse.deserializeBinary
  );

  updateReservation(
    request: reservation_pb.UpdateReservationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<reservation_pb.MessageResponse>;

  updateReservation(
    request: reservation_pb.UpdateReservationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reservation_pb.MessageResponse) => void): grpcWeb.ClientReadableStream<reservation_pb.MessageResponse>;

  updateReservation(
    request: reservation_pb.UpdateReservationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reservation_pb.MessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ReservationService/UpdateReservation',
        request,
        metadata || {},
        this.methodDescriptorUpdateReservation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ReservationService/UpdateReservation',
    request,
    metadata || {},
    this.methodDescriptorUpdateReservation);
  }

  methodDescriptorDeleteReservation = new grpcWeb.MethodDescriptor(
    '/ReservationService/DeleteReservation',
    grpcWeb.MethodType.UNARY,
    reservation_pb.DeleteReservationRequest,
    reservation_pb.MessageResponse,
    (request: reservation_pb.DeleteReservationRequest) => {
      return request.serializeBinary();
    },
    reservation_pb.MessageResponse.deserializeBinary
  );

  deleteReservation(
    request: reservation_pb.DeleteReservationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<reservation_pb.MessageResponse>;

  deleteReservation(
    request: reservation_pb.DeleteReservationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reservation_pb.MessageResponse) => void): grpcWeb.ClientReadableStream<reservation_pb.MessageResponse>;

  deleteReservation(
    request: reservation_pb.DeleteReservationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reservation_pb.MessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ReservationService/DeleteReservation',
        request,
        metadata || {},
        this.methodDescriptorDeleteReservation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ReservationService/DeleteReservation',
    request,
    metadata || {},
    this.methodDescriptorDeleteReservation);
  }

  methodDescriptorGetReservationById = new grpcWeb.MethodDescriptor(
    '/ReservationService/GetReservationById',
    grpcWeb.MethodType.UNARY,
    reservation_pb.ReservationByIdRequest,
    reservation_pb.ReservationResponse,
    (request: reservation_pb.ReservationByIdRequest) => {
      return request.serializeBinary();
    },
    reservation_pb.ReservationResponse.deserializeBinary
  );

  getReservationById(
    request: reservation_pb.ReservationByIdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<reservation_pb.ReservationResponse>;

  getReservationById(
    request: reservation_pb.ReservationByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reservation_pb.ReservationResponse) => void): grpcWeb.ClientReadableStream<reservation_pb.ReservationResponse>;

  getReservationById(
    request: reservation_pb.ReservationByIdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reservation_pb.ReservationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ReservationService/GetReservationById',
        request,
        metadata || {},
        this.methodDescriptorGetReservationById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ReservationService/GetReservationById',
    request,
    metadata || {},
    this.methodDescriptorGetReservationById);
  }

}

