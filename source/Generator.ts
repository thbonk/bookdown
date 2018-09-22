//
//  Copyright (C) 2018 Thomas Bonk
//  
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//  
//    http://www.apache.org/licenses/LICENSE-2.0
//  
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//

//import * as CommonMark from 'commonmark';
import * as fs from 'fs';

export interface GeneratorOptions {
    filename: string;
    embedImages?: boolean;
    verbose?: boolean;
}

export default class Generator {
    private _options: GeneratorOptions;
    private _source: string;

    public constructor(options: GeneratorOptions) {
        this._options = options;

        if (this._options.embedImages == undefined) {
            this._options.embedImages = false;
        }

        if (this._options.verbose == undefined) {
            this._options.verbose = false;
        }

        this._source = fs.readFileSync(this._options.filename, 'utf8');
        this._source;
    }

    public generate() {

    }
}