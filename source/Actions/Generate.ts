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
    CommandLineAction,
    CommandLineStringParameter
} from '@microsoft/ts-command-line';

export class Generate extends CommandLineAction {
    private _filename: CommandLineStringParameter | undefined = undefined;

    public constructor() {
        super({
            actionName: 'generate',
            summary: 'Generate formatted output',
            documentation: 'Generate formatted output based on the Markdown input file(s).'
        });
    }

    protected onExecute(): Promise < void > { // abstract
        return new Promise((resolve, reject) => {
            // the resolve / reject functions control the fate of the promise
            console.log(resolve);
            console.log(reject);
        });
    }

    protected onDefineParameters() {
        this._filename = this.defineStringParameter({
            argumentName: "FILENAME",
            parameterShortName: "-f",
            parameterLongName: "--file",
            required: true,
            defaultValue: undefined,
            description: "The name of the input file."
        }); 
    }
}