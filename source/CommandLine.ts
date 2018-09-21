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

import {
    CommandLineParser,
    CommandLineFlagParameter
} from '@microsoft/ts-command-line';
import {
    GlobalSettings
} from './GlobalSettings';
import {
    Generate
} from './Actions/Generate';


export class CommandLine extends CommandLineParser {
    private _verbose: CommandLineFlagParameter | undefined = undefined;

    public constructor() {
        super({
            toolFilename: 'bookdown',
            toolDescription: 'Create documents out of a collection of Markdown files.'
        });

        this.addAction(new Generate());
    }

    protected onDefineParameters(): void { // abstract
        this._verbose = this.defineFlagParameter({
            parameterLongName: '--verbose',
            parameterShortName: '-v',
            description: 'Be verbose while processing the input files'
        });
    }

    protected onExecute(): Promise < void > { // override
        GlobalSettings.beVerbose = this._verbose != undefined && this._verbose.value;
        return super.onExecute();
    }
}