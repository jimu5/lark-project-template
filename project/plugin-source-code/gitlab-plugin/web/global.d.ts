/**
 * Copyright (2024) Bytedance Ltd. and/or its affiliates
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { SDKClient } from '@lark-project/js-sdk';

declare global {
  interface Window {
    JSSDK: SDKClient;
  }
  declare module '*.png';
  declare module '*.jpg';
  declare module '*.jpeg';
  declare module '*.gif';
  declare module '*.webp';
  declare module '*.ttf';
  declare module '*.woff';
  declare module '*.woff2';
  declare module '*.less';
  declare module '*.mp4';

  declare module '*.svg' {
    const content: any;
    export default content;
  }
}
