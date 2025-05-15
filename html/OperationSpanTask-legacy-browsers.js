/************************** 
 * Operationspantask *
 **************************/


// store info about the experiment session:
let expName = 'OperationSpanTask';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(nback_instructionRoutineBegin());
flowScheduler.add(nback_instructionRoutineEachFrame());
flowScheduler.add(nback_instructionRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);







const span2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span2LoopBegin(span2LoopScheduler));
flowScheduler.add(span2LoopScheduler);
flowScheduler.add(span2LoopEnd);







const span3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span3LoopBegin(span3LoopScheduler));
flowScheduler.add(span3LoopScheduler);
flowScheduler.add(span3LoopEnd);







const span4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span4LoopBegin(span4LoopScheduler));
flowScheduler.add(span4LoopScheduler);
flowScheduler.add(span4LoopEnd);







const span5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span5LoopBegin(span5LoopScheduler));
flowScheduler.add(span5LoopScheduler);
flowScheduler.add(span5LoopEnd);







const span6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span6LoopBegin(span6LoopScheduler));
flowScheduler.add(span6LoopScheduler);
flowScheduler.add(span6LoopEnd);







flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var nback_instructionClock;
var nback_inst;
var key_resp;
var nbackClock;
var nback_stim;
var nback_resp;
var instructionsClock;
var inst_text;
var key_resp_5;
var practice_warningClock;
var text_6;
var stimulusClock;
var text;
var key_resp_2;
var ospan_stimClock;
var text_2;
var RecallClock;
var text_3;
var key_resp_3;
var key_resp_4;
var trial_warningClock;
var text_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "nback_instruction"
  nback_instructionClock = new util.Clock();
  nback_inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'nback_inst',
    text: 'In this task, you will see letters. \nEach letter is shown for a few seconds. You need to decide if you saw the same letter 3 letters ago. This is called an "N=3-Back Task"\n\nIf you saw the same letter 3 letters ago, you should press the "space" key.  \n\nHere is an example: A --- Y --- P --- A\nYou would press space when seeing the 2nd "A"\n\n\nPress the space key to continue to the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "nback"
  nbackClock = new util.Clock();
  nback_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'nback_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1.0,
    depth: 0.0 
  });
  
  nback_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text',
    text: "In this task, you will see a series of math problems and letters. \nFor each round: First, you will see a math problem (for example: 3 + 4 = 7).\nDecide if the answer is correct or incorrect. If it is correct press the right arrow key', if it is incorrect press the left arrow key.\n\nImmediately after each math problem, you will see a blue letter. Try to remember each letter in the order you see them. \n\nAfter a series of math problems and letters, you will see a red question mark. When a red question mark appears, you should type on the keyboard the letters that have appeared, in the same order in which they appeared. When you have finished, press the space bar.\n\nAfter the red question mark, a new series begins and you can forget the previous letters.\n\nPlease try to do your best on both the math problems and remembering the letters. \n\nPress the space bar to begin.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_warning"
  practice_warningClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'This is a practice trial.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ospan_stim"
  ospan_stimClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Recall"
  RecallClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.25,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_warning"
  trial_warningClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Attention, a new trial is starting. You may forget responses from the previous trials, please only focus on the upcoming trial.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var nback_instructionMaxDurationReached;
var _key_resp_allKeys;
var nback_instructionMaxDuration;
var nback_instructionComponents;
function nback_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nback_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nback_instructionClock.reset();
    routineTimer.reset();
    nback_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('nback_instruction.started', globalClock.getTime());
    nback_instructionMaxDuration = null
    // keep track of which components have finished
    nback_instructionComponents = [];
    nback_instructionComponents.push(nback_inst);
    nback_instructionComponents.push(key_resp);
    
    nback_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function nback_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nback_instruction' ---
    // get current time
    t = nback_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nback_inst* updates
    if (t >= 0.0 && nback_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_inst.tStart = t;  // (not accounting for frame time here)
      nback_inst.frameNStart = frameN;  // exact frame index
      
      nback_inst.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    nback_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nback_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nback_instruction' ---
    nback_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('nback_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "nback_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'letters1.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(nbackRoutineBegin(snapshot));
      trials_3LoopScheduler.add(nbackRoutineEachFrame());
      trials_3LoopScheduler.add(nbackRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Block.xlsx', '0:2'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(practice_warningRoutineBegin(snapshot));
      trialsLoopScheduler.add(practice_warningRoutineEachFrame());
      trialsLoopScheduler.add(practice_warningRoutineEnd(snapshot));
      const trialloopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trialloopLoopBegin(trialloopLoopScheduler, snapshot));
      trialsLoopScheduler.add(trialloopLoopScheduler);
      trialsLoopScheduler.add(trialloopLoopEnd);
      trialsLoopScheduler.add(RecallRoutineBegin(snapshot));
      trialsLoopScheduler.add(RecallRoutineEachFrame());
      trialsLoopScheduler.add(RecallRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialloop;
function trialloopLoopBegin(trialloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, selectblock, '0:2'),
      seed: undefined, name: 'trialloop'
    });
    psychoJS.experiment.addLoop(trialloop); // add the loop to the experiment
    currentLoop = trialloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop.forEach(function() {
      snapshot = trialloop.getSnapshot();
    
      trialloopLoopScheduler.add(importConditions(snapshot));
      trialloopLoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloopLoopScheduler.add(stimulusRoutineEachFrame());
      trialloopLoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloopLoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloopLoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloopLoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloopLoopScheduler.add(trialloopLoopEndIteration(trialloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var span2;
function span2LoopBegin(span2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Block.xlsx', '0:3'),
      seed: undefined, name: 'span2'
    });
    psychoJS.experiment.addLoop(span2); // add the loop to the experiment
    currentLoop = span2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    span2.forEach(function() {
      snapshot = span2.getSnapshot();
    
      span2LoopScheduler.add(importConditions(snapshot));
      span2LoopScheduler.add(trial_warningRoutineBegin(snapshot));
      span2LoopScheduler.add(trial_warningRoutineEachFrame());
      span2LoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop2LoopScheduler = new Scheduler(psychoJS);
      span2LoopScheduler.add(trialloop2LoopBegin(trialloop2LoopScheduler, snapshot));
      span2LoopScheduler.add(trialloop2LoopScheduler);
      span2LoopScheduler.add(trialloop2LoopEnd);
      span2LoopScheduler.add(RecallRoutineBegin(snapshot));
      span2LoopScheduler.add(RecallRoutineEachFrame());
      span2LoopScheduler.add(RecallRoutineEnd(snapshot));
      span2LoopScheduler.add(span2LoopEndIteration(span2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialloop2;
function trialloop2LoopBegin(trialloop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, selectblock, '2:4'),
      seed: undefined, name: 'trialloop2'
    });
    psychoJS.experiment.addLoop(trialloop2); // add the loop to the experiment
    currentLoop = trialloop2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop2.forEach(function() {
      snapshot = trialloop2.getSnapshot();
    
      trialloop2LoopScheduler.add(importConditions(snapshot));
      trialloop2LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloop2LoopScheduler.add(stimulusRoutineEachFrame());
      trialloop2LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloop2LoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloop2LoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloop2LoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloop2LoopScheduler.add(trialloop2LoopEndIteration(trialloop2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialloop2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialloop2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function span2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function span2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var span3;
function span3LoopBegin(span3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Block.xlsx', '0:3'),
      seed: undefined, name: 'span3'
    });
    psychoJS.experiment.addLoop(span3); // add the loop to the experiment
    currentLoop = span3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    span3.forEach(function() {
      snapshot = span3.getSnapshot();
    
      span3LoopScheduler.add(importConditions(snapshot));
      span3LoopScheduler.add(trial_warningRoutineBegin(snapshot));
      span3LoopScheduler.add(trial_warningRoutineEachFrame());
      span3LoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop3LoopScheduler = new Scheduler(psychoJS);
      span3LoopScheduler.add(trialloop3LoopBegin(trialloop3LoopScheduler, snapshot));
      span3LoopScheduler.add(trialloop3LoopScheduler);
      span3LoopScheduler.add(trialloop3LoopEnd);
      span3LoopScheduler.add(RecallRoutineBegin(snapshot));
      span3LoopScheduler.add(RecallRoutineEachFrame());
      span3LoopScheduler.add(RecallRoutineEnd(snapshot));
      span3LoopScheduler.add(span3LoopEndIteration(span3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialloop3;
function trialloop3LoopBegin(trialloop3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, selectblock, '4:7'),
      seed: undefined, name: 'trialloop3'
    });
    psychoJS.experiment.addLoop(trialloop3); // add the loop to the experiment
    currentLoop = trialloop3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop3.forEach(function() {
      snapshot = trialloop3.getSnapshot();
    
      trialloop3LoopScheduler.add(importConditions(snapshot));
      trialloop3LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloop3LoopScheduler.add(stimulusRoutineEachFrame());
      trialloop3LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloop3LoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloop3LoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloop3LoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloop3LoopScheduler.add(trialloop3LoopEndIteration(trialloop3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialloop3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialloop3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function span3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function span3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var span4;
function span4LoopBegin(span4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Block.xlsx', '0:3'),
      seed: undefined, name: 'span4'
    });
    psychoJS.experiment.addLoop(span4); // add the loop to the experiment
    currentLoop = span4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    span4.forEach(function() {
      snapshot = span4.getSnapshot();
    
      span4LoopScheduler.add(importConditions(snapshot));
      span4LoopScheduler.add(trial_warningRoutineBegin(snapshot));
      span4LoopScheduler.add(trial_warningRoutineEachFrame());
      span4LoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop4LoopScheduler = new Scheduler(psychoJS);
      span4LoopScheduler.add(trialloop4LoopBegin(trialloop4LoopScheduler, snapshot));
      span4LoopScheduler.add(trialloop4LoopScheduler);
      span4LoopScheduler.add(trialloop4LoopEnd);
      span4LoopScheduler.add(RecallRoutineBegin(snapshot));
      span4LoopScheduler.add(RecallRoutineEachFrame());
      span4LoopScheduler.add(RecallRoutineEnd(snapshot));
      span4LoopScheduler.add(span4LoopEndIteration(span4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialloop4;
function trialloop4LoopBegin(trialloop4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, selectblock, '7:11'),
      seed: undefined, name: 'trialloop4'
    });
    psychoJS.experiment.addLoop(trialloop4); // add the loop to the experiment
    currentLoop = trialloop4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop4.forEach(function() {
      snapshot = trialloop4.getSnapshot();
    
      trialloop4LoopScheduler.add(importConditions(snapshot));
      trialloop4LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloop4LoopScheduler.add(stimulusRoutineEachFrame());
      trialloop4LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloop4LoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloop4LoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloop4LoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloop4LoopScheduler.add(trialloop4LoopEndIteration(trialloop4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialloop4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialloop4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function span4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function span4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var span5;
function span5LoopBegin(span5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Block.xlsx', '0:3'),
      seed: undefined, name: 'span5'
    });
    psychoJS.experiment.addLoop(span5); // add the loop to the experiment
    currentLoop = span5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    span5.forEach(function() {
      snapshot = span5.getSnapshot();
    
      span5LoopScheduler.add(importConditions(snapshot));
      span5LoopScheduler.add(trial_warningRoutineBegin(snapshot));
      span5LoopScheduler.add(trial_warningRoutineEachFrame());
      span5LoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop5LoopScheduler = new Scheduler(psychoJS);
      span5LoopScheduler.add(trialloop5LoopBegin(trialloop5LoopScheduler, snapshot));
      span5LoopScheduler.add(trialloop5LoopScheduler);
      span5LoopScheduler.add(trialloop5LoopEnd);
      span5LoopScheduler.add(RecallRoutineBegin(snapshot));
      span5LoopScheduler.add(RecallRoutineEachFrame());
      span5LoopScheduler.add(RecallRoutineEnd(snapshot));
      span5LoopScheduler.add(span5LoopEndIteration(span5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialloop5;
function trialloop5LoopBegin(trialloop5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, selectblock, '11:16'),
      seed: undefined, name: 'trialloop5'
    });
    psychoJS.experiment.addLoop(trialloop5); // add the loop to the experiment
    currentLoop = trialloop5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop5.forEach(function() {
      snapshot = trialloop5.getSnapshot();
    
      trialloop5LoopScheduler.add(importConditions(snapshot));
      trialloop5LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloop5LoopScheduler.add(stimulusRoutineEachFrame());
      trialloop5LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloop5LoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloop5LoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloop5LoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloop5LoopScheduler.add(trialloop5LoopEndIteration(trialloop5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialloop5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialloop5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function span5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function span5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var span6;
function span6LoopBegin(span6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Block.xlsx', '0:3'),
      seed: undefined, name: 'span6'
    });
    psychoJS.experiment.addLoop(span6); // add the loop to the experiment
    currentLoop = span6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    span6.forEach(function() {
      snapshot = span6.getSnapshot();
    
      span6LoopScheduler.add(importConditions(snapshot));
      span6LoopScheduler.add(trial_warningRoutineBegin(snapshot));
      span6LoopScheduler.add(trial_warningRoutineEachFrame());
      span6LoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop6LoopScheduler = new Scheduler(psychoJS);
      span6LoopScheduler.add(trialloop6LoopBegin(trialloop6LoopScheduler, snapshot));
      span6LoopScheduler.add(trialloop6LoopScheduler);
      span6LoopScheduler.add(trialloop6LoopEnd);
      span6LoopScheduler.add(RecallRoutineBegin(snapshot));
      span6LoopScheduler.add(RecallRoutineEachFrame());
      span6LoopScheduler.add(RecallRoutineEnd(snapshot));
      span6LoopScheduler.add(span6LoopEndIteration(span6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialloop6;
function trialloop6LoopBegin(trialloop6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, selectblock, '16:22'),
      seed: undefined, name: 'trialloop6'
    });
    psychoJS.experiment.addLoop(trialloop6); // add the loop to the experiment
    currentLoop = trialloop6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop6.forEach(function() {
      snapshot = trialloop6.getSnapshot();
    
      trialloop6LoopScheduler.add(importConditions(snapshot));
      trialloop6LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloop6LoopScheduler.add(stimulusRoutineEachFrame());
      trialloop6LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloop6LoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloop6LoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloop6LoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloop6LoopScheduler.add(trialloop6LoopEndIteration(trialloop6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialloop6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialloop6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function span6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function span6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var nbackMaxDurationReached;
var _nback_resp_allKeys;
var nbackMaxDuration;
var nbackComponents;
function nbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nbackClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    nbackMaxDurationReached = false;
    // update component parameters for each repeat
    nback_stim.setText(letter);
    nback_resp.keys = undefined;
    nback_resp.rt = undefined;
    _nback_resp_allKeys = [];
    psychoJS.experiment.addData('nback.started', globalClock.getTime());
    nbackMaxDuration = null
    // keep track of which components have finished
    nbackComponents = [];
    nbackComponents.push(nback_stim);
    nbackComponents.push(nback_resp);
    
    nbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function nbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nback' ---
    // get current time
    t = nbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nback_stim* updates
    if (t >= 1.5 && nback_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_stim.tStart = t;  // (not accounting for frame time here)
      nback_stim.frameNStart = frameN;  // exact frame index
      
      nback_stim.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nback_stim.setAutoDraw(false);
    }
    
    
    // *nback_resp* updates
    if (t >= 1.5 && nback_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_resp.tStart = t;  // (not accounting for frame time here)
      nback_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { nback_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { nback_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { nback_resp.clearEvents(); });
    }
    
    frameRemains = 1.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nback_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (nback_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = nback_resp.getKeys({keyList: ['space'], waitRelease: false});
      _nback_resp_allKeys = _nback_resp_allKeys.concat(theseKeys);
      if (_nback_resp_allKeys.length > 0) {
        nback_resp.keys = _nback_resp_allKeys[_nback_resp_allKeys.length - 1].name;  // just the last key pressed
        nback_resp.rt = _nback_resp_allKeys[_nback_resp_allKeys.length - 1].rt;
        nback_resp.duration = _nback_resp_allKeys[_nback_resp_allKeys.length - 1].duration;
        // was this correct?
        if (nback_resp.keys == correct) {
            nback_resp.corr = 1;
        } else {
            nback_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    nbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nback' ---
    nbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('nback.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (nback_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         nback_resp.corr = 1;  // correct non-response
      } else {
         nback_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(nback_resp.corr, level);
    }
    psychoJS.experiment.addData('nback_resp.keys', nback_resp.keys);
    psychoJS.experiment.addData('nback_resp.corr', nback_resp.corr);
    if (typeof nback_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('nback_resp.rt', nback_resp.rt);
        psychoJS.experiment.addData('nback_resp.duration', nback_resp.duration);
        routineTimer.reset();
        }
    
    nback_resp.stop();
    if (nbackMaxDurationReached) {
        nbackClock.add(nbackMaxDuration);
    } else {
        nbackClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _key_resp_5_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(inst_text);
    instructionsComponents.push(key_resp_5);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_text* updates
    if (t >= 0.0 && inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_text.tStart = t;  // (not accounting for frame time here)
      inst_text.frameNStart = frameN;  // exact frame index
      
      inst_text.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 1.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    key_resp_5.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_warningMaxDurationReached;
var practice_warningMaxDuration;
var practice_warningComponents;
function practice_warningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_warning' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practice_warningClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    practice_warningMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('practice_warning.started', globalClock.getTime());
    practice_warningMaxDuration = null
    // keep track of which components have finished
    practice_warningComponents = [];
    practice_warningComponents.push(text_6);
    
    practice_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_warningRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_warning' ---
    // get current time
    t = practice_warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_warningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_warning' ---
    practice_warningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice_warning.stopped', globalClock.getTime());
    if (practice_warningMaxDurationReached) {
        practice_warningClock.add(practice_warningMaxDuration);
    } else {
        practice_warningClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimulusMaxDurationReached;
var _key_resp_2_allKeys;
var stimulusMaxDuration;
var stimulusComponents;
function stimulusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimulus' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stimulusClock.reset();
    routineTimer.reset();
    stimulusMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(Stimulus);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('stimulus.started', globalClock.getTime());
    stimulusMaxDuration = null
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(text);
    stimulusComponents.push(key_resp_2);
    
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimulus' ---
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.3 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.3 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_2.keys == Response) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimulus' ---
    stimulusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('stimulus.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(Response)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "stimulus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ospan_stimMaxDurationReached;
var ospan_stimMaxDuration;
var ospan_stimComponents;
function ospan_stimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ospan_stim' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ospan_stimClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    ospan_stimMaxDurationReached = false;
    // update component parameters for each repeat
    text_2.setText(Letter);
    psychoJS.experiment.addData('ospan_stim.started', globalClock.getTime());
    ospan_stimMaxDuration = null
    // keep track of which components have finished
    ospan_stimComponents = [];
    ospan_stimComponents.push(text_2);
    
    ospan_stimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ospan_stimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ospan_stim' ---
    // get current time
    t = ospan_stimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ospan_stimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ospan_stimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ospan_stim' ---
    ospan_stimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ospan_stim.stopped', globalClock.getTime());
    if (ospan_stimMaxDurationReached) {
        ospan_stimClock.add(ospan_stimMaxDuration);
    } else {
        ospan_stimClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RecallMaxDurationReached;
var _key_resp_3_allKeys;
var _key_resp_4_allKeys;
var RecallMaxDuration;
var RecallComponents;
function RecallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Recall' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    RecallClock.reset();
    routineTimer.reset();
    RecallMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('Recall.started', globalClock.getTime());
    RecallMaxDuration = null
    // keep track of which components have finished
    RecallComponents = [];
    RecallComponents.push(text_3);
    RecallComponents.push(key_resp_3);
    RecallComponents.push(key_resp_4);
    
    RecallComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function RecallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Recall' ---
    // get current time
    t = RecallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['q', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys.map((key) => key.name);  // storing all keys
        key_resp_3.rt = _key_resp_3_allKeys.map((key) => key.rt);
        key_resp_3.duration = _key_resp_3_allKeys.map((key) => key.duration);
        // was this correct?
        if (key_resp_3.keys == corrResp) {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
      }
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.5 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RecallComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RecallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Recall' ---
    RecallComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Recall.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes(corrResp)) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        }
    
    key_resp_3.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_warningMaxDurationReached;
var trial_warningMaxDuration;
var trial_warningComponents;
function trial_warningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_warning' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_warningClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    trial_warningMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial_warning.started', globalClock.getTime());
    trial_warningMaxDuration = null
    // keep track of which components have finished
    trial_warningComponents = [];
    trial_warningComponents.push(text_5);
    
    trial_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_warningRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_warning' ---
    // get current time
    t = trial_warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_warningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_warning' ---
    trial_warningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_warning.stopped', globalClock.getTime());
    if (trial_warningMaxDurationReached) {
        trial_warningClock.add(trial_warningMaxDuration);
    } else {
        trial_warningClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
