// source: method.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.api_spec.MethodMeta');
goog.provide('proto.api_spec.MethodMeta.MetaCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api_spec.GRPCMethodMeta');
goog.require('proto.api_spec.HTTPMethodMeta');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_spec.MethodMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api_spec.MethodMeta.oneofGroups_);
};
goog.inherits(proto.api_spec.MethodMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_spec.MethodMeta.displayName = 'proto.api_spec.MethodMeta';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api_spec.MethodMeta.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api_spec.MethodMeta.MetaCase = {
  META_NOT_SET: 0,
  GRPC: 1,
  HTTP: 2
};

/**
 * @return {proto.api_spec.MethodMeta.MetaCase}
 */
proto.api_spec.MethodMeta.prototype.getMetaCase = function() {
  return /** @type {proto.api_spec.MethodMeta.MetaCase} */(jspb.Message.computeOneofCase(this, proto.api_spec.MethodMeta.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_spec.MethodMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.api_spec.MethodMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_spec.MethodMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.MethodMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    grpc: (f = msg.getGrpc()) && proto.api_spec.GRPCMethodMeta.toObject(includeInstance, f),
    http: (f = msg.getHttp()) && proto.api_spec.HTTPMethodMeta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_spec.MethodMeta}
 */
proto.api_spec.MethodMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_spec.MethodMeta;
  return proto.api_spec.MethodMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_spec.MethodMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_spec.MethodMeta}
 */
proto.api_spec.MethodMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_spec.GRPCMethodMeta;
      reader.readMessage(value,proto.api_spec.GRPCMethodMeta.deserializeBinaryFromReader);
      msg.setGrpc(value);
      break;
    case 2:
      var value = new proto.api_spec.HTTPMethodMeta;
      reader.readMessage(value,proto.api_spec.HTTPMethodMeta.deserializeBinaryFromReader);
      msg.setHttp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_spec.MethodMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_spec.MethodMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_spec.MethodMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.MethodMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrpc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_spec.GRPCMethodMeta.serializeBinaryToWriter
    );
  }
  f = message.getHttp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api_spec.HTTPMethodMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional GRPCMethodMeta grpc = 1;
 * @return {?proto.api_spec.GRPCMethodMeta}
 */
proto.api_spec.MethodMeta.prototype.getGrpc = function() {
  return /** @type{?proto.api_spec.GRPCMethodMeta} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.GRPCMethodMeta, 1));
};


/**
 * @param {?proto.api_spec.GRPCMethodMeta|undefined} value
 * @return {!proto.api_spec.MethodMeta} returns this
*/
proto.api_spec.MethodMeta.prototype.setGrpc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api_spec.MethodMeta.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.MethodMeta} returns this
 */
proto.api_spec.MethodMeta.prototype.clearGrpc = function() {
  return this.setGrpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.MethodMeta.prototype.hasGrpc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HTTPMethodMeta http = 2;
 * @return {?proto.api_spec.HTTPMethodMeta}
 */
proto.api_spec.MethodMeta.prototype.getHttp = function() {
  return /** @type{?proto.api_spec.HTTPMethodMeta} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.HTTPMethodMeta, 2));
};


/**
 * @param {?proto.api_spec.HTTPMethodMeta|undefined} value
 * @return {!proto.api_spec.MethodMeta} returns this
*/
proto.api_spec.MethodMeta.prototype.setHttp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api_spec.MethodMeta.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.MethodMeta} returns this
 */
proto.api_spec.MethodMeta.prototype.clearHttp = function() {
  return this.setHttp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.MethodMeta.prototype.hasHttp = function() {
  return jspb.Message.getField(this, 2) != null;
};


