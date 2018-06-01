

var __main__1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 1;
    r0 = pxsim.Array_.mk(0);
    s.tmp_0 = r0;
    r0 = globals.freqTable___119;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    globals.freqTable___119 = (r0);
    s.lastBrkId = 10;
    r0 = 0;
    globals.item___153 = (r0);
    s.lastBrkId = 11;
    s.tmp_0 = { fn: _initLCD_154, parent: s };
    r0 = 39;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 12;
    s.tmp_0 = { fn: _ShowString_155, parent: s };
    r0 = pxsim.pxtcore.ptrOfLiteral("Hello");
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    r0 = 0;
    s.tmp_0.arg2 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
    s.lastBrkId = 13;
    r0 = pxsim.pxtcore.ptrOfLiteral(_inline_157);
    s.tmp_0 = r0;
    r0 = pxsim.basic.forever(s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    s.lastBrkId = 17;
    r0 = 0;
    globals.COMMAND___170 = (r0);
    s.lastBrkId = 18;
    r0 = 1;
    globals.DATA___175 = (r0);
  case 1:
    return leave(s, r0)
  default: oops()
} } }
__main__1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/dal.d.ts","functionName":"<main>"}
__main__1.continuations = [  ]



var _inline_157  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 14;
    r0 = pxsim.thumb.adds(globals.item___153, 1);
    globals.item___153 = (r0);
    s.lastBrkId = 15;
    s.tmp_0 = { fn: _ShowNumber_158, parent: s };
    r0 = globals.item___153;
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    r0 = 1;
    s.tmp_0.arg2 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 16;
    setupResume(s, 3);
    pxsim.basic.pause(1000);
    checkResumeConsumed();
    return;
  case 3:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_inline_157.info = {"start":101,"length":80,"line":3,"column":14,"endLine":7,"endColumn":1,"fileName":"test.ts","functionName":"inline"}



var _ShowNumber_158  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.s___163 = 0;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 42;
    r0 = pxsim.Number_.toString(s.arg0);
    s.tmp_0 = r0;
    r0 = s.s___163;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    s.s___163 = (r0);
    s.lastBrkId = 43;
    s.tmp_0 = { fn: _ShowString_155, parent: s };
    r0 = s.s___163;
    pxtrt.incr(r0);
    s.tmp_0.arg0 = r0;
    r0 = s.arg1;
    s.tmp_0.arg1 = r0;
    r0 = s.arg2;
    s.tmp_0.arg2 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
  case 1:
    r0 = s.s___163;
    pxtrt.decr(r0);
    return leave(s, r0)
  default: oops()
} } }
_ShowNumber_158.info = {"start":1661,"length":632,"line":78,"column":5,"endLine":95,"endColumn":5,"fileName":"main.ts","functionName":"ShowNumber"}



var _ShowString_155  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.a___168 = 0;
    s.i___171 = 0;
    if (s.lambdaArgs) {
      s.arg0 = pxtrt.incr(s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 44;
    r0 = pxsim.Number_.gt(s.arg1, 0);
    if (!r0) { step = 1; continue; }
    s.lastBrkId = 45;
    r0 = 192;
    s.a___168 = (r0);
    { step = 2; continue; }
  case 1:
    s.lastBrkId = 46;
    r0 = 128;
    s.a___168 = (r0);
  case 2:
    s.lastBrkId = 47;
    r0 = pxsim.thumb.adds(s.a___168, s.arg2);
    s.a___168 = (r0);
    s.lastBrkId = 48;
    s.tmp_0 = { fn: _send_169, parent: s };
    r0 = s.a___168;
    s.tmp_0.arg0 = r0;
    r0 = globals.COMMAND___170;
    s.tmp_0.arg1 = r0;
    s.pc = 7;
    return actionCall(s.tmp_0)
  case 7:
    r0 = s.retval;
    s.lastBrkId = 49;
    r0 = 0;
    s.i___171 = (r0);
    s.lastBrkId = 50;
  case 3:
    r0 = s.i___171;
    s.tmp_0 = r0;
    r0 = s.arg0;
    pxtrt.incr(r0);
    s.tmp_1 = r0;
    r0 = pxsim.String_.length(s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.tmp_1;
    pxtrt.decr(r0);
    r0 = s.tmp_2;
    s.tmp_3 = r0;
    r0 = pxsim.Number_.lt(s.tmp_0, s.tmp_3);
    if (!r0) { step = 5; continue; }
    s.lastBrkId = 51;
    s.tmp_4 = { fn: _send_169, parent: s };
    r0 = s.arg0;
    pxtrt.incr(r0);
    s.tmp_5 = r0;
    r0 = pxsim.String_.charCodeAt(s.tmp_5, s.i___171);
    s.tmp_6 = r0;
    r0 = s.tmp_5;
    pxtrt.decr(r0);
    r0 = s.tmp_6;
    s.tmp_4.arg0 = r0;
    r0 = globals.DATA___175;
    s.tmp_4.arg1 = r0;
    s.pc = 8;
    return actionCall(s.tmp_4)
  case 8:
    r0 = s.retval;
  case 4:
    s.lastBrkId = 52;
    r0 = s.i___171;
    s.tmp_0 = r0;
    r0 = pxsim.thumb.adds(s.tmp_0, 1);
    s.i___171 = (r0);
    { step = 3; continue; }
  case 5:
  case 6:
    r0 = s.arg0;
    pxtrt.decr(r0);
    return leave(s, r0)
  default: oops()
} } }
_ShowString_155.info = {"start":2293,"length":760,"line":95,"column":5,"endLine":122,"endColumn":5,"fileName":"main.ts","functionName":"ShowString"}



var _send_169  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 39;
    r0 = s.arg1;
    globals.RS___178 = (r0);
    s.lastBrkId = 40;
    s.tmp_0 = { fn: _set_179, parent: s };
    r0 = s.arg0;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 41;
    s.tmp_0 = { fn: _set_179, parent: s };
    r0 = pxsim.thumb.lsls(s.arg0, 4);
    s.tmp_0.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_send_169.info = {"start":1541,"length":120,"line":69,"column":5,"endLine":78,"endColumn":5,"fileName":"main.ts","functionName":"send"}



var _set_179  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 32;
    r0 = pxsim.thumb.ands(s.arg0, 240);
    s.tmp_0 = r0;
    r0 = pxsim.thumb.adds(s.tmp_0, globals.BK___181);
    s.tmp_1 = r0;
    r0 = pxsim.thumb.adds(s.tmp_1, globals.RS___178);
    s.arg0 = (r0);
    s.lastBrkId = 33;
    s.tmp_0 = { fn: _i2cWriteNumber_145, parent: s };
    r0 = globals.i2cAddr___182;
    s.tmp_0.arg0 = r0;
    r0 = s.arg0;
    s.tmp_0.arg1 = r0;
    r0 = 1;
    s.tmp_0.arg2 = r0;
    r0 = 0;
    s.tmp_0.arg3 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 34;
    setupResume(s, 3);
    pxsim.basic.pause(1);
    checkResumeConsumed();
    return;
  case 3:
    r0 = s.retval;
    s.lastBrkId = 35;
    s.tmp_0 = { fn: _i2cWriteNumber_145, parent: s };
    r0 = globals.i2cAddr___182;
    s.tmp_0.arg0 = r0;
    r0 = pxsim.thumb.adds(s.arg0, 4);
    s.tmp_0.arg1 = r0;
    r0 = 1;
    s.tmp_0.arg2 = r0;
    r0 = 0;
    s.tmp_0.arg3 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    s.lastBrkId = 36;
    setupResume(s, 5);
    pxsim.basic.pause(1);
    checkResumeConsumed();
    return;
  case 5:
    r0 = s.retval;
    s.lastBrkId = 37;
    s.tmp_0 = { fn: _i2cWriteNumber_145, parent: s };
    r0 = globals.i2cAddr___182;
    s.tmp_0.arg0 = r0;
    r0 = s.arg0;
    s.tmp_0.arg1 = r0;
    r0 = 1;
    s.tmp_0.arg2 = r0;
    r0 = 0;
    s.tmp_0.arg3 = r0;
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
    s.lastBrkId = 38;
    setupResume(s, 7);
    pxsim.basic.pause(1);
    checkResumeConsumed();
    return;
  case 7:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_set_179.info = {"start":1166,"length":375,"line":55,"column":5,"endLine":69,"endColumn":5,"fileName":"main.ts","functionName":"set"}



var _i2cWriteNumber_145  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.buf___187 = 0;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 2;
    s.tmp_0 = { fn: _sizeOf_146, parent: s };
    r0 = s.arg2;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.buf___187;
    pxtrt.decr(r0);
    r0 = s.tmp_2;
    s.buf___187 = (r0);
    s.lastBrkId = 3;
    r0 = s.buf___187;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.arg2, 0, s.arg1);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
    s.lastBrkId = 4;
    r0 = s.buf___187;
    pxtrt.incr(r0);
    s.tmp_0 = r0;
    r0 = pxsim.pins.i2cWriteBuffer(s.arg0, s.tmp_0, s.arg3);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    pxtrt.decr(r0);
    r0 = s.tmp_1;
  case 1:
    r0 = s.buf___187;
    pxtrt.decr(r0);
    return leave(s, r0)
  default: oops()
} } }
_i2cWriteNumber_145.info = {"start":1534,"length":542,"line":28,"column":5,"endLine":39,"endColumn":5,"fileName":"pxt_modules/core/pins.ts","functionName":"i2cWriteNumber"}



var _sizeOf_146  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 5;
    r0 = s.arg0;
    s.tmp_0 = r0;
    { step = 1; continue; }
  case 1:
    if (r0 == (1)) { step = 2; continue; }
    if (r0 == (2)) { step = 3; continue; }
    if (r0 == (6)) { step = 4; continue; }
    if (r0 == (7)) { step = 5; continue; }
    if (r0 == (3)) { step = 6; continue; }
    if (r0 == (4)) { step = 7; continue; }
    if (r0 == (8)) { step = 8; continue; }
    if (r0 == (9)) { step = 9; continue; }
    if (r0 == (5)) { step = 10; continue; }
    if (r0 == (10)) { step = 11; continue; }
    r0 = s.tmp_0;
    { step = 12; continue; }
  case 2:
  case 3:
  case 4:
  case 5:
    s.lastBrkId = 6;
    r0 = 1;
    { step = 13; continue; }
  case 6:
  case 7:
  case 8:
  case 9:
    s.lastBrkId = 7;
    r0 = 2;
    { step = 13; continue; }
  case 10:
  case 11:
    s.lastBrkId = 8;
    r0 = 4;
    { step = 13; continue; }
  case 12:
    s.lastBrkId = 9;
    r0 = 0;
    { step = 13; continue; }
  case 13:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    { step = 14; continue; }
  case 14:
    return leave(s, r0)
  default: oops()
} } }
_sizeOf_146.info = {"start":2076,"length":661,"line":39,"column":5,"endLine":62,"endColumn":5,"fileName":"pxt_modules/core/pins.ts","functionName":"sizeOf"}



var _initLCD_154  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 19;
    r0 = s.arg0;
    globals.i2cAddr___182 = (r0);
    s.lastBrkId = 20;
    r0 = 8;
    globals.BK___181 = (r0);
    s.lastBrkId = 21;
    r0 = 0;
    globals.RS___178 = (r0);
    s.lastBrkId = 22;
    s.tmp_0 = { fn: _send_169, parent: s };
    r0 = 51;
    s.tmp_0.arg0 = r0;
    r0 = globals.COMMAND___170;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.lastBrkId = 23;
    setupResume(s, 3);
    pxsim.basic.pause(5);
    checkResumeConsumed();
    return;
  case 3:
    r0 = s.retval;
    s.lastBrkId = 24;
    s.tmp_0 = { fn: _set_179, parent: s };
    r0 = 48;
    s.tmp_0.arg0 = r0;
    s.pc = 4;
    return actionCall(s.tmp_0)
  case 4:
    r0 = s.retval;
    s.lastBrkId = 25;
    setupResume(s, 5);
    pxsim.basic.pause(5);
    checkResumeConsumed();
    return;
  case 5:
    r0 = s.retval;
    s.lastBrkId = 26;
    s.tmp_0 = { fn: _set_179, parent: s };
    r0 = 32;
    s.tmp_0.arg0 = r0;
    s.pc = 6;
    return actionCall(s.tmp_0)
  case 6:
    r0 = s.retval;
    s.lastBrkId = 27;
    setupResume(s, 7);
    pxsim.basic.pause(5);
    checkResumeConsumed();
    return;
  case 7:
    r0 = s.retval;
    s.lastBrkId = 28;
    s.tmp_0 = { fn: _send_169, parent: s };
    r0 = 40;
    s.tmp_0.arg0 = r0;
    r0 = globals.COMMAND___170;
    s.tmp_0.arg1 = r0;
    s.pc = 8;
    return actionCall(s.tmp_0)
  case 8:
    r0 = s.retval;
    s.lastBrkId = 29;
    s.tmp_0 = { fn: _send_169, parent: s };
    r0 = 12;
    s.tmp_0.arg0 = r0;
    r0 = globals.COMMAND___170;
    s.tmp_0.arg1 = r0;
    s.pc = 9;
    return actionCall(s.tmp_0)
  case 9:
    r0 = s.retval;
    s.lastBrkId = 30;
    s.tmp_0 = { fn: _send_169, parent: s };
    r0 = 6;
    s.tmp_0.arg0 = r0;
    r0 = globals.COMMAND___170;
    s.tmp_0.arg1 = r0;
    s.pc = 10;
    return actionCall(s.tmp_0)
  case 10:
    r0 = s.retval;
    s.lastBrkId = 31;
    s.tmp_0 = { fn: _send_169, parent: s };
    r0 = 1;
    s.tmp_0.arg0 = r0;
    r0 = globals.COMMAND___170;
    s.tmp_0.arg1 = r0;
    s.pc = 11;
    return actionCall(s.tmp_0)
  case 11:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_initLCD_154.info = {"start":571,"length":595,"line":29,"column":5,"endLine":55,"endColumn":5,"fileName":"main.ts","functionName":"initLCD"}


setupDebugger(53)

pxsim.setupStringLiterals({
 "Hello": 1
})
