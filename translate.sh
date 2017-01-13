#! /usr/bin/env python
# -*- coding: utf-8 -*-

import subprocess

proc = subprocess.Popen([ 'rm -rf extracted-messages; node_modules/.bin/babel --plugins react-intl "trans-tmp/**/*.js*"; ls extracted-messages', ], stdout=subprocess.PIPE, shell=True, stderr=subprocess.STDOUT,)
(out, err) = proc.communicate()

print out
