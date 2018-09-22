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
    Command,
    command,
    param,
    Options,
    option
} from 'clime';
import Generator from '../Generator';


export class GenerateOptions extends Options {
    @option({
        flag: 'e',
        description: 'embed images into output file',
        toggle: true,
        default: false,
        required: false
    })
    embedImages: boolean = false;

    @option({
        flag: 'v',
        description: 'be verbose',
        toggle: true,
        default: false,
        required: false
    })
    verbose: boolean = false;
}

@command({
    description: 'Generate formatted files from the input file.',
})
export default class extends Command {
    execute(
        @param({
            description: 'The name of the input file',
            required: true,
        }) filename: string,
        options: GenerateOptions
    ) {
        let generator = new Generator({
            filename: filename,
            embedImages: options.embedImages,
            verbose: options.verbose
        });

        generator.generate();
    }
}