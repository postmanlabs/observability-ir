// package: api_spec
// file: sequence.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as method_pb from "./method_pb";
import * as types_pb from "./types_pb";

export class NamedDataRef extends jspb.Message { 
    getKey(): string;
    setKey(value: string): NamedDataRef;

    hasDataRef(): boolean;
    clearDataRef(): void;
    getDataRef(): DataRef | undefined;
    setDataRef(value?: DataRef): NamedDataRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NamedDataRef.AsObject;
    static toObject(includeInstance: boolean, msg: NamedDataRef): NamedDataRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NamedDataRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NamedDataRef;
    static deserializeBinaryFromReader(message: NamedDataRef, reader: jspb.BinaryReader): NamedDataRef;
}

export namespace NamedDataRef {
    export type AsObject = {
        key: string,
        dataRef?: DataRef.AsObject,
    }
}

export class IndexedDataRef extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): IndexedDataRef;

    hasDataRef(): boolean;
    clearDataRef(): void;
    getDataRef(): DataRef | undefined;
    setDataRef(value?: DataRef): IndexedDataRef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexedDataRef.AsObject;
    static toObject(includeInstance: boolean, msg: IndexedDataRef): IndexedDataRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexedDataRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexedDataRef;
    static deserializeBinaryFromReader(message: IndexedDataRef, reader: jspb.BinaryReader): IndexedDataRef;
}

export namespace IndexedDataRef {
    export type AsObject = {
        index: number,
        dataRef?: DataRef.AsObject,
    }
}

export class PrimitiveRef extends jspb.Message { 

    hasBoolType(): boolean;
    clearBoolType(): void;
    getBoolType(): types_pb.BoolType | undefined;
    setBoolType(value?: types_pb.BoolType): PrimitiveRef;

    hasBytesType(): boolean;
    clearBytesType(): void;
    getBytesType(): types_pb.BytesType | undefined;
    setBytesType(value?: types_pb.BytesType): PrimitiveRef;

    hasStringType(): boolean;
    clearStringType(): void;
    getStringType(): types_pb.StringType | undefined;
    setStringType(value?: types_pb.StringType): PrimitiveRef;

    hasInt32Type(): boolean;
    clearInt32Type(): void;
    getInt32Type(): types_pb.Int32Type | undefined;
    setInt32Type(value?: types_pb.Int32Type): PrimitiveRef;

    hasInt64Type(): boolean;
    clearInt64Type(): void;
    getInt64Type(): types_pb.Int64Type | undefined;
    setInt64Type(value?: types_pb.Int64Type): PrimitiveRef;

    hasUint32Type(): boolean;
    clearUint32Type(): void;
    getUint32Type(): types_pb.Uint32Type | undefined;
    setUint32Type(value?: types_pb.Uint32Type): PrimitiveRef;

    hasUint64Type(): boolean;
    clearUint64Type(): void;
    getUint64Type(): types_pb.Uint64Type | undefined;
    setUint64Type(value?: types_pb.Uint64Type): PrimitiveRef;

    hasDoubleType(): boolean;
    clearDoubleType(): void;
    getDoubleType(): types_pb.DoubleType | undefined;
    setDoubleType(value?: types_pb.DoubleType): PrimitiveRef;

    hasFloatType(): boolean;
    clearFloatType(): void;
    getFloatType(): types_pb.FloatType | undefined;
    setFloatType(value?: types_pb.FloatType): PrimitiveRef;

    getTypeCase(): PrimitiveRef.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimitiveRef.AsObject;
    static toObject(includeInstance: boolean, msg: PrimitiveRef): PrimitiveRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimitiveRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimitiveRef;
    static deserializeBinaryFromReader(message: PrimitiveRef, reader: jspb.BinaryReader): PrimitiveRef;
}

export namespace PrimitiveRef {
    export type AsObject = {
        boolType?: types_pb.BoolType.AsObject,
        bytesType?: types_pb.BytesType.AsObject,
        stringType?: types_pb.StringType.AsObject,
        int32Type?: types_pb.Int32Type.AsObject,
        int64Type?: types_pb.Int64Type.AsObject,
        uint32Type?: types_pb.Uint32Type.AsObject,
        uint64Type?: types_pb.Uint64Type.AsObject,
        doubleType?: types_pb.DoubleType.AsObject,
        floatType?: types_pb.FloatType.AsObject,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
        BOOL_TYPE = 1,
        BYTES_TYPE = 2,
        STRING_TYPE = 3,
        INT32_TYPE = 4,
        INT64_TYPE = 5,
        UINT32_TYPE = 6,
        UINT64_TYPE = 7,
        DOUBLE_TYPE = 8,
        FLOAT_TYPE = 9,
    }

}

export class StructRef extends jspb.Message { 

    hasFullStruct(): boolean;
    clearFullStruct(): void;
    getFullStruct(): StructRef.FullStructRef | undefined;
    setFullStruct(value?: StructRef.FullStructRef): StructRef;

    hasFieldRef(): boolean;
    clearFieldRef(): void;
    getFieldRef(): NamedDataRef | undefined;
    setFieldRef(value?: NamedDataRef): StructRef;

    getRefCase(): StructRef.RefCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructRef.AsObject;
    static toObject(includeInstance: boolean, msg: StructRef): StructRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructRef;
    static deserializeBinaryFromReader(message: StructRef, reader: jspb.BinaryReader): StructRef;
}

export namespace StructRef {
    export type AsObject = {
        fullStruct?: StructRef.FullStructRef.AsObject,
        fieldRef?: NamedDataRef.AsObject,
    }


    export class FullStructRef extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FullStructRef.AsObject;
        static toObject(includeInstance: boolean, msg: FullStructRef): FullStructRef.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FullStructRef, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FullStructRef;
        static deserializeBinaryFromReader(message: FullStructRef, reader: jspb.BinaryReader): FullStructRef;
    }

    export namespace FullStructRef {
        export type AsObject = {
        }
    }


    export enum RefCase {
        REF_NOT_SET = 0,
        FULL_STRUCT = 1,
        FIELD_REF = 2,
    }

}

export class ListRef extends jspb.Message { 

    hasFullList(): boolean;
    clearFullList(): void;
    getFullList(): ListRef.FullListRef | undefined;
    setFullList(value?: ListRef.FullListRef): ListRef;

    hasElemRef(): boolean;
    clearElemRef(): void;
    getElemRef(): IndexedDataRef | undefined;
    setElemRef(value?: IndexedDataRef): ListRef;

    getRefCase(): ListRef.RefCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRef.AsObject;
    static toObject(includeInstance: boolean, msg: ListRef): ListRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRef;
    static deserializeBinaryFromReader(message: ListRef, reader: jspb.BinaryReader): ListRef;
}

export namespace ListRef {
    export type AsObject = {
        fullList?: ListRef.FullListRef.AsObject,
        elemRef?: IndexedDataRef.AsObject,
    }


    export class FullListRef extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FullListRef.AsObject;
        static toObject(includeInstance: boolean, msg: FullListRef): FullListRef.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FullListRef, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FullListRef;
        static deserializeBinaryFromReader(message: FullListRef, reader: jspb.BinaryReader): FullListRef;
    }

    export namespace FullListRef {
        export type AsObject = {
        }
    }


    export enum RefCase {
        REF_NOT_SET = 0,
        FULL_LIST = 1,
        ELEM_REF = 2,
    }

}

export class DataRef extends jspb.Message { 

    hasPrimitiveRef(): boolean;
    clearPrimitiveRef(): void;
    getPrimitiveRef(): PrimitiveRef | undefined;
    setPrimitiveRef(value?: PrimitiveRef): DataRef;

    hasStructRef(): boolean;
    clearStructRef(): void;
    getStructRef(): StructRef | undefined;
    setStructRef(value?: StructRef): DataRef;

    hasListRef(): boolean;
    clearListRef(): void;
    getListRef(): ListRef | undefined;
    setListRef(value?: ListRef): DataRef;

    getValueRefCase(): DataRef.ValueRefCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataRef.AsObject;
    static toObject(includeInstance: boolean, msg: DataRef): DataRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataRef;
    static deserializeBinaryFromReader(message: DataRef, reader: jspb.BinaryReader): DataRef;
}

export namespace DataRef {
    export type AsObject = {
        primitiveRef?: PrimitiveRef.AsObject,
        structRef?: StructRef.AsObject,
        listRef?: ListRef.AsObject,
    }

    export enum ValueRefCase {
        VALUE_REF_NOT_SET = 0,
        PRIMITIVE_REF = 1,
        STRUCT_REF = 2,
        LIST_REF = 3,
    }

}

export class MethodDataRef extends jspb.Message { 
    getMethodIndex(): number;
    setMethodIndex(value: number): MethodDataRef;

    hasArgRef(): boolean;
    clearArgRef(): void;
    getArgRef(): NamedDataRef | undefined;
    setArgRef(value?: NamedDataRef): MethodDataRef;

    hasResponseRef(): boolean;
    clearResponseRef(): void;
    getResponseRef(): NamedDataRef | undefined;
    setResponseRef(value?: NamedDataRef): MethodDataRef;

    hasAkitaAnnotations(): boolean;
    clearAkitaAnnotations(): void;
    getAkitaAnnotations(): types_pb.AkitaAnnotations | undefined;
    setAkitaAnnotations(value?: types_pb.AkitaAnnotations): MethodDataRef;

    getRefCase(): MethodDataRef.RefCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodDataRef.AsObject;
    static toObject(includeInstance: boolean, msg: MethodDataRef): MethodDataRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MethodDataRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodDataRef;
    static deserializeBinaryFromReader(message: MethodDataRef, reader: jspb.BinaryReader): MethodDataRef;
}

export namespace MethodDataRef {
    export type AsObject = {
        methodIndex: number,
        argRef?: NamedDataRef.AsObject,
        responseRef?: NamedDataRef.AsObject,
        akitaAnnotations?: types_pb.AkitaAnnotations.AsObject,
    }

    export enum RefCase {
        REF_NOT_SET = 0,
        ARG_REF = 2,
        RESPONSE_REF = 3,
    }

}

export class StructTemplate extends jspb.Message { 

    getFieldTemplatesMap(): jspb.Map<string, DataTemplate>;
    clearFieldTemplatesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: StructTemplate): StructTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructTemplate;
    static deserializeBinaryFromReader(message: StructTemplate, reader: jspb.BinaryReader): StructTemplate;
}

export namespace StructTemplate {
    export type AsObject = {

        fieldTemplatesMap: Array<[string, DataTemplate.AsObject]>,
    }
}

export class ListTemplate extends jspb.Message { 
    clearElemTemplatesList(): void;
    getElemTemplatesList(): Array<DataTemplate>;
    setElemTemplatesList(value: Array<DataTemplate>): ListTemplate;
    addElemTemplates(value?: DataTemplate, index?: number): DataTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: ListTemplate): ListTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTemplate;
    static deserializeBinaryFromReader(message: ListTemplate, reader: jspb.BinaryReader): ListTemplate;
}

export namespace ListTemplate {
    export type AsObject = {
        elemTemplatesList: Array<DataTemplate.AsObject>,
    }
}

export class OptionalTemplate extends jspb.Message { 

    hasValueTemplate(): boolean;
    clearValueTemplate(): void;
    getValueTemplate(): DataTemplate | undefined;
    setValueTemplate(value?: DataTemplate): OptionalTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptionalTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: OptionalTemplate): OptionalTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptionalTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptionalTemplate;
    static deserializeBinaryFromReader(message: OptionalTemplate, reader: jspb.BinaryReader): OptionalTemplate;
}

export namespace OptionalTemplate {
    export type AsObject = {
        valueTemplate?: DataTemplate.AsObject,
    }
}

export class DataTemplate extends jspb.Message { 

    hasStructTemplate(): boolean;
    clearStructTemplate(): void;
    getStructTemplate(): StructTemplate | undefined;
    setStructTemplate(value?: StructTemplate): DataTemplate;

    hasListTemplate(): boolean;
    clearListTemplate(): void;
    getListTemplate(): ListTemplate | undefined;
    setListTemplate(value?: ListTemplate): DataTemplate;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): method_pb.Data | undefined;
    setValue(value?: method_pb.Data): DataTemplate;

    hasRef(): boolean;
    clearRef(): void;
    getRef(): MethodDataRef | undefined;
    setRef(value?: MethodDataRef): DataTemplate;

    hasOptionalTemplate(): boolean;
    clearOptionalTemplate(): void;
    getOptionalTemplate(): OptionalTemplate | undefined;
    setOptionalTemplate(value?: OptionalTemplate): DataTemplate;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): method_pb.DataMeta | undefined;
    setMeta(value?: method_pb.DataMeta): DataTemplate;

    getValueTemplateCase(): DataTemplate.ValueTemplateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: DataTemplate): DataTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataTemplate;
    static deserializeBinaryFromReader(message: DataTemplate, reader: jspb.BinaryReader): DataTemplate;
}

export namespace DataTemplate {
    export type AsObject = {
        structTemplate?: StructTemplate.AsObject,
        listTemplate?: ListTemplate.AsObject,
        value?: method_pb.Data.AsObject,
        ref?: MethodDataRef.AsObject,
        optionalTemplate?: OptionalTemplate.AsObject,
        meta?: method_pb.DataMeta.AsObject,
    }

    export enum ValueTemplateCase {
        VALUE_TEMPLATE_NOT_SET = 0,
        STRUCT_TEMPLATE = 1,
        LIST_TEMPLATE = 2,
        VALUE = 3,
        REF = 4,
        OPTIONAL_TEMPLATE = 5,
    }

}

export class MethodTemplate extends jspb.Message { 
    getId(): string;
    setId(value: string): MethodTemplate;

    hasMethodId(): boolean;
    clearMethodId(): void;
    getMethodId(): method_pb.MethodID | undefined;
    setMethodId(value?: method_pb.MethodID): MethodTemplate;

    getArgTemplatesMap(): jspb.Map<string, DataTemplate>;
    clearArgTemplatesMap(): void;

    getResponsesMap(): jspb.Map<string, method_pb.Data>;
    clearResponsesMap(): void;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): method_pb.MethodMeta | undefined;
    setMeta(value?: method_pb.MethodMeta): MethodTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: MethodTemplate): MethodTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MethodTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodTemplate;
    static deserializeBinaryFromReader(message: MethodTemplate, reader: jspb.BinaryReader): MethodTemplate;
}

export namespace MethodTemplate {
    export type AsObject = {
        id: string,
        methodId?: method_pb.MethodID.AsObject,

        argTemplatesMap: Array<[string, DataTemplate.AsObject]>,

        responsesMap: Array<[string, method_pb.Data.AsObject]>,
        meta?: method_pb.MethodMeta.AsObject,
    }
}

export class Sequence extends jspb.Message { 
    getId(): string;
    setId(value: string): Sequence;
    clearMethodTemplatesList(): void;
    getMethodTemplatesList(): Array<MethodTemplate>;
    setMethodTemplatesList(value: Array<MethodTemplate>): Sequence;
    addMethodTemplates(value?: MethodTemplate, index?: number): MethodTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sequence.AsObject;
    static toObject(includeInstance: boolean, msg: Sequence): Sequence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sequence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sequence;
    static deserializeBinaryFromReader(message: Sequence, reader: jspb.BinaryReader): Sequence;
}

export namespace Sequence {
    export type AsObject = {
        id: string,
        methodTemplatesList: Array<MethodTemplate.AsObject>,
    }
}

export class SequenceRun extends jspb.Message { 

    hasSeq(): boolean;
    clearSeq(): void;
    getSeq(): Sequence | undefined;
    setSeq(value?: Sequence): SequenceRun;
    getRerunAttempt(): number;
    setRerunAttempt(value: number): SequenceRun;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SequenceRun.AsObject;
    static toObject(includeInstance: boolean, msg: SequenceRun): SequenceRun.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SequenceRun, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SequenceRun;
    static deserializeBinaryFromReader(message: SequenceRun, reader: jspb.BinaryReader): SequenceRun;
}

export namespace SequenceRun {
    export type AsObject = {
        seq?: Sequence.AsObject,
        rerunAttempt: number,
    }
}
