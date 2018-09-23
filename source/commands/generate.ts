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
        flag: 's',
        description: 'Smart parsing: straight quotes will be made curly, -- will be changed to an en dash,'
                        + ' --- will be changed to an em dash, and ... will be changed to ellipses.',
        toggle: true,
        default: false,
        required: false
    })
    smart: boolean = false;

    @option({
        flag: 'r',
        description: 'Raw HTML will not be passed through to HTML output (it will be replaced by comments), '
                        + 'and potentially unsafe URLs in links and images (those beginning with javascript:, '
                        + 'vbscript:, file:, and with a few exceptions data:) will be replaced with empty strings.',
        toggle: true,
        default: false,
        required: false
    })
    safeExport: boolean = false;

    @option({
        flag: 'p',
        description: 'Source position information for block-level elements will be rendered in the '
                        +'data-sourcepos attribute (for HTML) or the sourcepos attribute (for XML).',
        toggle: true,
        default: false,
        required: false
    })
    sourcePos: boolean = false

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
        try {
            let generator = new Generator({
                filename: filename,
                smart: options.smart,
                safeExport: options.safeExport,
                sourcePos: options.sourcePos,
                verbose: options.verbose
            });

            generator.generate();
        } catch (ex) {
            console.error(ex.message);
        }
    }
}