// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

precision mediump float;

varying vec4 vColor;

void main()
{
   gl_FragColor = fract(vColor * 4.0 - vec4(2, 2, 2, 2));
}


