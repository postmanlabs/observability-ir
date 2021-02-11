#!/bin/bash

set -euo pipefail

SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

pushd ${SCRIPTPATH} > /dev/null

for d in proto/*; do
  pkg=$(basename ${d})
  mkdir -p go/${pkg}
  mkdir -p py/${pkg}

  # Use absolute path because docker volume likes that.
  proto_dir=$(cd ${d}; pwd)
  go_out=$(cd go/${pkg}; pwd)
  py_out=$(cd py/${pkg}; pwd)

  # Using namely/protoc:1.26_1 (libprotoc 3.8.0) to output go code using
  # golang protobuf APIv1.
  docker run --rm \
    -u $(id -u ${USER}):$(id -g ${USER}) \
    -v ${proto_dir}:/defs \
    -v ${go_out}:/go_out \
    --entrypoint /bin/sh \
    namely/protoc:1.26_1 \
    -c '/usr/local/bin/protoc -I /opt/include -I /defs --go_out paths=source_relative:/go_out /defs/*.proto'

  docker run --rm \
    -u $(id -u ${USER}):$(id -g ${USER}) \
    -v ${proto_dir}:/defs \
    -v ${py_out}:/py_out \
    --entrypoint /bin/sh \
    namely/protoc:1.26_1 \
    -c '/usr/local/bin/protoc -I /opt/include -I /defs --python_out /py_out /defs/*.proto'
done

popd > /dev/null
