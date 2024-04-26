# Intermediate representation for APIs

## Contents

This repository supports the [Postman Insights
Agent](https://github.com/postmanlabs/postman-insights-agent). It contains
protobuf definitions and generator scripts for Go, Python, and JavaScript.

Generated code is checked into source control to enable the use of
native-language tooling without needing to invoke the `protoc` compiler.

## Updating the Protobuf definition

- Make the change under `proto/`
- Run `make build`
- Update
  [`observability-shared-libs`](https://github.com/postmanlabs/observability-shared-libs)
  with the new version of the Go package
- In `observability-shared-libs/spec_utils/ir_hash`, update `gen.go` with any
  new message types, or new inner structs from oneof types. Then run `make` in
  that directory to generate a new set of hash functions. (If you add a new
  file, add that file to the list in `gen.go` so that it will be checked
  for version mismatch.)

## Directory structure

```
proto/  # protobuf definitions
  foo/  # protobuf package
  ...

go/     # Generated Go code
  foo/

py/     # Generated Python code
  foo/

js/     # Generated JavaScript code
  foo/
```
