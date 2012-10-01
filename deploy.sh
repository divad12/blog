#!/usr/bin/env bash

# TODO: give --delete option to rsync
jekyll && rsync -avz _site/ david:~/www
