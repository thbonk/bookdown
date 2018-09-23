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

export class ConsoleLogger {
    private _verbose: boolean;

    public constructor(verbose: boolean) {
        this._verbose = verbose;
    }

    public info(message ? : any, ...optionalParams: any[]) {
        if (this._verbose) {
            if (optionalParams.length > 0) {
                console.log(message, optionalParams);
            } else {
                console.log(message);
            }
        }
    }

    public warn(message ? : any, ...optionalParams: any[]) {
        if (optionalParams.length > 0) {
            console.log(message, optionalParams);
        } else {
            console.log(message);
        }
    }

    public error(message ? : any, ...optionalParams: any[]) {
        if (optionalParams.length > 0) {
            console.error(message, optionalParams);
        } else {
            console.error(message);
        }
    }
}