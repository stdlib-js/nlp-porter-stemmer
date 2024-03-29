/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Extracts the stem of a given word.
*
* @param word - input word
* @returns word stem
*
* @example
* var out = porterStemmer( 'walking' );
* // returns 'walk'
*
* @example
* var out = porterStemmer( 'walked' );
* // returns 'walk'
*
* @example
* var out = porterStemmer( 'walks' );
* // returns 'walk'
*
* @example
* var out = porterStemmer( 'worldwide' );
* // returns 'worldwid'
*
* @example
* var out = porterStemmer( '' );
* // returns ''
*/
declare function porterStemmer( word: string ): string;


// EXPORTS //

export = porterStemmer;
