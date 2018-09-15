/*
    main.swift
    bookdown

    Created by Thomas Bonk on 15.09.18.
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
      http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import Commander

Group {
    $0.command(
        "generate",
        Argument<String>("filename"),
        Flag(
            "single-file",
            default: false,
            flag: "s",
            description: "Generate only a single file"),
        description: "Generate a book",
        generate
    )
}.run()
