/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule XMLHttpRequest
 * @flow
 */
'use strict';

var RCTDataManager = require('NativeModules').DataManager;

var XMLHttpRequestBase = require('XMLHttpRequestBase');

class XMLHttpRequest extends XMLHttpRequestBase {

  sendImpl(method: ?string, url: ?string, headers: Object, data: any): void {
    RCTDataManager.queryData(
      'http',
      {
        method: method,
        url: url,
        data: data,
        headers: headers,
      },
      this.callback.bind(this)
    );
  }

  abortImpl(): void {
    console.warn(
      'XMLHttpRequest: abort() cancels JS callbacks ' +
      'but not native HTTP request.'
    );
  }
}

module.exports = XMLHttpRequest;
