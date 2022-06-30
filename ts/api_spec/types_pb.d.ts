// package: api_spec
// file: types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class BoolType extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<boolean>;
    setFixedValuesList(value: Array<boolean>): BoolType;
    addFixedValues(value: boolean, index?: number): boolean;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolType.AsObject;
    static toObject(includeInstance: boolean, msg: BoolType): BoolType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolType;
    static deserializeBinaryFromReader(message: BoolType, reader: jspb.BinaryReader): BoolType;
}

export namespace BoolType {
    export type AsObject = {
        fixedValuesList: Array<boolean>,
    }
}

export class BytesType extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<Uint8Array | string>;
    getFixedValuesList_asU8(): Array<Uint8Array>;
    getFixedValuesList_asB64(): Array<string>;
    setFixedValuesList(value: Array<Uint8Array | string>): BytesType;
    addFixedValues(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BytesType.AsObject;
    static toObject(includeInstance: boolean, msg: BytesType): BytesType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BytesType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BytesType;
    static deserializeBinaryFromReader(message: BytesType, reader: jspb.BinaryReader): BytesType;
}

export namespace BytesType {
    export type AsObject = {
        fixedValuesList: Array<Uint8Array | string>,
    }
}

export class StringType extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<string>;
    setFixedValuesList(value: Array<string>): StringType;
    addFixedValues(value: string, index?: number): string;
    getRegex(): string;
    setRegex(value: string): StringType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringType.AsObject;
    static toObject(includeInstance: boolean, msg: StringType): StringType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringType;
    static deserializeBinaryFromReader(message: StringType, reader: jspb.BinaryReader): StringType;
}

export namespace StringType {
    export type AsObject = {
        fixedValuesList: Array<string>,
        regex: string,
    }
}

export class Int32Type extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<number>;
    setFixedValuesList(value: Array<number>): Int32Type;
    addFixedValues(value: number, index?: number): number;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setMin(value?: google_protobuf_wrappers_pb.Int32Value): Int32Type;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setMax(value?: google_protobuf_wrappers_pb.Int32Value): Int32Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int32Type.AsObject;
    static toObject(includeInstance: boolean, msg: Int32Type): Int32Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int32Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int32Type;
    static deserializeBinaryFromReader(message: Int32Type, reader: jspb.BinaryReader): Int32Type;
}

export namespace Int32Type {
    export type AsObject = {
        fixedValuesList: Array<number>,
        min?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        max?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class Int64Type extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<number>;
    setFixedValuesList(value: Array<number>): Int64Type;
    addFixedValues(value: number, index?: number): number;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMin(value?: google_protobuf_wrappers_pb.Int64Value): Int64Type;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMax(value?: google_protobuf_wrappers_pb.Int64Value): Int64Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64Type.AsObject;
    static toObject(includeInstance: boolean, msg: Int64Type): Int64Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64Type;
    static deserializeBinaryFromReader(message: Int64Type, reader: jspb.BinaryReader): Int64Type;
}

export namespace Int64Type {
    export type AsObject = {
        fixedValuesList: Array<number>,
        min?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        max?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class Uint32Type extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<number>;
    setFixedValuesList(value: Array<number>): Uint32Type;
    addFixedValues(value: number, index?: number): number;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMin(value?: google_protobuf_wrappers_pb.UInt32Value): Uint32Type;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMax(value?: google_protobuf_wrappers_pb.UInt32Value): Uint32Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uint32Type.AsObject;
    static toObject(includeInstance: boolean, msg: Uint32Type): Uint32Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uint32Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uint32Type;
    static deserializeBinaryFromReader(message: Uint32Type, reader: jspb.BinaryReader): Uint32Type;
}

export namespace Uint32Type {
    export type AsObject = {
        fixedValuesList: Array<number>,
        min?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        max?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
}

export class Uint64Type extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<number>;
    setFixedValuesList(value: Array<number>): Uint64Type;
    addFixedValues(value: number, index?: number): number;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setMin(value?: google_protobuf_wrappers_pb.UInt64Value): Uint64Type;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setMax(value?: google_protobuf_wrappers_pb.UInt64Value): Uint64Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uint64Type.AsObject;
    static toObject(includeInstance: boolean, msg: Uint64Type): Uint64Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uint64Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uint64Type;
    static deserializeBinaryFromReader(message: Uint64Type, reader: jspb.BinaryReader): Uint64Type;
}

export namespace Uint64Type {
    export type AsObject = {
        fixedValuesList: Array<number>,
        min?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        max?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}

export class DoubleType extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<number>;
    setFixedValuesList(value: Array<number>): DoubleType;
    addFixedValues(value: number, index?: number): number;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMin(value?: google_protobuf_wrappers_pb.DoubleValue): DoubleType;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setMax(value?: google_protobuf_wrappers_pb.DoubleValue): DoubleType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoubleType.AsObject;
    static toObject(includeInstance: boolean, msg: DoubleType): DoubleType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoubleType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoubleType;
    static deserializeBinaryFromReader(message: DoubleType, reader: jspb.BinaryReader): DoubleType;
}

export namespace DoubleType {
    export type AsObject = {
        fixedValuesList: Array<number>,
        min?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        max?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class FloatType extends jspb.Message { 
    clearFixedValuesList(): void;
    getFixedValuesList(): Array<number>;
    setFixedValuesList(value: Array<number>): FloatType;
    addFixedValues(value: number, index?: number): number;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setMin(value?: google_protobuf_wrappers_pb.FloatValue): FloatType;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setMax(value?: google_protobuf_wrappers_pb.FloatValue): FloatType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FloatType.AsObject;
    static toObject(includeInstance: boolean, msg: FloatType): FloatType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FloatType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FloatType;
    static deserializeBinaryFromReader(message: FloatType, reader: jspb.BinaryReader): FloatType;
}

export namespace FloatType {
    export type AsObject = {
        fixedValuesList: Array<number>,
        min?: google_protobuf_wrappers_pb.FloatValue.AsObject,
        max?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
}

export class FormatOption extends jspb.Message { 

    hasStringFormat(): boolean;
    clearStringFormat(): void;
    getStringFormat(): string;
    setStringFormat(value: string): FormatOption;

    getFormatCase(): FormatOption.FormatCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FormatOption.AsObject;
    static toObject(includeInstance: boolean, msg: FormatOption): FormatOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FormatOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FormatOption;
    static deserializeBinaryFromReader(message: FormatOption, reader: jspb.BinaryReader): FormatOption;
}

export namespace FormatOption {
    export type AsObject = {
        stringFormat: string,
    }

    export enum FormatCase {
        FORMAT_NOT_SET = 0,
        STRING_FORMAT = 1,
    }

}

export class AkitaAnnotations extends jspb.Message { 
    getIsFree(): boolean;
    setIsFree(value: boolean): AkitaAnnotations;
    getIsSensitive(): boolean;
    setIsSensitive(value: boolean): AkitaAnnotations;

    hasFormatOption(): boolean;
    clearFormatOption(): void;
    getFormatOption(): FormatOption | undefined;
    setFormatOption(value?: FormatOption): AkitaAnnotations;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AkitaAnnotations.AsObject;
    static toObject(includeInstance: boolean, msg: AkitaAnnotations): AkitaAnnotations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AkitaAnnotations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AkitaAnnotations;
    static deserializeBinaryFromReader(message: AkitaAnnotations, reader: jspb.BinaryReader): AkitaAnnotations;
}

export namespace AkitaAnnotations {
    export type AsObject = {
        isFree: boolean,
        isSensitive: boolean,
        formatOption?: FormatOption.AsObject,
    }
}
