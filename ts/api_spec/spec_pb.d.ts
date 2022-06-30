// package: api_spec
// file: spec.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as method_pb from "./method_pb";

export class APISpec extends jspb.Message { 
    clearMethodsList(): void;
    getMethodsList(): Array<method_pb.Method>;
    setMethodsList(value: Array<method_pb.Method>): APISpec;
    addMethods(value?: method_pb.Method, index?: number): method_pb.Method;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): APISpec.AsObject;
    static toObject(includeInstance: boolean, msg: APISpec): APISpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: APISpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): APISpec;
    static deserializeBinaryFromReader(message: APISpec, reader: jspb.BinaryReader): APISpec;
}

export namespace APISpec {
    export type AsObject = {
        methodsList: Array<method_pb.Method.AsObject>,

        tagsMap: Array<[string, string]>,
    }
}

export class MethodCalls extends jspb.Message { 
    clearCallsList(): void;
    getCallsList(): Array<method_pb.Method>;
    setCallsList(value: Array<method_pb.Method>): MethodCalls;
    addCalls(value?: method_pb.Method, index?: number): method_pb.Method;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodCalls.AsObject;
    static toObject(includeInstance: boolean, msg: MethodCalls): MethodCalls.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MethodCalls, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodCalls;
    static deserializeBinaryFromReader(message: MethodCalls, reader: jspb.BinaryReader): MethodCalls;
}

export namespace MethodCalls {
    export type AsObject = {
        callsList: Array<method_pb.Method.AsObject>,
    }
}
