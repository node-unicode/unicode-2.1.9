module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,61,219,89,210,228,56,114,4,224,179,168,31,180,153,30,126,6,16,136,164,73,51,35,46,192,37,102,209,216,220,65,79,90,206,62,108,107,126,217,102,217,230,85,73,2,14,130,17,238,145,129,250,227,47,127,250,239,159,231,191,95,254,237,55,176,1,1,52,160,3,9,12,160,126,5,127,243,167,9,172,23,108,134,223,12,191,25,126,51,252,102,248,205,240,155,225,183,2,62,192,14,28,192,249,128,127,248,245,15,191,60,255,251,199,231,243,79,207,231,159,159,207,191,60,159,127,125,62,255,254,124,254,227,249,252,238,249,252,254,249,252,225,249,252,231,243,249,227,175,55,253,233,249,223,159,159,207,95,158,207,127,61,159,191,62,159,255,121,62,255,251,124,254,239,249,252,255,59,77,89,210,199,146,62,150,244,177,164,143,37,125,44,233,99,73,31,75,250,88,210,199,146,62,150,244,177,164,207,9,92,192,13,120,196,31,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,118,124,14,52,14,83,28,166,56,76,113,152,226,48,242,97,228,195,200,135,145,15,35,159,86,113,26,249,52,242,105,228,211,128,167,1,79,3,158,6,60,13,120,187,125,189,32,206,29,120,215,30,87,0,13,232,64,2,3,48,206,245,1,12,120,125,7,60,129,11,184,129,9,188,12,227,254,1,54,0,159,27,159,27,159,27,159,27,31,11,140,27,159,27,159,27,159,27,159,27,159,27,159,27,159,105,228,105,228,105,228,105,228,249,142,220,164,148,38,165,52,41,165,73,41,77,74,105,82,74,147,82,218,79,1,31,224,59,242,1,156,192,5,220,192,4,222,103,216,228,160,38,7,53,57,168,201,65,77,14,106,114,80,147,131,154,28,212,228,160,38,7,53,57,168,109,248,108,248,108,248,108,248,108,248,4,62,129,79,224,19,248,4,62,129,79,224,19,248,4,62,129,79,224,19,248,4,62,129,79,224,19,248,52,124,26,62,13,159,134,79,195,167,225,211,240,105,248,52,124,26,62,13,159,134,79,195,167,225,211,240,105,248,116,124,58,62,29,159,142,79,199,167,227,51,220,53,220,85,174,41,215,148,185,228,231,38,63,55,105,185,203,225,221,53,221,53,93,14,79,153,54,101,218,148,105,83,166,77,153,54,247,239,93,5,124,128,29,56,128,19,184,128,27,152,192,251,160,242,248,1,240,57,208,56,208,56,208,144,141,83,54,78,217,56,101,227,60,208,144,150,83,90,78,105,57,165,229,148,150,243,68,227,68,227,244,88,78,124,164,238,60,241,145,195,83,14,79,57,60,37,225,148,204,83,50,79,201,60,229,240,188,76,42,81,167,252,60,250,9,92,192,13,76,224,29,103,228,15,176,1,239,128,163,124,37,175,14,121,117,200,171,67,94,29,242,234,144,87,135,188,58,228,213,33,175,142,219,236,211,20,211,236,211,236,179,1,214,37,247,14,185,119,200,189,99,154,125,154,125,154,125,190,179,239,210,242,46,45,239,162,114,23,113,187,136,219,69,220,46,226,118,17,183,247,1,20,240,1,204,229,97,238,30,230,158,6,76,3,14,95,13,95,113,86,187,125,223,237,242,110,151,119,114,188,219,238,157,140,238,30,221,238,209,29,86,122,88,233,97,165,135,149,30,86,113,88,197,225,253,57,250,247,174,119,138,195,43,113,148,113,62,95,96,64,228,15,228,15,228,15,228,15,228,15,94,226,96,33,14,22,226,176,174,211,198,157,86,113,202,153,167,229,156,150,115,218,184,19,231,51,223,253,58,49,60,175,31,224,189,230,146,141,47,35,95,178,241,101,187,47,15,234,242,160,174,126,0,39,112,1,70,206,4,140,35,132,47,246,233,226,136,46,124,110,235,186,173,235,182,174,219,200,147,108,77,34,53,137,212,36,82,147,72,77,34,53,137,212,36,82,211,186,166,117,205,238,154,254,189,230,4,46,0,13,41,101,74,131,83,210,155,146,222,148,244,166,164,55,37,189,41,233,77,73,111,122,127,166,55,97,50,147,147,153,156,204,228,188,190,23,191,124,22,187,178,216,149,229,177,44,79,99,181,239,87,7,112,2,23,96,64,175,250,170,0,26,208,1,83,212,0,204,85,248,148,73,203,164,101,210,50,105,125,39,125,159,234,82,118,45,129,182,188,198,139,100,47,146,189,40,245,34,235,75,149,180,104,247,162,221,139,118,47,218,189,104,247,218,191,183,227,76,169,23,165,94,148,122,81,234,69,169,23,165,94,148,122,81,234,117,152,157,100,47,146,189,72,246,34,217,139,100,47,146,189,72,246,34,217,139,100,47,146,189,72,246,242,66,46,186,188,232,242,242,138,46,175,232,242,138,46,175,232,122,223,204,109,189,226,251,128,245,130,55,129,60,96,3,92,243,214,50,15,112,241,237,171,219,87,183,175,166,175,166,175,166,175,150,175,214,111,95,197,207,235,249,31,112,191,224,117,248,225,87,134,240,43,67,248,149,33,252,202,16,126,101,8,191,50,132,95,25,194,175,12,225,87,134,240,43,67,252,188,14,255,1,102,223,190,179,35,246,58,252,248,9,124,2,159,192,39,240,9,124,2,159,192,39,240,9,115,53,215,52,215,52,215,52,156,27,206,13,231,134,115,251,142,131,115,195,185,225,220,113,238,56,119,156,59,206,29,231,142,79,199,103,152,116,152,116,152,116,152,116,152,116,152,180,92,83,174,41,215,124,124,245,241,213,199,87,55,170,55,170,55,170,55,170,55,170,55,170,55,170,183,71,119,123,116,183,71,119,91,197,109,21,55,26,55,26,247,151,134,85,76,124,94,243,22,219,91,2,63,224,251,55,13,232,64,2,3,248,0,47,159,205,75,187,121,87,55,239,234,230,173,219,188,117,155,183,110,243,214,109,222,186,205,91,183,121,217,54,239,216,22,230,106,46,78,23,167,217,211,93,137,70,186,61,113,78,227,228,1,156,192,5,220,0,242,137,252,142,252,142,252,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,142,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,129,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,137,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,207,133,143,156,176,201,9,155,156,176,201,9,155,156,176,201,9,155,156,176,201,9,155,156,176,201,9,155,156,176,201,9,155,156,176,201,9,155,156,176,201,9,155,156,176,125,115,194,196,103,226,51,241,153,248,76,124,38,62,19,159,137,207,91,226,69,72,50,33,201,196,91,230,60,160,1,29,72,96,0,5,124,128,29,248,78,113,2,23,112,3,19,120,151,28,84,56,168,112,72,95,65,115,67,30,11,121,44,104,110,208,220,160,185,65,115,131,230,6,205,13,217,47,100,191,144,253,66,246,11,217,47,100,191,160,185,33,13,6,205,13,249,48,2,31,137,49,2,159,192,135,46,71,224,19,248,4,62,13,159,134,143,4,27,13,159,134,15,125,15,250,30,244,61,232,123,208,247,160,239,65,223,131,190,7,125,15,250,30,244,61,232,123,208,247,160,239,65,223,131,190,7,125,15,250,30,29,159,142,79,199,167,227,211,241,233,248,116,124,58,62,29,159,196,39,241,73,124,8,80,16,160,32,64,65,128,130,0,5,1,10,2,20,4,40,8,80,16,160,32,64,65,128,130,0,197,192,103,224,51,240,25,248,12,124,6,62,3,159,129,207,192,103,224,195,26,5,107,20,172,81,176,70,193,26,5,107,20,133,79,225,83,248,20,62,133,79,225,83,248,20,62,133,79,225,83,248,20,62,108,88,176,97,193,134,69,225,243,193,231,131,207,7,159,15,62,31,124,62,248,124,240,249,224,243,193,231,131,207,7,159,15,62,188,95,240,126,193,251,197,7,31,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,33,24,134,96,24,130,97,8,134,65,107,44,180,198,30,128,15,195,16,12,67,48,12,193,48,4,195,16,12,131,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,90,232,172,133,206,218,3,240,97,24,130,97,8,134,33,24,134,96,24,244,227,66,63,46,244,227,66,63,46,244,227,30,128,207,196,103,226,51,241,153,248,76,124,22,62,235,229,163,175,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,23,218,121,161,157,247,184,131,31,96,3,2,104,64,7,190,119,13,160,128,15,176,3,7,112,2,23,112,3,19,120,87,209,237,114,183,203,221,46,119,187,220,237,114,183,203,221,46,119,187,220,237,114,183,203,221,46,119,187,220,237,114,183,203,221,46,119,187,220,237,114,183,203,221,46,119,187,220,237,114,231,181,58,175,213,121,173,206,107,245,254,189,24,121,94,171,243,90,157,215,234,188,86,231,181,210,126,165,253,74,251,149,246,43,237,87,218,175,180,95,105,191,210,126,165,253,202,159,239,20,39,112,1,55,48,129,247,249,164,253,74,251,149,246,43,237,87,218,175,180,95,105,191,210,126,165,253,74,251,149,246,43,237,87,218,175,180,95,105,191,210,126,165,253,74,251,149,246,43,237,87,218,175,20,149,41,42,83,84,166,168,76,81,153,162,50,69,101,138,202,20,149,41,42,83,84,166,168,76,81,153,162,50,69,101,138,202,20,149,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,122,69,211,43,154,94,209,244,138,166,87,52,189,162,233,21,77,175,104,122,69,211,43,154,223,87,84,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,72,229,64,42,7,82,57,144,202,129,84,14,164,114,32,149,3,169,28,112,54,35,156,205,8,103,51,194,217,140,112,54,35,156,160,8,39,40,30,224,46,166,221,81,138,112,148,34,28,165,8,71,41,194,81,138,112,148,34,28,165,8,71,41,194,81,138,112,148,34,28,165,8,71,41,194,81,138,112,148,34,28,165,8,71,41,194,81,138,112,148,34,28,165,8,71,41,194,81,138,112,148,226,1,248,48,237,206,84,132,51,21,15,192,135,105,79,166,221,41,139,112,202,226,1,248,48,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,123,50,237,201,180,39,211,158,76,251,224,10,6,87,48,184,130,193,21,12,174,96,112,5,131,43,24,92,193,224,10,6,87,48,184,130,193,21,12,174,96,112,5,131,43,24,92,193,224,10,6,87,48,184,130,193,21,12,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,238,120,85,56,94,21,142,87,133,227,85,225,120,85,56,94,21,142,87,133,227,85,15,192,135,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,131,190,15,250,62,232,251,160,239,37,96,75,192,150,128,45,1,91,226,180,196,105,137,211,18,167,37,42,75,84,150,168,44,81,89,162,178,68,101,137,202,18,149,197,171,23,175,94,188,122,241,234,197,171,23,175,94,98,185,196,114,137,229,18,203,37,150,75,44,151,88,46,177,92,98,185,196,114,137,229,18,203,37,150,75,44,151,16,46,33,92,66,184,132,112,9,225,18,194,37,132,75,8,151,16,46,33,92,66,184,132,112,9,225,18,194,37,132,75,8,151,16,46,33,92,66,184,132,112,9,225,18,194,37,132,75,8,151,16,46,33,92,66,184,132,112,9,225,18,194,37,132,75,8,151,16,46,33,92,66,184,68,110,9,216,18,176,37,96,75,192,150,168,44,193,88,130,177,4,99,9,198,18,140,37,24,75,48,150,208,43,161,87,66,175,132,94,9,189,18,122,37,244,138,185,173,250,254,13,62,204,109,49,183,197,220,22,115,91,204,109,49,183,197,220,22,115,91,204,109,49,183,197,220,22,115,91,204,109,49,183,197,220,22,115,91,204,109,49,183,197,220,22,115,91,204,109,49,183,197,220,22,115,91,204,109,49,183,197,220,22,115,91,126,208,46,63,104,151,31,180,203,15,218,229,7,237,242,131,118,249,65,187,252,160,93,188,113,241,198,197,27,23,111,92,188,113,241,198,197,27,23,111,92,188,113,241,198,197,27,23,111,92,188,113,241,198,197,27,23,111,92,44,113,177,196,197,18,23,75,92,44,113,177,196,197,18,23,75,92,44,113,177,196,197,18,23,75,92,44,113,189,150,184,249,231,81,205,63,143,106,254,121,84,243,207,163,30,240,1,118,224,0,78,224,2,110,224,59,197,122,193,155,159,155,227,76,205,113,166,230,56,83,115,156,169,57,206,212,28,103,106,142,51,53,199,153,154,227,76,205,113,166,230,56,83,115,156,169,57,206,212,28,103,106,142,51,53,199,153,30,224,246,112,123,184,61,220,30,110,15,183,55,183,55,12,27,134,205,53,59,134,187,41,118,83,188,239,234,58,95,98,235,110,95,240,219,237,107,190,12,31,176,1,1,180,23,52,215,52,215,52,215,180,239,53,29,72,96,0,5,124,128,29,56,128,19,184,128,27,152,0,206,29,159,142,79,199,167,227,211,241,233,230,234,230,234,230,234,230,234,230,234,230,234,230,74,83,164,1,211,186,210,186,210,186,210,92,105,174,52,87,154,43,205,149,230,26,150,51,204,53,204,53,60,204,97,210,97,174,97,228,245,82,93,111,160,61,32,128,1,20,240,1,118,224,165,186,222,23,251,1,23,112,3,19,48,151,215,198,169,215,229,212,235,114,234,245,1,238,178,113,203,198,45,143,101,121,44,203,99,89,30,203,242,52,214,176,156,87,227,30,240,62,159,53,125,53,125,53,191,95,89,233,180,210,105,165,211,236,211,236,211,236,211,236,203,87,235,254,229,207,127,7,220,161,115,219,241,57,0,0])))