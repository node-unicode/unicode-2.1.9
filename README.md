# Unicode v2.1.9 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v2.1.9’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).**

## Installation

```bash
npm install unicode-2.1.9 --save-dev
```

**Note:** _unicode-2.1.9_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-2.1.9/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-2.1.9/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-2.1.9/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-2.1.9/categories')[ 0x41 ];
// Get an array of all code points with `Bidi_Class=Other_Neutral`:
const on = require('unicode-2.1.9/bidi-classes/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-2.1.9/bidi-classes');
// Get the directionality of a given code point:
const directionality = require('unicode-2.1.9/bidi-classes').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v2.1.9:

```js
// properties:

require('unicode-2.1.9/properties/ASCII/code-points');
require('unicode-2.1.9/properties/ASCII/symbols');
require('unicode-2.1.9/properties/ASCII/regex');

require('unicode-2.1.9/properties/Any/code-points');
require('unicode-2.1.9/properties/Any/symbols');
require('unicode-2.1.9/properties/Any/regex');

require('unicode-2.1.9/properties/Assigned/code-points');
require('unicode-2.1.9/properties/Assigned/symbols');
require('unicode-2.1.9/properties/Assigned/regex');

require('unicode-2.1.9/properties/Bidi_Mirrored/code-points');
require('unicode-2.1.9/properties/Bidi_Mirrored/symbols');
require('unicode-2.1.9/properties/Bidi_Mirrored/regex');

// categories:

require('unicode-2.1.9/categories').get(codePoint); // lookup map

require('unicode-2.1.9/categories/C/code-points');
require('unicode-2.1.9/categories/C/symbols');
require('unicode-2.1.9/categories/C/regex');

require('unicode-2.1.9/categories/Cc/code-points');
require('unicode-2.1.9/categories/Cc/symbols');
require('unicode-2.1.9/categories/Cc/regex');

require('unicode-2.1.9/categories/Cf/code-points');
require('unicode-2.1.9/categories/Cf/symbols');
require('unicode-2.1.9/categories/Cf/regex');

require('unicode-2.1.9/categories/Cn/code-points');
require('unicode-2.1.9/categories/Cn/symbols');
require('unicode-2.1.9/categories/Cn/regex');

require('unicode-2.1.9/categories/Co/code-points');
require('unicode-2.1.9/categories/Co/symbols');
require('unicode-2.1.9/categories/Co/regex');

require('unicode-2.1.9/categories/Cs/code-points');
require('unicode-2.1.9/categories/Cs/symbols');
require('unicode-2.1.9/categories/Cs/regex');

require('unicode-2.1.9/categories/L/code-points');
require('unicode-2.1.9/categories/L/symbols');
require('unicode-2.1.9/categories/L/regex');

require('unicode-2.1.9/categories/LC/code-points');
require('unicode-2.1.9/categories/LC/symbols');
require('unicode-2.1.9/categories/LC/regex');

require('unicode-2.1.9/categories/Ll/code-points');
require('unicode-2.1.9/categories/Ll/symbols');
require('unicode-2.1.9/categories/Ll/regex');

require('unicode-2.1.9/categories/Lm/code-points');
require('unicode-2.1.9/categories/Lm/symbols');
require('unicode-2.1.9/categories/Lm/regex');

require('unicode-2.1.9/categories/Lo/code-points');
require('unicode-2.1.9/categories/Lo/symbols');
require('unicode-2.1.9/categories/Lo/regex');

require('unicode-2.1.9/categories/Lt/code-points');
require('unicode-2.1.9/categories/Lt/symbols');
require('unicode-2.1.9/categories/Lt/regex');

require('unicode-2.1.9/categories/Lu/code-points');
require('unicode-2.1.9/categories/Lu/symbols');
require('unicode-2.1.9/categories/Lu/regex');

require('unicode-2.1.9/categories/M/code-points');
require('unicode-2.1.9/categories/M/symbols');
require('unicode-2.1.9/categories/M/regex');

require('unicode-2.1.9/categories/Mc/code-points');
require('unicode-2.1.9/categories/Mc/symbols');
require('unicode-2.1.9/categories/Mc/regex');

require('unicode-2.1.9/categories/Me/code-points');
require('unicode-2.1.9/categories/Me/symbols');
require('unicode-2.1.9/categories/Me/regex');

require('unicode-2.1.9/categories/Mn/code-points');
require('unicode-2.1.9/categories/Mn/symbols');
require('unicode-2.1.9/categories/Mn/regex');

require('unicode-2.1.9/categories/N/code-points');
require('unicode-2.1.9/categories/N/symbols');
require('unicode-2.1.9/categories/N/regex');

require('unicode-2.1.9/categories/Nd/code-points');
require('unicode-2.1.9/categories/Nd/symbols');
require('unicode-2.1.9/categories/Nd/regex');

require('unicode-2.1.9/categories/Nl/code-points');
require('unicode-2.1.9/categories/Nl/symbols');
require('unicode-2.1.9/categories/Nl/regex');

require('unicode-2.1.9/categories/No/code-points');
require('unicode-2.1.9/categories/No/symbols');
require('unicode-2.1.9/categories/No/regex');

require('unicode-2.1.9/categories/P/code-points');
require('unicode-2.1.9/categories/P/symbols');
require('unicode-2.1.9/categories/P/regex');

require('unicode-2.1.9/categories/Pc/code-points');
require('unicode-2.1.9/categories/Pc/symbols');
require('unicode-2.1.9/categories/Pc/regex');

require('unicode-2.1.9/categories/Pd/code-points');
require('unicode-2.1.9/categories/Pd/symbols');
require('unicode-2.1.9/categories/Pd/regex');

require('unicode-2.1.9/categories/Pe/code-points');
require('unicode-2.1.9/categories/Pe/symbols');
require('unicode-2.1.9/categories/Pe/regex');

require('unicode-2.1.9/categories/Pf/code-points');
require('unicode-2.1.9/categories/Pf/symbols');
require('unicode-2.1.9/categories/Pf/regex');

require('unicode-2.1.9/categories/Pi/code-points');
require('unicode-2.1.9/categories/Pi/symbols');
require('unicode-2.1.9/categories/Pi/regex');

require('unicode-2.1.9/categories/Po/code-points');
require('unicode-2.1.9/categories/Po/symbols');
require('unicode-2.1.9/categories/Po/regex');

require('unicode-2.1.9/categories/Ps/code-points');
require('unicode-2.1.9/categories/Ps/symbols');
require('unicode-2.1.9/categories/Ps/regex');

require('unicode-2.1.9/categories/S/code-points');
require('unicode-2.1.9/categories/S/symbols');
require('unicode-2.1.9/categories/S/regex');

require('unicode-2.1.9/categories/Sc/code-points');
require('unicode-2.1.9/categories/Sc/symbols');
require('unicode-2.1.9/categories/Sc/regex');

require('unicode-2.1.9/categories/Sk/code-points');
require('unicode-2.1.9/categories/Sk/symbols');
require('unicode-2.1.9/categories/Sk/regex');

require('unicode-2.1.9/categories/Sm/code-points');
require('unicode-2.1.9/categories/Sm/symbols');
require('unicode-2.1.9/categories/Sm/regex');

require('unicode-2.1.9/categories/So/code-points');
require('unicode-2.1.9/categories/So/symbols');
require('unicode-2.1.9/categories/So/regex');

require('unicode-2.1.9/categories/Z/code-points');
require('unicode-2.1.9/categories/Z/symbols');
require('unicode-2.1.9/categories/Z/regex');

require('unicode-2.1.9/categories/Zl/code-points');
require('unicode-2.1.9/categories/Zl/symbols');
require('unicode-2.1.9/categories/Zl/regex');

require('unicode-2.1.9/categories/Zp/code-points');
require('unicode-2.1.9/categories/Zp/symbols');
require('unicode-2.1.9/categories/Zp/regex');

require('unicode-2.1.9/categories/Zs/code-points');
require('unicode-2.1.9/categories/Zs/symbols');
require('unicode-2.1.9/categories/Zs/regex');

// bidi classes:

require('unicode-2.1.9/bidi-classes').get(codePoint); // lookup map

require('unicode-2.1.9/bidi-classes/Arabic_Number/code-points');
require('unicode-2.1.9/bidi-classes/Arabic_Number/symbols');
require('unicode-2.1.9/bidi-classes/Arabic_Number/regex');

require('unicode-2.1.9/bidi-classes/Common_Separator/code-points');
require('unicode-2.1.9/bidi-classes/Common_Separator/symbols');
require('unicode-2.1.9/bidi-classes/Common_Separator/regex');

require('unicode-2.1.9/bidi-classes/European_Number/code-points');
require('unicode-2.1.9/bidi-classes/European_Number/symbols');
require('unicode-2.1.9/bidi-classes/European_Number/regex');

require('unicode-2.1.9/bidi-classes/European_Separator/code-points');
require('unicode-2.1.9/bidi-classes/European_Separator/symbols');
require('unicode-2.1.9/bidi-classes/European_Separator/regex');

require('unicode-2.1.9/bidi-classes/European_Terminator/code-points');
require('unicode-2.1.9/bidi-classes/European_Terminator/symbols');
require('unicode-2.1.9/bidi-classes/European_Terminator/regex');

require('unicode-2.1.9/bidi-classes/Left_To_Right/code-points');
require('unicode-2.1.9/bidi-classes/Left_To_Right/symbols');
require('unicode-2.1.9/bidi-classes/Left_To_Right/regex');

require('unicode-2.1.9/bidi-classes/Other_Neutral/code-points');
require('unicode-2.1.9/bidi-classes/Other_Neutral/symbols');
require('unicode-2.1.9/bidi-classes/Other_Neutral/regex');

require('unicode-2.1.9/bidi-classes/Paragraph_Separator/code-points');
require('unicode-2.1.9/bidi-classes/Paragraph_Separator/symbols');
require('unicode-2.1.9/bidi-classes/Paragraph_Separator/regex');

require('unicode-2.1.9/bidi-classes/Right_To_Left/code-points');
require('unicode-2.1.9/bidi-classes/Right_To_Left/symbols');
require('unicode-2.1.9/bidi-classes/Right_To_Left/regex');

require('unicode-2.1.9/bidi-classes/Segment_Separator/code-points');
require('unicode-2.1.9/bidi-classes/Segment_Separator/symbols');
require('unicode-2.1.9/bidi-classes/Segment_Separator/regex');

require('unicode-2.1.9/bidi-classes/White_Space/code-points');
require('unicode-2.1.9/bidi-classes/White_Space/symbols');
require('unicode-2.1.9/bidi-classes/White_Space/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
