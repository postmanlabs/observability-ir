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

goog.provide('proto.api_spec.Uint64');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api_spec.Uint64Type');

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
proto.api_spec.Uint64 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_spec.Uint64, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_spec.Uint64.displayName = 'proto.api_spec.Uint64';
}



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
proto.api_spec.Uint64.prototype.toObject = function(opt_includeInstance) {
  return proto.api_spec.Uint64.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_spec.Uint64} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.Uint64.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = msg.getType()) && proto.api_spec.Uint64Type.toObject(includeInstance, f),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api_spec.Uint64}
 */
proto.api_spec.Uint64.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_spec.Uint64;
  return proto.api_spec.Uint64.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_spec.Uint64} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_spec.Uint64}
 */
proto.api_spec.Uint64.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_spec.Uint64Type;
      reader.readMessage(value,proto.api_spec.Uint64Type.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
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
proto.api_spec.Uint64.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_spec.Uint64.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_spec.Uint64} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.Uint64.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_spec.Uint64Type.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional Uint64Type type = 1;
 * @return {?proto.api_spec.Uint64Type}
 */
proto.api_spec.Uint64.prototype.getType = function() {
  return /** @type{?proto.api_spec.Uint64Type} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Uint64Type, 1));
};


/**
 * @param {?proto.api_spec.Uint64Type|undefined} value
 * @return {!proto.api_spec.Uint64} returns this
*/
proto.api_spec.Uint64.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Uint64} returns this
 */
proto.api_spec.Uint64.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Uint64.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.api_spec.Uint64.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_spec.Uint64} returns this
 */
proto.api_spec.Uint64.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


