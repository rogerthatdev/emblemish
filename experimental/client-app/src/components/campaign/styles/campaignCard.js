// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { css } from 'lit';

/* stylelint-disable font-family-no-missing-generic-family-keyword */
const campaignStyles =  css`
    .card {
      border: 1px solid lightgray;
      background-color: white;
      margin: 10px;
      border-radius: 10px;
      font-size: 16px;
      width: 450px;
      overflow: hidden;
    }

    .cardWrapper {
      margin: 10px;
      display: flex;
      height: 250px;
      flex-direction: column;
      justify-content: space-between;
    }

    .title {
      font-size: 20px;
      margin-bottom: 17px;
    }

    .description {
      color: #5C6063;
    }

    .actionWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .button {
      cursor: pointer;
      background: white;
      border-radius: 50px;
      border: 2px solid #2C67FF;
      padding: 20px;
      box-shadow: 0 1px 2px #ccc;
      color: #2C67FF;
      font-size: 16px;
      font-family: 'Google Sans';
    }

    .fillButton {
      cursor: pointer;
      color: white;
      background: #2C67FF;
      border-radius: 50px;
      border: 2px solid #2C67FF;
      padding: 20px;
      box-shadow: 0 1px 2px #ccc;
      font-size: 16px;
      font-family: 'Google Sans';
    }
`;
/* stylelint-enable font-family-no-missing-generic-family-keyword */

export default campaignStyles;
