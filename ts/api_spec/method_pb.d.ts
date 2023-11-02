// package: api_spec
// file: method.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as api_type_pb from "./api_type_pb";
import * as types_pb from "./types_pb";

export class Bool extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.BoolType | undefined;
    setType(value?: types_pb.BoolType): Bool;
    getValue(): boolean;
    setValue(value: boolean): Bool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bool.AsObject;
    static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bool;
    static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
}

export namespace Bool {
    export type AsObject = {
        type?: types_pb.BoolType.AsObject,
        value: boolean,
    }
}

export class Bytes extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.BytesType | undefined;
    setType(value?: types_pb.BytesType): Bytes;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Bytes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bytes.AsObject;
    static toObject(includeInstance: boolean, msg: Bytes): Bytes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bytes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bytes;
    static deserializeBinaryFromReader(message: Bytes, reader: jspb.BinaryReader): Bytes;
}

export namespace Bytes {
    export type AsObject = {
        type?: types_pb.BytesType.AsObject,
        value: Uint8Array | string,
    }
}

export class String extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.StringType | undefined;
    setType(value?: types_pb.StringType): String;
    getValue(): string;
    setValue(value: string): String;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): String.AsObject;
    static toObject(includeInstance: boolean, msg: String): String.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): String;
    static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
}

export namespace String {
    export type AsObject = {
        type?: types_pb.StringType.AsObject,
        value: string,
    }
}

export class Int32 extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.Int32Type | undefined;
    setType(value?: types_pb.Int32Type): Int32;
    getValue(): number;
    setValue(value: number): Int32;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int32.AsObject;
    static toObject(includeInstance: boolean, msg: Int32): Int32.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int32, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int32;
    static deserializeBinaryFromReader(message: Int32, reader: jspb.BinaryReader): Int32;
}

export namespace Int32 {
    export type AsObject = {
        type?: types_pb.Int32Type.AsObject,
        value: number,
    }
}

export class Int64 extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.Int64Type | undefined;
    setType(value?: types_pb.Int64Type): Int64;
    getValue(): number;
    setValue(value: number): Int64;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64.AsObject;
    static toObject(includeInstance: boolean, msg: Int64): Int64.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64;
    static deserializeBinaryFromReader(message: Int64, reader: jspb.BinaryReader): Int64;
}

export namespace Int64 {
    export type AsObject = {
        type?: types_pb.Int64Type.AsObject,
        value: number,
    }
}

export class Uint32 extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.Uint32Type | undefined;
    setType(value?: types_pb.Uint32Type): Uint32;
    getValue(): number;
    setValue(value: number): Uint32;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uint32.AsObject;
    static toObject(includeInstance: boolean, msg: Uint32): Uint32.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uint32, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uint32;
    static deserializeBinaryFromReader(message: Uint32, reader: jspb.BinaryReader): Uint32;
}

export namespace Uint32 {
    export type AsObject = {
        type?: types_pb.Uint32Type.AsObject,
        value: number,
    }
}

export class Uint64 extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.Uint64Type | undefined;
    setType(value?: types_pb.Uint64Type): Uint64;
    getValue(): number;
    setValue(value: number): Uint64;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uint64.AsObject;
    static toObject(includeInstance: boolean, msg: Uint64): Uint64.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uint64, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uint64;
    static deserializeBinaryFromReader(message: Uint64, reader: jspb.BinaryReader): Uint64;
}

export namespace Uint64 {
    export type AsObject = {
        type?: types_pb.Uint64Type.AsObject,
        value: number,
    }
}

export class Double extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.DoubleType | undefined;
    setType(value?: types_pb.DoubleType): Double;
    getValue(): number;
    setValue(value: number): Double;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Double.AsObject;
    static toObject(includeInstance: boolean, msg: Double): Double.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Double, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Double;
    static deserializeBinaryFromReader(message: Double, reader: jspb.BinaryReader): Double;
}

export namespace Double {
    export type AsObject = {
        type?: types_pb.DoubleType.AsObject,
        value: number,
    }
}

export class Float extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): types_pb.FloatType | undefined;
    setType(value?: types_pb.FloatType): Float;
    getValue(): number;
    setValue(value: number): Float;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Float.AsObject;
    static toObject(includeInstance: boolean, msg: Float): Float.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Float, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Float;
    static deserializeBinaryFromReader(message: Float, reader: jspb.BinaryReader): Float;
}

export namespace Float {
    export type AsObject = {
        type?: types_pb.FloatType.AsObject,
        value: number,
    }
}

export class Primitive extends jspb.Message { 
    getTypeHint(): string;
    setTypeHint(value: string): Primitive;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): Bool | undefined;
    setBoolValue(value?: Bool): Primitive;

    hasBytesValue(): boolean;
    clearBytesValue(): void;
    getBytesValue(): Bytes | undefined;
    setBytesValue(value?: Bytes): Primitive;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): Primitive;

    hasInt32Value(): boolean;
    clearInt32Value(): void;
    getInt32Value(): Int32 | undefined;
    setInt32Value(value?: Int32): Primitive;

    hasInt64Value(): boolean;
    clearInt64Value(): void;
    getInt64Value(): Int64 | undefined;
    setInt64Value(value?: Int64): Primitive;

    hasUint32Value(): boolean;
    clearUint32Value(): void;
    getUint32Value(): Uint32 | undefined;
    setUint32Value(value?: Uint32): Primitive;

    hasUint64Value(): boolean;
    clearUint64Value(): void;
    getUint64Value(): Uint64 | undefined;
    setUint64Value(value?: Uint64): Primitive;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): Double | undefined;
    setDoubleValue(value?: Double): Primitive;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): Float | undefined;
    setFloatValue(value?: Float): Primitive;

    hasAkitaAnnotations(): boolean;
    clearAkitaAnnotations(): void;
    getAkitaAnnotations(): types_pb.AkitaAnnotations | undefined;
    setAkitaAnnotations(value?: types_pb.AkitaAnnotations): Primitive;
    getContainsRandomValue(): boolean;
    setContainsRandomValue(value: boolean): Primitive;

    getFormatsMap(): jspb.Map<string, boolean>;
    clearFormatsMap(): void;
    getFormatKind(): string;
    setFormatKind(value: string): Primitive;

    getValueCase(): Primitive.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Primitive.AsObject;
    static toObject(includeInstance: boolean, msg: Primitive): Primitive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Primitive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Primitive;
    static deserializeBinaryFromReader(message: Primitive, reader: jspb.BinaryReader): Primitive;
}

export namespace Primitive {
    export type AsObject = {
        typeHint: string,
        boolValue?: Bool.AsObject,
        bytesValue?: Bytes.AsObject,
        stringValue?: String.AsObject,
        int32Value?: Int32.AsObject,
        int64Value?: Int64.AsObject,
        uint32Value?: Uint32.AsObject,
        uint64Value?: Uint64.AsObject,
        doubleValue?: Double.AsObject,
        floatValue?: Float.AsObject,
        akitaAnnotations?: types_pb.AkitaAnnotations.AsObject,
        containsRandomValue: boolean,

        formatsMap: Array<[string, boolean]>,
        formatKind: string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        BOOL_VALUE = 2,
        BYTES_VALUE = 3,
        STRING_VALUE = 4,
        INT32_VALUE = 5,
        INT64_VALUE = 6,
        UINT32_VALUE = 7,
        UINT64_VALUE = 8,
        DOUBLE_VALUE = 9,
        FLOAT_VALUE = 10,
    }

}

export class List extends jspb.Message { 
    clearElemsList(): void;
    getElemsList(): Array<Data>;
    setElemsList(value: Array<Data>): List;
    addElems(value?: Data, index?: number): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
    export type AsObject = {
        elemsList: Array<Data.AsObject>,
    }
}

export class Struct extends jspb.Message { 

    getFieldsMap(): jspb.Map<string, Data>;
    clearFieldsMap(): void;

    hasMapType(): boolean;
    clearMapType(): void;
    getMapType(): MapData | undefined;
    setMapType(value?: MapData): Struct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Struct.AsObject;
    static toObject(includeInstance: boolean, msg: Struct): Struct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Struct;
    static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
}

export namespace Struct {
    export type AsObject = {

        fieldsMap: Array<[string, Data.AsObject]>,
        mapType?: MapData.AsObject,
    }
}

export class MapData extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Data | undefined;
    setKey(value?: Data): MapData;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Data | undefined;
    setValue(value?: Data): MapData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapData.AsObject;
    static toObject(includeInstance: boolean, msg: MapData): MapData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapData;
    static deserializeBinaryFromReader(message: MapData, reader: jspb.BinaryReader): MapData;
}

export namespace MapData {
    export type AsObject = {
        key?: Data.AsObject,
        value?: Data.AsObject,
    }
}

export class None extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): None.AsObject;
    static toObject(includeInstance: boolean, msg: None): None.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: None, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): None;
    static deserializeBinaryFromReader(message: None, reader: jspb.BinaryReader): None;
}

export namespace None {
    export type AsObject = {
    }
}

export class Optional extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Optional;

    hasNone(): boolean;
    clearNone(): void;
    getNone(): None | undefined;
    setNone(value?: None): Optional;

    getValueCase(): Optional.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Optional.AsObject;
    static toObject(includeInstance: boolean, msg: Optional): Optional.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Optional, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Optional;
    static deserializeBinaryFromReader(message: Optional, reader: jspb.BinaryReader): Optional;
}

export namespace Optional {
    export type AsObject = {
        data?: Data.AsObject,
        none?: None.AsObject,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        DATA = 1,
        NONE = 2,
    }

}

export class OneOf extends jspb.Message { 

    getOptionsMap(): jspb.Map<string, Data>;
    clearOptionsMap(): void;
    getPotentialConflict(): boolean;
    setPotentialConflict(value: boolean): OneOf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneOf.AsObject;
    static toObject(includeInstance: boolean, msg: OneOf): OneOf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneOf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneOf;
    static deserializeBinaryFromReader(message: OneOf, reader: jspb.BinaryReader): OneOf;
}

export namespace OneOf {
    export type AsObject = {

        optionsMap: Array<[string, Data.AsObject]>,
        potentialConflict: boolean,
    }
}

export class GRPCMeta extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GRPCMeta.AsObject;
    static toObject(includeInstance: boolean, msg: GRPCMeta): GRPCMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GRPCMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GRPCMeta;
    static deserializeBinaryFromReader(message: GRPCMeta, reader: jspb.BinaryReader): GRPCMeta;
}

export namespace GRPCMeta {
    export type AsObject = {
    }
}

export class HTTPPath extends jspb.Message { 
    getKey(): string;
    setKey(value: string): HTTPPath;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPPath.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPPath): HTTPPath.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPPath, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPPath;
    static deserializeBinaryFromReader(message: HTTPPath, reader: jspb.BinaryReader): HTTPPath;
}

export namespace HTTPPath {
    export type AsObject = {
        key: string,
    }
}

export class HTTPQuery extends jspb.Message { 
    getKey(): string;
    setKey(value: string): HTTPQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPQuery.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPQuery): HTTPQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPQuery;
    static deserializeBinaryFromReader(message: HTTPQuery, reader: jspb.BinaryReader): HTTPQuery;
}

export namespace HTTPQuery {
    export type AsObject = {
        key: string,
    }
}

export class HTTPHeader extends jspb.Message { 
    getKey(): string;
    setKey(value: string): HTTPHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPHeader.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPHeader): HTTPHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPHeader;
    static deserializeBinaryFromReader(message: HTTPHeader, reader: jspb.BinaryReader): HTTPHeader;
}

export namespace HTTPHeader {
    export type AsObject = {
        key: string,
    }
}

export class HTTPAuth extends jspb.Message { 
    getType(): HTTPAuth.HTTPAuthType;
    setType(value: HTTPAuth.HTTPAuthType): HTTPAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPAuth.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPAuth): HTTPAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPAuth;
    static deserializeBinaryFromReader(message: HTTPAuth, reader: jspb.BinaryReader): HTTPAuth;
}

export namespace HTTPAuth {
    export type AsObject = {
        type: HTTPAuth.HTTPAuthType,
    }

    export enum HTTPAuthType {
    UNKNOWN = 0,
    BASIC = 1,
    BEARER = 2,
    }

}

export class HTTPCookie extends jspb.Message { 
    getKey(): string;
    setKey(value: string): HTTPCookie;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPCookie.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPCookie): HTTPCookie.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPCookie, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPCookie;
    static deserializeBinaryFromReader(message: HTTPCookie, reader: jspb.BinaryReader): HTTPCookie;
}

export namespace HTTPCookie {
    export type AsObject = {
        key: string,
    }
}

export class HTTPBody extends jspb.Message { 
    getContentType(): HTTPBody.ContentType;
    setContentType(value: HTTPBody.ContentType): HTTPBody;
    getOtherType(): string;
    setOtherType(value: string): HTTPBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPBody.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPBody): HTTPBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPBody;
    static deserializeBinaryFromReader(message: HTTPBody, reader: jspb.BinaryReader): HTTPBody;
}

export namespace HTTPBody {
    export type AsObject = {
        contentType: HTTPBody.ContentType,
        otherType: string,
    }

    export enum ContentType {
    UNKNOWN = 0,
    JSON = 1,
    FORM_URL_ENCODED = 2,
    OCTET_STREAM = 3,
    PDF = 4,
    TEXT_PLAIN = 5,
    YAML = 6,
    TEXT_HTML = 7,
    OTHER = 8,
    }

}

export class HTTPMultipart extends jspb.Message { 
    getType(): string;
    setType(value: string): HTTPMultipart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPMultipart.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPMultipart): HTTPMultipart.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPMultipart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPMultipart;
    static deserializeBinaryFromReader(message: HTTPMultipart, reader: jspb.BinaryReader): HTTPMultipart;
}

export namespace HTTPMultipart {
    export type AsObject = {
        type: string,
    }
}

export class HTTPEmpty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPEmpty.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPEmpty): HTTPEmpty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPEmpty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPEmpty;
    static deserializeBinaryFromReader(message: HTTPEmpty, reader: jspb.BinaryReader): HTTPEmpty;
}

export namespace HTTPEmpty {
    export type AsObject = {
    }
}

export class HTTPMeta extends jspb.Message { 

    hasPath(): boolean;
    clearPath(): void;
    getPath(): HTTPPath | undefined;
    setPath(value?: HTTPPath): HTTPMeta;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): HTTPQuery | undefined;
    setQuery(value?: HTTPQuery): HTTPMeta;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): HTTPHeader | undefined;
    setHeader(value?: HTTPHeader): HTTPMeta;

    hasCookie(): boolean;
    clearCookie(): void;
    getCookie(): HTTPCookie | undefined;
    setCookie(value?: HTTPCookie): HTTPMeta;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): HTTPBody | undefined;
    setBody(value?: HTTPBody): HTTPMeta;

    hasEmpty(): boolean;
    clearEmpty(): void;
    getEmpty(): HTTPEmpty | undefined;
    setEmpty(value?: HTTPEmpty): HTTPMeta;

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): HTTPAuth | undefined;
    setAuth(value?: HTTPAuth): HTTPMeta;

    hasMultipart(): boolean;
    clearMultipart(): void;
    getMultipart(): HTTPMultipart | undefined;
    setMultipart(value?: HTTPMultipart): HTTPMeta;
    getResponseCode(): number;
    setResponseCode(value: number): HTTPMeta;

    getLocationCase(): HTTPMeta.LocationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPMeta.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPMeta): HTTPMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPMeta;
    static deserializeBinaryFromReader(message: HTTPMeta, reader: jspb.BinaryReader): HTTPMeta;
}

export namespace HTTPMeta {
    export type AsObject = {
        path?: HTTPPath.AsObject,
        query?: HTTPQuery.AsObject,
        header?: HTTPHeader.AsObject,
        cookie?: HTTPCookie.AsObject,
        body?: HTTPBody.AsObject,
        empty?: HTTPEmpty.AsObject,
        auth?: HTTPAuth.AsObject,
        multipart?: HTTPMultipart.AsObject,
        responseCode: number,
    }

    export enum LocationCase {
        LOCATION_NOT_SET = 0,
        PATH = 1,
        QUERY = 2,
        HEADER = 3,
        COOKIE = 4,
        BODY = 5,
        EMPTY = 6,
        AUTH = 8,
        MULTIPART = 9,
    }

}

export class DataMeta extends jspb.Message { 

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): GRPCMeta | undefined;
    setGrpc(value?: GRPCMeta): DataMeta;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HTTPMeta | undefined;
    setHttp(value?: HTTPMeta): DataMeta;

    getMetaCase(): DataMeta.MetaCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataMeta.AsObject;
    static toObject(includeInstance: boolean, msg: DataMeta): DataMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataMeta;
    static deserializeBinaryFromReader(message: DataMeta, reader: jspb.BinaryReader): DataMeta;
}

export namespace DataMeta {
    export type AsObject = {
        grpc?: GRPCMeta.AsObject,
        http?: HTTPMeta.AsObject,
    }

    export enum MetaCase {
        META_NOT_SET = 0,
        GRPC = 1,
        HTTP = 2,
    }

}

export class ExampleValue extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleValue.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleValue): ExampleValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleValue;
    static deserializeBinaryFromReader(message: ExampleValue, reader: jspb.BinaryReader): ExampleValue;
}

export namespace ExampleValue {
    export type AsObject = {
    }
}

export class Data extends jspb.Message { 

    hasPrimitive(): boolean;
    clearPrimitive(): void;
    getPrimitive(): Primitive | undefined;
    setPrimitive(value?: Primitive): Data;

    hasStruct(): boolean;
    clearStruct(): void;
    getStruct(): Struct | undefined;
    setStruct(value?: Struct): Data;

    hasList(): boolean;
    clearList(): void;
    getList(): List | undefined;
    setList(value?: List): Data;

    hasOptional(): boolean;
    clearOptional(): void;
    getOptional(): Optional | undefined;
    setOptional(value?: Optional): Data;

    hasOneof(): boolean;
    clearOneof(): void;
    getOneof(): OneOf | undefined;
    setOneof(value?: OneOf): Data;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): DataMeta | undefined;
    setMeta(value?: DataMeta): Data;
    getNullable(): boolean;
    setNullable(value: boolean): Data;

    getExampleValuesMap(): jspb.Map<string, ExampleValue>;
    clearExampleValuesMap(): void;

    getValueCase(): Data.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        primitive?: Primitive.AsObject,
        struct?: Struct.AsObject,
        list?: List.AsObject,
        optional?: Optional.AsObject,
        oneof?: OneOf.AsObject,
        meta?: DataMeta.AsObject,
        nullable: boolean,

        exampleValuesMap: Array<[string, ExampleValue.AsObject]>,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        PRIMITIVE = 1,
        STRUCT = 2,
        LIST = 3,
        OPTIONAL = 4,
        ONEOF = 6,
    }

}

export class MethodID extends jspb.Message { 
    getName(): string;
    setName(value: string): MethodID;
    getApiType(): api_type_pb.ApiType;
    setApiType(value: api_type_pb.ApiType): MethodID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodID.AsObject;
    static toObject(includeInstance: boolean, msg: MethodID): MethodID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MethodID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodID;
    static deserializeBinaryFromReader(message: MethodID, reader: jspb.BinaryReader): MethodID;
}

export namespace MethodID {
    export type AsObject = {
        name: string,
        apiType: api_type_pb.ApiType,
    }
}

export class GRPCMethodMeta extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GRPCMethodMeta.AsObject;
    static toObject(includeInstance: boolean, msg: GRPCMethodMeta): GRPCMethodMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GRPCMethodMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GRPCMethodMeta;
    static deserializeBinaryFromReader(message: GRPCMethodMeta, reader: jspb.BinaryReader): GRPCMethodMeta;
}

export namespace GRPCMethodMeta {
    export type AsObject = {
    }
}

export class HTTPMethodMeta extends jspb.Message { 
    getMethod(): string;
    setMethod(value: string): HTTPMethodMeta;
    getPathTemplate(): string;
    setPathTemplate(value: string): HTTPMethodMeta;
    getHost(): string;
    setHost(value: string): HTTPMethodMeta;
    getProcessingLatency(): number;
    setProcessingLatency(value: number): HTTPMethodMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPMethodMeta.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPMethodMeta): HTTPMethodMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPMethodMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPMethodMeta;
    static deserializeBinaryFromReader(message: HTTPMethodMeta, reader: jspb.BinaryReader): HTTPMethodMeta;
}

export namespace HTTPMethodMeta {
    export type AsObject = {
        method: string,
        pathTemplate: string,
        host: string,
        processingLatency: number,
    }
}

export class HTTPMethodError extends jspb.Message { 
    getType(): HTTPMethodError.errorType;
    setType(value: HTTPMethodError.errorType): HTTPMethodError;
    getMessage(): string;
    setMessage(value: string): HTTPMethodError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPMethodError.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPMethodError): HTTPMethodError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPMethodError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPMethodError;
    static deserializeBinaryFromReader(message: HTTPMethodError, reader: jspb.BinaryReader): HTTPMethodError;
}

export namespace HTTPMethodError {
    export type AsObject = {
        type: HTTPMethodError.errorType,
        message: string,
    }

    export enum errorType {
    AGENT_TIMEOUT = 0,
    AGENT_PARSING_ERROR = 1,
    CLIENT_TIMEOUT = 2,
    SERVER_TIMEOUT = 3,
    CONNECTION_RESET = 4,
    OTHER = 5,
    }

}

export class MethodMeta extends jspb.Message { 

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): GRPCMethodMeta | undefined;
    setGrpc(value?: GRPCMethodMeta): MethodMeta;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HTTPMethodMeta | undefined;
    setHttp(value?: HTTPMethodMeta): MethodMeta;
    clearErrorsList(): void;
    getErrorsList(): Array<HTTPMethodError>;
    setErrorsList(value: Array<HTTPMethodError>): MethodMeta;
    addErrors(value?: HTTPMethodError, index?: number): HTTPMethodError;

    getMetaCase(): MethodMeta.MetaCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodMeta.AsObject;
    static toObject(includeInstance: boolean, msg: MethodMeta): MethodMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MethodMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodMeta;
    static deserializeBinaryFromReader(message: MethodMeta, reader: jspb.BinaryReader): MethodMeta;
}

export namespace MethodMeta {
    export type AsObject = {
        grpc?: GRPCMethodMeta.AsObject,
        http?: HTTPMethodMeta.AsObject,
        errorsList: Array<HTTPMethodError.AsObject>,
    }

    export enum MetaCase {
        META_NOT_SET = 0,
        GRPC = 1,
        HTTP = 2,
    }

}

export class Method extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): MethodID | undefined;
    setId(value?: MethodID): Method;

    getArgsMap(): jspb.Map<string, Data>;
    clearArgsMap(): void;

    getResponsesMap(): jspb.Map<string, Data>;
    clearResponsesMap(): void;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): MethodMeta | undefined;
    setMeta(value?: MethodMeta): Method;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Method.AsObject;
    static toObject(includeInstance: boolean, msg: Method): Method.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Method;
    static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
}

export namespace Method {
    export type AsObject = {
        id?: MethodID.AsObject,

        argsMap: Array<[string, Data.AsObject]>,

        responsesMap: Array<[string, Data.AsObject]>,
        meta?: MethodMeta.AsObject,
    }
}
