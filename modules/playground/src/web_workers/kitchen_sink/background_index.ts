/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {WorkerAppModule} from '@angular/platform-browser';
import {platformWorkerAppDynamic} from '@angular/platform-browser-dynamic';

import {HelloCmp} from './index_common';

@NgModule({imports: [WorkerAppModule], bootstrap: [HelloCmp], declarations: [HelloCmp]})
class ExampleModule {
}

export function main() {
  platformWorkerAppDynamic().bootstrapModule(ExampleModule);
}
