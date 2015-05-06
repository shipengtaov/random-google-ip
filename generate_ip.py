#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re

def abs_file(filename):
    return os.path.join(os.path.dirname(os.path.abspath(__file__)),
    filename)

def main():
    input_file = abs_file('README-google-ips.md')
    output_file = abs_file('ips.txt')

    ip_pattern = re.compile('<a[^>]+?>([\d\.]+?)<\/a>')

    ips = []
    with open(input_file, 'rb') as f:
        for line in f.readlines():
            search = ip_pattern.search(line)
            if search:
                ips.append(search.group(1))
    if ips:
        with open(output_file, 'wb') as f:
            f.write("\n".join(ips))
        print "added %d ips" %len(ips)
    else:
        print "there are no ips to write"

if __name__ == '__main__':
    main()
