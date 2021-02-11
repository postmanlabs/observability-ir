// Code generated by protoc-gen-go. DO NOT EDIT.
// source: witness.proto

package api_spec

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Witness struct {
	// This may be a partial method (i.e. only containing arg or response value)
	// depending on the broker's observation.
	Method               *Method  `protobuf:"bytes,1,opt,name=method,proto3" json:"method,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Witness) Reset()         { *m = Witness{} }
func (m *Witness) String() string { return proto.CompactTextString(m) }
func (*Witness) ProtoMessage()    {}
func (*Witness) Descriptor() ([]byte, []int) {
	return fileDescriptor_6a1e9059dbd106eb, []int{0}
}

func (m *Witness) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Witness.Unmarshal(m, b)
}
func (m *Witness) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Witness.Marshal(b, m, deterministic)
}
func (m *Witness) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Witness.Merge(m, src)
}
func (m *Witness) XXX_Size() int {
	return xxx_messageInfo_Witness.Size(m)
}
func (m *Witness) XXX_DiscardUnknown() {
	xxx_messageInfo_Witness.DiscardUnknown(m)
}

var xxx_messageInfo_Witness proto.InternalMessageInfo

func (m *Witness) GetMethod() *Method {
	if m != nil {
		return m.Method
	}
	return nil
}

func init() {
	proto.RegisterType((*Witness)(nil), "api_spec.Witness")
}

func init() { proto.RegisterFile("witness.proto", fileDescriptor_6a1e9059dbd106eb) }

var fileDescriptor_6a1e9059dbd106eb = []byte{
	// 135 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2d, 0xcf, 0x2c, 0xc9,
	0x4b, 0x2d, 0x2e, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x48, 0x2c, 0xc8, 0x8c, 0x2f,
	0x2e, 0x48, 0x4d, 0x96, 0xe2, 0xc9, 0x4d, 0x2d, 0xc9, 0xc8, 0x4f, 0x81, 0x88, 0x2b, 0x19, 0x73,
	0xb1, 0x87, 0x43, 0x14, 0x0a, 0x69, 0x70, 0xb1, 0x41, 0xa4, 0x24, 0x18, 0x15, 0x18, 0x35, 0xb8,
	0x8d, 0x04, 0xf4, 0x60, 0x7a, 0xf4, 0x7c, 0xc1, 0xe2, 0x41, 0x50, 0x79, 0x27, 0x9d, 0x28, 0xad,
	0xc4, 0xec, 0xcc, 0x92, 0xc4, 0xe2, 0xfc, 0xb4, 0x92, 0xf2, 0xc4, 0xa2, 0x54, 0xbd, 0xe4, 0xfc,
	0x5c, 0xfd, 0xe2, 0xd2, 0x82, 0xd4, 0xa2, 0xe2, 0x92, 0xc4, 0x22, 0xfd, 0x82, 0x24, 0xfd, 0xf4,
	0x7c, 0x7d, 0x98, 0xe6, 0x24, 0x36, 0xb0, 0x4d, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x4e,
	0x90, 0xde, 0xae, 0x92, 0x00, 0x00, 0x00,
}
