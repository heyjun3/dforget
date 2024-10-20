// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/memo/v1/memo.proto (package api.memo.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.memo.v1.Memo
 */
export class Memo extends Message<Memo> {
  /**
   * @generated from field: optional string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string text = 3;
   */
  text = "";

  constructor(data?: PartialMessage<Memo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.Memo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Memo {
    return new Memo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Memo {
    return new Memo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Memo {
    return new Memo().fromJsonString(jsonString, options);
  }

  static equals(a: Memo | PlainMessage<Memo> | undefined, b: Memo | PlainMessage<Memo> | undefined): boolean {
    return proto3.util.equals(Memo, a, b);
  }
}

/**
 * @generated from message api.memo.v1.RegisterMemoRequest
 */
export class RegisterMemoRequest extends Message<RegisterMemoRequest> {
  /**
   * @generated from field: api.memo.v1.Memo memo = 1;
   */
  memo?: Memo;

  constructor(data?: PartialMessage<RegisterMemoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.RegisterMemoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "memo", kind: "message", T: Memo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMemoRequest {
    return new RegisterMemoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMemoRequest {
    return new RegisterMemoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMemoRequest {
    return new RegisterMemoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMemoRequest | PlainMessage<RegisterMemoRequest> | undefined, b: RegisterMemoRequest | PlainMessage<RegisterMemoRequest> | undefined): boolean {
    return proto3.util.equals(RegisterMemoRequest, a, b);
  }
}

/**
 * @generated from message api.memo.v1.RegisterMemoResponse
 */
export class RegisterMemoResponse extends Message<RegisterMemoResponse> {
  /**
   * @generated from field: api.memo.v1.Memo memo = 1;
   */
  memo?: Memo;

  constructor(data?: PartialMessage<RegisterMemoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.RegisterMemoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "memo", kind: "message", T: Memo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMemoResponse {
    return new RegisterMemoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMemoResponse {
    return new RegisterMemoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMemoResponse {
    return new RegisterMemoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMemoResponse | PlainMessage<RegisterMemoResponse> | undefined, b: RegisterMemoResponse | PlainMessage<RegisterMemoResponse> | undefined): boolean {
    return proto3.util.equals(RegisterMemoResponse, a, b);
  }
}

/**
 * @generated from message api.memo.v1.GetMemoRequest
 */
export class GetMemoRequest extends Message<GetMemoRequest> {
  /**
   * @generated from field: google.protobuf.Empty empty = 1;
   */
  empty?: Empty;

  constructor(data?: PartialMessage<GetMemoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.GetMemoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "empty", kind: "message", T: Empty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMemoRequest {
    return new GetMemoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMemoRequest {
    return new GetMemoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMemoRequest {
    return new GetMemoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMemoRequest | PlainMessage<GetMemoRequest> | undefined, b: GetMemoRequest | PlainMessage<GetMemoRequest> | undefined): boolean {
    return proto3.util.equals(GetMemoRequest, a, b);
  }
}

/**
 * @generated from message api.memo.v1.GetMemoResponse
 */
export class GetMemoResponse extends Message<GetMemoResponse> {
  /**
   * @generated from field: repeated api.memo.v1.Memo memo = 1;
   */
  memo: Memo[] = [];

  constructor(data?: PartialMessage<GetMemoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.GetMemoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "memo", kind: "message", T: Memo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMemoResponse {
    return new GetMemoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMemoResponse {
    return new GetMemoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMemoResponse {
    return new GetMemoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMemoResponse | PlainMessage<GetMemoResponse> | undefined, b: GetMemoResponse | PlainMessage<GetMemoResponse> | undefined): boolean {
    return proto3.util.equals(GetMemoResponse, a, b);
  }
}

/**
 * @generated from message api.memo.v1.GetMemoServerStreamRequest
 */
export class GetMemoServerStreamRequest extends Message<GetMemoServerStreamRequest> {
  /**
   * @generated from field: google.protobuf.Empty empty = 1;
   */
  empty?: Empty;

  constructor(data?: PartialMessage<GetMemoServerStreamRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.GetMemoServerStreamRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "empty", kind: "message", T: Empty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMemoServerStreamRequest {
    return new GetMemoServerStreamRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMemoServerStreamRequest {
    return new GetMemoServerStreamRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMemoServerStreamRequest {
    return new GetMemoServerStreamRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMemoServerStreamRequest | PlainMessage<GetMemoServerStreamRequest> | undefined, b: GetMemoServerStreamRequest | PlainMessage<GetMemoServerStreamRequest> | undefined): boolean {
    return proto3.util.equals(GetMemoServerStreamRequest, a, b);
  }
}

/**
 * @generated from message api.memo.v1.GetMemoServerStreamResponse
 */
export class GetMemoServerStreamResponse extends Message<GetMemoServerStreamResponse> {
  /**
   * @generated from field: repeated api.memo.v1.Memo memo = 1;
   */
  memo: Memo[] = [];

  constructor(data?: PartialMessage<GetMemoServerStreamResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.GetMemoServerStreamResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "memo", kind: "message", T: Memo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMemoServerStreamResponse {
    return new GetMemoServerStreamResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMemoServerStreamResponse {
    return new GetMemoServerStreamResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMemoServerStreamResponse {
    return new GetMemoServerStreamResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMemoServerStreamResponse | PlainMessage<GetMemoServerStreamResponse> | undefined, b: GetMemoServerStreamResponse | PlainMessage<GetMemoServerStreamResponse> | undefined): boolean {
    return proto3.util.equals(GetMemoServerStreamResponse, a, b);
  }
}

/**
 * @generated from message api.memo.v1.DeleteMemoRequest
 */
export class DeleteMemoRequest extends Message<DeleteMemoRequest> {
  /**
   * @generated from field: repeated string id = 1;
   */
  id: string[] = [];

  constructor(data?: PartialMessage<DeleteMemoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.DeleteMemoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteMemoRequest {
    return new DeleteMemoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteMemoRequest {
    return new DeleteMemoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteMemoRequest {
    return new DeleteMemoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteMemoRequest | PlainMessage<DeleteMemoRequest> | undefined, b: DeleteMemoRequest | PlainMessage<DeleteMemoRequest> | undefined): boolean {
    return proto3.util.equals(DeleteMemoRequest, a, b);
  }
}

/**
 * @generated from message api.memo.v1.DeleteMemoResponse
 */
export class DeleteMemoResponse extends Message<DeleteMemoResponse> {
  /**
   * @generated from field: repeated string id = 1;
   */
  id: string[] = [];

  constructor(data?: PartialMessage<DeleteMemoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.DeleteMemoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteMemoResponse {
    return new DeleteMemoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteMemoResponse {
    return new DeleteMemoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteMemoResponse {
    return new DeleteMemoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteMemoResponse | PlainMessage<DeleteMemoResponse> | undefined, b: DeleteMemoResponse | PlainMessage<DeleteMemoResponse> | undefined): boolean {
    return proto3.util.equals(DeleteMemoResponse, a, b);
  }
}

/**
 * @generated from message api.memo.v1.MemoStreamRequest
 */
export class MemoStreamRequest extends Message<MemoStreamRequest> {
  /**
   * @generated from field: api.memo.v1.Memo memo = 1;
   */
  memo?: Memo;

  constructor(data?: PartialMessage<MemoStreamRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.MemoStreamRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "memo", kind: "message", T: Memo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemoStreamRequest {
    return new MemoStreamRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemoStreamRequest {
    return new MemoStreamRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemoStreamRequest {
    return new MemoStreamRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MemoStreamRequest | PlainMessage<MemoStreamRequest> | undefined, b: MemoStreamRequest | PlainMessage<MemoStreamRequest> | undefined): boolean {
    return proto3.util.equals(MemoStreamRequest, a, b);
  }
}

/**
 * @generated from message api.memo.v1.MemoStreamResponse
 */
export class MemoStreamResponse extends Message<MemoStreamResponse> {
  /**
   * @generated from field: api.memo.v1.Memo memo = 1;
   */
  memo?: Memo;

  constructor(data?: PartialMessage<MemoStreamResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.memo.v1.MemoStreamResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "memo", kind: "message", T: Memo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemoStreamResponse {
    return new MemoStreamResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemoStreamResponse {
    return new MemoStreamResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemoStreamResponse {
    return new MemoStreamResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MemoStreamResponse | PlainMessage<MemoStreamResponse> | undefined, b: MemoStreamResponse | PlainMessage<MemoStreamResponse> | undefined): boolean {
    return proto3.util.equals(MemoStreamResponse, a, b);
  }
}

