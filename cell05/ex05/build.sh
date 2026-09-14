#/bin/bash

if [ $# -eq 0 ]; then
    echo 'No arguments supplied'
else
    args=("$@")
    for arg in "${args[@]}"; do
        mkdir "ex${arg}"
    done
fi
