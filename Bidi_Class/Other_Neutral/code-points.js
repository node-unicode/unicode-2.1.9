module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,37,153,75,146,43,57,12,3,47,228,69,233,15,156,229,197,220,255,26,131,68,47,204,232,182,137,42,137,80,137,105,235,223,247,27,191,249,91,191,253,59,191,251,123,63,253,198,254,141,243,27,247,55,222,111,228,95,255,230,247,155,201,154,191,185,126,115,255,230,249,205,251,155,239,183,214,111,237,223,210,111,249,183,191,223,30,191,61,127,199,191,251,253,238,248,221,249,187,235,119,247,207,227,231,249,243,250,57,127,159,159,115,229,92,104,228,74,35,151,26,147,255,115,171,153,123,77,255,198,202,144,214,200,107,230,149,188,220,98,172,228,173,228,173,228,229,126,35,55,28,185,227,200,45,71,238,57,118,242,118,242,118,242,118,242,118,242,54,83,73,222,73,222,73,222,73,222,73,222,97,126,201,59,201,59,201,59,201,203,160,71,134,60,110,222,187,121,239,230,189,155,247,94,222,123,209,189,232,94,116,47,58,229,122,202,123,202,123,202,123,162,76,201,87,242,157,207,50,221,153,2,206,140,225,154,151,126,239,75,105,191,151,23,127,251,247,198,151,215,200,107,230,181,242,218,121,157,188,146,151,178,191,212,253,165,240,47,149,127,41,253,75,237,95,106,246,82,179,151,154,189,212,236,165,102,47,53,123,169,217,75,205,94,106,246,82,179,151,154,189,212,236,165,54,47,181,121,169,205,219,252,31,93,230,245,50,175,247,146,159,185,189,204,237,101,110,47,115,123,153,219,123,185,238,203,117,95,242,94,242,50,215,167,228,101,190,47,243,125,153,239,83,242,148,188,204,251,101,222,47,243,126,153,247,203,188,95,124,126,49,250,197,233,23,171,95,188,126,169,193,163,6,246,79,223,151,215,200,107,230,181,242,218,121,157,188,110,94,89,124,169,143,82,31,165,62,74,125,148,250,40,245,81,234,163,212,71,169,143,82,31,165,62,74,125,148,250,40,245,81,234,163,212,71,169,143,82,31,165,62,74,125,148,250,40,245,81,234,163,212,71,169,143,82,31,165,62,202,154,82,214,148,178,166,148,85,170,155,255,51,63,101,126,98,165,102,172,206,88,157,113,142,46,152,174,152,46,153,174,153,205,226,221,172,222,205,242,221,179,239,177,48,89,193,155,37,188,87,215,38,139,147,85,188,89,198,155,117,188,89,200,155,149,188,187,148,187,150,187,152,255,86,50,201,93,203,93,204,93,205,93,206,172,231,205,130,222,172,232,205,146,222,172,233,125,186,248,81,48,200,205,32,119,7,201,202,222,23,5,235,123,95,20,23,197,69,113,251,188,144,204,138,223,44,249,205,154,223,44,248,205,138,223,143,71,98,240,108,196,140,132,69,216,4,54,137,209,79,121,98,216,42,46,131,124,140,239,49,190,199,248,30,227,123,167,15,207,33,176,177,48,190,119,154,204,83,198,248,30,227,123,140,239,49,190,199,248,30,67,99,209,142,215,167,241,145,215,103,178,15,101,6,57,87,150,79,66,246,163,21,69,66,182,171,149,188,132,65,96,211,106,222,227,211,71,242,35,89,124,42,254,85,255,125,4,229,169,205,210,76,96,163,91,4,243,111,150,112,2,159,102,17,207,147,149,145,192,95,139,191,226,244,60,25,248,188,108,148,183,219,35,27,228,229,131,187,248,96,241,222,234,123,185,212,101,84,151,81,221,60,60,243,230,233,153,47,165,155,212,106,82,171,73,173,38,181,154,212,106,82,166,73,153,18,242,1,207,192,20,243,80,158,210,41,38,163,60,163,9,185,128,242,4,78,51,15,103,249,172,47,15,213,250,242,148,44,182,210,197,94,186,216,76,23,59,231,98,235,92,236,157,139,141,115,177,115,46,182,206,197,222,185,88,237,139,213,190,50,242,132,20,54,225,18,216,254,115,163,132,77,200,69,119,172,88,151,166,192,84,23,83,77,16,33,151,186,89,227,9,131,144,251,222,67,242,33,143,123,92,238,113,15,121,151,188,75,94,106,186,88,22,139,197,176,152,121,194,37,60,130,8,81,176,34,22,43,98,177,63,45,54,168,197,14,181,216,162,22,123,212,98,147,90,60,229,139,199,124,81,161,132,254,245,8,34,36,133,135,126,241,212,103,66,139,176,9,135,112,9,143,64,191,99,164,102,164,102,124,102,164,166,66,230,30,230,30,102,164,102,144,102,144,166,116,102,164,102,164,126,228,61,242,24,179,213,191,80,48,102,51,102,51,102,27,5,195,53,117,54,99,182,201,99,224,102,224,54,221,55,3,79,24,132,73,88,132,77,56,132,75,120,4,17,80,12,20,3,197,64,49,80,12,82,6,41,131,148,73,202,36,101,146,50,73,97,123,29,127,129,141,152,29,150,182,45,122,177,88,82,98,73,137,149,35,86,142,104,174,162,131,138,22,42,122,168,104,150,162,91,102,7,103,203,166,7,76,54,255,201,238,63,71,183,117,246,117,26,192,164,3,76,90,0,125,53,129,205,157,46,48,105,3,179,125,160,141,224,175,19,160,104,47,104,51,104,55,104,59,104,63,104,67,96,184,147,150,48,233,9,147,38,48,55,121,187,127,145,183,201,219,228,29,242,14,121,135,43,31,174,124,218,102,80,28,20,76,117,50,213,201,84,231,69,113,81,92,20,110,15,106,19,162,11,209,254,22,253,111,209,0,23,147,89,76,102,49,153,245,215,160,248,128,22,181,81,108,20,108,75,98,91,74,232,7,135,112,9,143,32,66,238,177,41,221,166,116,155,210,109,74,183,41,221,166,116,155,187,109,238,70,59,17,237,68,116,18,209,73,68,39,17,157,68,52,17,209,68,68,95,208,126,92,244,145,247,250,47,50,241,158,120,79,104,133,150,214,185,133,12,127,217,49,197,238,152,48,9,139,176,9,135,112,9,143,208,188,40,78,246,136,4,20,44,164,195,66,58,230,47,247,47,180,70,107,180,70,219,123,80,221,75,173,46,181,186,212,234,82,171,75,173,46,181,186,212,234,82,171,75,173,46,181,186,212,138,214,38,90,155,104,109,162,181,137,214,38,90,155,104,109,162,181,37,160,96,153,93,150,217,101,153,93,150,217,101,153,177,233,139,77,63,1,5,203,236,178,204,46,203,140,70,32,26,129,216,29,19,80,80,3,246,73,221,2,8,53,96,159,20,251,164,216,39,197,62,153,128,98,163,96,137,94,150,232,221,69,22,20,56,120,89,162,23,27,47,54,94,108,188,167,68,131,2,47,217,99,197,30,43,246,88,177,199,138,61,86,236,177,9,40,202,64,64,208,189,40,46,10,220,191,23,5,75,224,178,4,104,94,162,121,37,160,224,113,190,15,197,67,193,2,185,44,144,203,2,185,44,144,203,2,121,88,241,176,2,24,22,52,44,112,88,240,176,0,98,65,196,2,137,5,19,11,40,22,84,44,176,88,112,177,0,99,65,198,2,141,5,27,11,40,22,84,44,176,88,112,177,0,99,65,198,2,141,5,27,11,56,22,116,44,240,56,1,5,6,60,12,120,24,240,48,224,97,0,244,44,240,89,240,179,0,104,65,208,9,40,48,128,142,157,128,2,3,32,30,65,60,162,139,139,46,46,186,184,232,226,162,139,11,226,17,173,92,180,114,209,218,4,241,8,226,17,77,78,52,57,209,228,68,147,19,77,78,52,57,193,62,162,211,137,78,39,216,71,96,187,224,118,1,238,130,220,5,186,11,118,23,240,46,232,93,175,6,240,132,210,32,69,131,20,13,82,52,72,209,32,69,131,20,24,47,56,94,128,188,32,121,129,242,130,229,5,204,11,154,23,56,175,242,124,129,190,68,95,164,47,211,23,234,75,245,197,250,114,125,193,190,100,95,180,47,219,23,238,75,247,197,251,242,125,1,191,132,95,196,47,227,23,242,75,249,197,252,114,126,65,191,164,95,212,47,235,23,246,75,251,197,253,242,126,129,191,196,95,228,47,243,23,250,75,253,194,115,225,185,240,92,120,46,60,23,158,11,207,181,251,173,0,5,158,11,207,133,231,194,115,225,185,240,92,120,174,211,175,15,40,240,92,120,46,60,23,158,11,207,133,231,194,115,225,121,191,120,252,125,243,192,115,225,185,240,92,120,46,60,23,158,11,207,133,231,194,115,225,57,252,151,128,2,207,33,65,9,207,193,65,129,131,2,7,245,247,165,6,207,133,231,194,115,225,185,240,92,120,46,60,23,158,67,70,226,235,143,192,163,4,20,120,14,35,9,70,18,140,36,24,73,48,166,248,126,148,176,9,124,115,194,115,227,185,241,220,120,110,60,55,158,27,207,141,231,198,115,227,185,241,220,120,110,60,55,158,27,207,141,231,198,115,227,185,241,220,120,110,60,55,158,27,207,141,231,198,115,227,185,241,220,120,110,60,55,158,27,207,141,231,198,115,227,185,241,220,120,110,60,55,158,27,207,141,231,192,157,224,58,193,117,130,235,4,215,9,174,75,224,82,24,5,220,9,184,19,112,39,224,46,1,5,70,65,120,9,40,48,202,24,101,140,50,70,25,163,140,81,198,40,72,80,238,215,79,140,130,4,5,9,10,18,76,233,81,96,148,49,10,38,20,76,40,152,80,48,161,96,66,193,132,130,9,253,245,27,108,191,194,198,40,195,132,134,9,13,19,26,38,52,76,104,152,208,48,161,97,66,195,132,134,9,13,19,26,220,50,184,101,112,203,224,150,193,45,131,91,6,183,12,110,25,220,50,184,101,112,203,224,150,193,45,131,91,6,183,12,110,37,160,88,40,22,138,133,98,161,88,40,22,138,133,98,163,216,40,54,138,141,98,163,216,40,54,138,141,98,163,216,40,14,138,131,226,160,16,255,138,127,213,127,185,128,184,128,184,128,184,128,184,128,184,128,184,64,74,236,29,7,205,247,95,243,253,55,225,16,46,225,17,68,72,50,0,100,0,200,0,144,1,160,4,20,92,126,115,121,80,40,1,5,151,223,189,60,191,134,241,173,50,1,5,191,52,108,126,21,219,70,97,20,70,129,131,124,211,76,24,132,73,88,4,126,69,195,193,131,131,7,7,15,14,242,141,212,7,7,15,14,30,28,60,56,120,6,138,129,2,47,15,94,30,188,60,120,121,240,242,224,229,193,203,131,151,7,47,15,94,30,188,60,120,121,240,242,224,37,223,122,13,215,25,174,51,92,103,184,206,112,157,225,58,195,117,134,235,12,215,25,174,51,92,103,184,206,112,93,2,10,188,60,120,121,240,242,224,229,193,203,131,151,7,47,15,94,158,131,226,160,56,40,14,138,131,226,160,56,40,46,138,139,226,162,184,40,248,245,241,92,20,23,197,69,113,81,92,20,15,197,67,129,231,7,207,15,158,31,60,63,120,126,240,252,224,249,193,243,131,231,7,207,15,158,31,60,63,120,126,240,252,224,249,193,243,131,231,7,207,15,158,31,60,135,99,13,199,250,244,119,80,60,135,99,13,199,26,142,53,28,107,56,214,112,172,225,88,195,177,134,99,13,199,26,142,53,28,107,56,214,112,172,225,88,195,177,134,99,13,199,26,142,53,28,107,56,214,112,172,225,88,195,177,134,99,13,199,26,42,53,84,106,168,212,80,169,161,82,67,165,134,74,13,149,26,42,53,84,106,168,212,80,169,161,82,67,165,134,74,13,149,26,42,53,84,106,168,212,80,169,161,82,67,165,134,74,13,149,26,42,53,84,106,168,212,80,169,161,82,67,165,134,74,13,149,26,42,53,84,106,168,212,80,169,161,82,67,165,134,74,13,149,26,42,53,84,106,168,212,80,169,161,82,67,165,134,74,13,149,26,42,53,84,106,168,52,1,5,14,94,28,188,56,120,113,240,226,32,191,206,152,95,103,18,80,224,224,197,193,139,131,183,191,101,227,32,63,243,154,223,121,19,162,120,56,248,112,240,225,224,195,65,240,215,224,175,193,95,131,191,6,127,13,254,26,252,53,248,107,192,213,128,171,1,87,3,174,6,92,13,184,26,112,53,224,106,192,213,128,171,1,87,3,174,6,92,13,184,26,112,53,224,106,192,213,128,171,1,87,3,174,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,65,83,131,166,6,77,13,154,26,52,53,104,106,208,212,160,169,1,2,3,4,6,8,12,16,24,22,48,44,96,88,192,176,128,33,0,67,0,134,0,12,1,140,15,4,32,142,198,217,184,26,119,227,105,188,141,175,81,141,213,142,106,71,181,163,218,81,237,168,118,84,59,170,29,213,142,106,71,181,179,218,89,237,172,118,86,59,171,154,85,205,170,102,85,179,170,85,213,170,106,85,181,170,90,189,227,170,118,85,187,170,93,213,174,106,119,181,187,218,93,237,174,118,87,187,171,221,213,238,106,119,181,187,218,83,237,169,246,84,123,170,61,213,158,106,79,181,167,218,83,237,169,246,86,117,155,127,155,127,155,127,155,255,122,229,215,107,190,230,188,230,188,230,188,191,156,94,243,245,154,234,213,212,124,53,95,205,87,243,213,124,14,156,98,206,108,92,141,187,241,52,222,198,191,28,53,50,206,81,55,71,221,28,117,115,212,205,81,55,71,221,28,117,115,212,205,81,55,71,221,28,117,115,212,205,81,55,123,128,247,245,8,239,235,33,222,215,99,188,175,7,121,95,143,242,190,30,230,125,61,206,251,122,160,247,245,72,239,235,65,222,215,163,188,175,135,121,95,143,243,190,30,232,125,61,210,251,122,168,247,245,88,239,235,193,222,215,163,189,175,135,123,95,143,247,190,30,240,125,61,226,251,122,200,247,245,152,239,235,65,223,215,163,190,175,135,125,95,79,111,190,30,223,124,61,191,249,122,128,243,245,216,239,235,193,95,98,85,245,113,212,199,81,31,123,36,248,245,80,240,235,177,224,215,131,193,44,249,222,241,85,91,127,123,72,248,245,152,112,130,147,137,28,7,38,142,198,217,120,27,95,163,26,201,228,167,65,226,104,156,141,171,113,55,158,198,30,156,226,108,162,26,171,29,213,142,106,71,181,163,218,81,237,168,118,84,59,170,29,213,142,106,103,181,235,47,246,10,171,87,88,189,194,234,21,86,175,176,122,133,221,79,119,63,165,218,179,167,86,137,179,177,199,186,241,43,144,144,181,26,24,200,149,137,227,23,28,72,253,137,175,81,141,38,166,122,196,213,184,27,79,99,243,95,243,95,243,95,243,211,60,136,189,166,170,85,181,170,86,213,170,90,85,171,106,85,173,171,117,181,174,214,205,113,115,76,78,158,176,198,209,56,27,87,227,105,36,147,167,137,216,156,209,156,209,156,177,27,155,57,110,227,107,172,106,86,53,171,154,205,156,205,156,205,156,205,105,173,102,103,58,59,199,217,57,182,158,103,118,70,179,51,154,157,209,236,140,88,21,68,53,242,254,234,8,87,71,184,58,194,181,250,254,238,251,187,239,239,190,191,87,35,227,225,208,140,216,247,235,200,122,127,239,247,250,117,97,117,108,171,46,240,21,132,248,26,249,244,244,94,167,213,56,173,198,105,53,78,171,113,90,141,211,106,240,229,129,184,254,251,31,10,115,25,31,133,32,0,0])))