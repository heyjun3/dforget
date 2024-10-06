// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts,import_extension=none"
// @generated from file api/memo/v1/memo.proto (package api.memo.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteMemoRequest, DeleteMemoResponse, GetMemoRequest, GetMemoResponse, GetMemoServerStreamRequest, GetMemoServerStreamResponse, MemoStreamRequest, MemoStreamResponse, RegisterMemoRequest, RegisterMemoResponse } from "./memo_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.memo.v1.MemoService
 */
export const MemoService = {
  typeName: "api.memo.v1.MemoService",
  methods: {
    /**
     * @generated from rpc api.memo.v1.MemoService.GetMemo
     */
    getMemo: {
      name: "GetMemo",
      I: GetMemoRequest,
      O: GetMemoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.memo.v1.MemoService.GetMemoServerStream
     */
    getMemoServerStream: {
      name: "GetMemoServerStream",
      I: GetMemoServerStreamRequest,
      O: GetMemoServerStreamResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.memo.v1.MemoService.RegisterMemo
     */
    registerMemo: {
      name: "RegisterMemo",
      I: RegisterMemoRequest,
      O: RegisterMemoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.memo.v1.MemoService.DeleteMemo
     */
    deleteMemo: {
      name: "DeleteMemo",
      I: DeleteMemoRequest,
      O: DeleteMemoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.memo.v1.MemoService.MemoStream
     */
    memoStream: {
      name: "MemoStream",
      I: MemoStreamRequest,
      O: MemoStreamResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
} as const;

