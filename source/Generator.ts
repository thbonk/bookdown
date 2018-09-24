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

import * as CommonMark from 'commonmark';
import {ConsoleLogger} from './ConsoleLogger';
import * as fs from 'fs';
import * as Path from 'path';

export interface GeneratorOptions {
    filename: string;
    outDir?: string;
    smart ? : boolean;
    safeExport ? : boolean;
    sourcePos ? : boolean;
    verbose ? : boolean;
}

export default class Generator {
    private _options: GeneratorOptions;
    private _source: string;
    private _reader: CommonMark.Parser;
    private _log: ConsoleLogger;

    public constructor(options: GeneratorOptions) {
        this._options = options;
        this.setDefaultOptionValues();

        this._log = new ConsoleLogger(this._options.verbose!);

        this._log.info(`Reading file ${this._options.filename}...`)
        this._source = fs.readFileSync(this._options.filename, 'utf8');

        this._reader = new CommonMark.Parser({
            smart: this._options.smart
        });
    }

    public convert() {
        this._log.info(`Parsing...`)
        let parsed = this._reader.parse(this._source);
        let writer = new CommonMark.HtmlRenderer({
            safe: this._options.safeExport,
            smart: this._options.smart,
            sourcepos: this._options.sourcePos
        });

        this.saveFile(writer.render(parsed));
    }

    private saveFile(html: string) {
        let outFilename = Path.parse(this._options.filename).name + ".html";

        this.createOutDir(this._options.outDir!);
        this._log.info(`Saving...`)
        fs.writeFileSync(Path.join(this._options.outDir!, outFilename), html);
    }

    private createOutDir(pathname: string) {
        if (fs.existsSync(pathname) && fs.statSync(pathname).isFile()) {
            throw new Error(`>${pathname}< exists and is a file!`);
        }

        if (!fs.existsSync(pathname)) {
            this._log.info(`Creating out dir ${pathname}...`)
            fs.mkdirSync(pathname);
        } else {
            this._log.info(`Out dir ${pathname} already exists...`)
        }
    }

    private setDefaultOptionValues() {
        if (this._options.safeExport == undefined) {
            this._options.safeExport = false;
        }

        if (this._options.sourcePos == undefined) {
            this._options.sourcePos = false;
        }

        if (this._options.verbose == undefined) {
            this._options.verbose = false;
        }

        if (this._options.smart == undefined) {
            this._options.smart = false;
        }

        if (this._options.outDir == undefined) {
            let inputFilePath = Path.parse(this._options.filename).dir;

            inputFilePath = Path.normalize(inputFilePath);
            this._options.outDir = Path.join(inputFilePath, "generated");
        }
    }
}