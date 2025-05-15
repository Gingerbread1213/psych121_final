/************************************ 
 * Psych121Project_Nback_Ospan *
 ************************************/


// store info about the experiment session:
let expName = 'Psych121Project_nback_ospan';  // from the Builder filename that created this script
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
const sound_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sound_loopLoopBegin(sound_loopLoopScheduler));
flowScheduler.add(sound_loopLoopScheduler);
flowScheduler.add(sound_loopLoopEnd);



















































flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

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

async function experimentInit() {
  // Initialize components for Routine "random_2"
  random_2Clock = new util.Clock();
  // Initialize components for Routine "start_sound"
  start_soundClock = new util.Clock();
  // Initialize components for Routine "sound_question"
  sound_questionClock = new util.Clock();
  sound_question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sound_question_text',
    text: 'What kind of Sound are u listening to?\n\nPlease type: ("binaural", "white noise", "silence")\n\nPress \'RETURN\' to move on.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_question_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'sound_question_textbox',
    text: '',
    placeholder: 'undefined',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  sound_question_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    text: "In this task, you will see a series of math problems and letters. \nFor each round: First, you will see a math problem (for example: (3 + 4) x 2 = 14). Decide if the answer is correct or incorrect. If it is correct press the right arrow key', if it is incorrect press the left arrow key.\n\nImmediately after each math problem, you will see a blue letter. Try to remember each letter in the order you see them. \n\nAfter a series of math problems and letters, you will will be prompted to recall the letters you have just seen. Type on the keyboard the letters that have appeared, in the same order in which they appeared. When you have finished, press the space bar.\n\nAfter the recall phase, a new series will begin and you can forget the previous letters.\n\nPlease try to do your best on both the math problems and remembering the letters. \n\nPress the space bar to begin.",
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
    text: 'Please type the letters you have just seen in order. \n\nPress the spacebar when you are finished',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('White'),  opacity: 1,
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

function sound_loopLoopBegin(sound_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sound_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'sound_loop'
    });
    psychoJS.experiment.addLoop(sound_loop); // add the loop to the experiment
    currentLoop = sound_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    sound_loop.forEach(function() {
      snapshot = sound_loop.getSnapshot();
    
      sound_loopLoopScheduler.add(importConditions(snapshot));
      sound_loopLoopScheduler.add(random_2RoutineBegin(snapshot));
      sound_loopLoopScheduler.add(random_2RoutineEachFrame());
      sound_loopLoopScheduler.add(random_2RoutineEnd(snapshot));
      sound_loopLoopScheduler.add(start_soundRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(start_soundRoutineEachFrame());
      sound_loopLoopScheduler.add(start_soundRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(sound_questionRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(sound_questionRoutineEachFrame());
      sound_loopLoopScheduler.add(sound_questionRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(nback_instructionRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(nback_instructionRoutineEachFrame());
      sound_loopLoopScheduler.add(nback_instructionRoutineEnd(snapshot));
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trials_3LoopScheduler);
      sound_loopLoopScheduler.add(trials_3LoopEnd);
      sound_loopLoopScheduler.add(instructionsRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(instructionsRoutineEachFrame());
      sound_loopLoopScheduler.add(instructionsRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(practice_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(practice_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(practice_warningRoutineEnd(snapshot));
      const trialloopLoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloopLoopBegin(trialloopLoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloopLoopScheduler);
      sound_loopLoopScheduler.add(trialloopLoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop2LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloop2LoopBegin(trialloop2LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloop2LoopScheduler);
      sound_loopLoopScheduler.add(trialloop2LoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop3LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloop3LoopBegin(trialloop3LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloop3LoopScheduler);
      sound_loopLoopScheduler.add(trialloop3LoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop4LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloop4LoopBegin(trialloop4LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloop4LoopScheduler);
      sound_loopLoopScheduler.add(trialloop4LoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop5LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloop5LoopBegin(trialloop5LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloop5LoopScheduler);
      sound_loopLoopScheduler.add(trialloop5LoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop6LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloop6LoopBegin(trialloop6LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloop6LoopScheduler);
      sound_loopLoopScheduler.add(trialloop6LoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(trial_warningRoutineEachFrame());
      sound_loopLoopScheduler.add(trial_warningRoutineEnd(snapshot));
      const trialloop7LoopScheduler = new Scheduler(psychoJS);
      sound_loopLoopScheduler.add(trialloop7LoopBegin(trialloop7LoopScheduler, snapshot));
      sound_loopLoopScheduler.add(trialloop7LoopScheduler);
      sound_loopLoopScheduler.add(trialloop7LoopEnd);
      sound_loopLoopScheduler.add(RecallRoutineBegin(snapshot));
      sound_loopLoopScheduler.add(RecallRoutineEachFrame());
      sound_loopLoopScheduler.add(RecallRoutineEnd(snapshot));
      sound_loopLoopScheduler.add(sound_loopLoopEndIteration(sound_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: nback_path,
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

function trialloopLoopBegin(trialloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, spanex_path, '0:2'),
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

function trialloop2LoopBegin(trialloop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, span2_path, '2:7'),
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

function trialloop3LoopBegin(trialloop3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, span3_path, '7:12'),
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

function trialloop4LoopBegin(trialloop4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, span4_path, '12:17'),
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

function trialloop5LoopBegin(trialloop5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, span5_path, '17:22'),
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

function trialloop6LoopBegin(trialloop6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, span6_path, '22:27'),
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

function trialloop7LoopBegin(trialloop7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialloop7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, span7_path, '27:32'),
      seed: undefined, name: 'trialloop7'
    });
    psychoJS.experiment.addLoop(trialloop7); // add the loop to the experiment
    currentLoop = trialloop7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialloop7.forEach(function() {
      snapshot = trialloop7.getSnapshot();
    
      trialloop7LoopScheduler.add(importConditions(snapshot));
      trialloop7LoopScheduler.add(stimulusRoutineBegin(snapshot));
      trialloop7LoopScheduler.add(stimulusRoutineEachFrame());
      trialloop7LoopScheduler.add(stimulusRoutineEnd(snapshot));
      trialloop7LoopScheduler.add(ospan_stimRoutineBegin(snapshot));
      trialloop7LoopScheduler.add(ospan_stimRoutineEachFrame());
      trialloop7LoopScheduler.add(ospan_stimRoutineEnd(snapshot));
      trialloop7LoopScheduler.add(trialloop7LoopEndIteration(trialloop7LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trialloop7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialloop7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialloop7LoopEndIteration(scheduler, snapshot) {
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

async function sound_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sound_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function sound_loopLoopEndIteration(scheduler, snapshot) {
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

function random_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'random_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    random_2Clock.reset();
    routineTimer.reset();
    random_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    import * as random from 'random';
    
    psychoJS.experiment.addData('random_2.started', globalClock.getTime());
    random_2MaxDuration = null
    // keep track of which components have finished
    random_2Components = [];
    
    random_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function random_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'random_2' ---
    // get current time
    t = random_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    random_2Components.forEach( function(thisComponent) {
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

function random_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'random_2' ---
    random_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('random_2.stopped', globalClock.getTime());
    // the Routine "random_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function start_soundRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_sound' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    start_soundClock.reset();
    routineTimer.reset();
    start_soundMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    sound_list = ["01-White-Noise-10min.wav", "binaurale.wav"];
    sound_idx = 0;
    background_sound = new sound.Sound(sound_list[sound_idx]);
    background_sound.play();
    
    psychoJS.experiment.addData('start_sound.started', globalClock.getTime());
    start_soundMaxDuration = null
    // keep track of which components have finished
    start_soundComponents = [];
    
    start_soundComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function start_soundRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_sound' ---
    // get current time
    t = start_soundClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_soundComponents.forEach( function(thisComponent) {
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

function start_soundRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_sound' ---
    start_soundComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_sound.stopped', globalClock.getTime());
    background_sound.stop();
    sound_idx = ((sound_idx + 1) % sound_list.length);
    
    // the Routine "start_sound" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function sound_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sound_question' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    sound_questionClock.reset();
    routineTimer.reset();
    sound_questionMaxDurationReached = false;
    // update component parameters for each repeat
    sound_question_textbox.setText('');
    sound_question_textbox.refresh();
    sound_question_textbox.setText(' ');
    sound_question_textbox.setPlaceholder('Type here...');
    sound_question_resp.keys = undefined;
    sound_question_resp.rt = undefined;
    _sound_question_resp_allKeys = [];
    psychoJS.experiment.addData('sound_question.started', globalClock.getTime());
    sound_questionMaxDuration = null
    // keep track of which components have finished
    sound_questionComponents = [];
    sound_questionComponents.push(sound_question_text);
    sound_questionComponents.push(sound_question_textbox);
    sound_questionComponents.push(sound_question_resp);
    
    sound_questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function sound_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sound_question' ---
    // get current time
    t = sound_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sound_question_text* updates
    if (t >= 0.0 && sound_question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_question_text.tStart = t;  // (not accounting for frame time here)
      sound_question_text.frameNStart = frameN;  // exact frame index
      
      sound_question_text.setAutoDraw(true);
    }
    
    
    // *sound_question_textbox* updates
    if (t >= 0.0 && sound_question_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_question_textbox.tStart = t;  // (not accounting for frame time here)
      sound_question_textbox.frameNStart = frameN;  // exact frame index
      
      sound_question_textbox.setAutoDraw(true);
    }
    
    
    // *sound_question_resp* updates
    if (t >= 0.0 && sound_question_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_question_resp.tStart = t;  // (not accounting for frame time here)
      sound_question_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sound_question_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sound_question_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sound_question_resp.clearEvents(); });
    }
    
    if (sound_question_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = sound_question_resp.getKeys({keyList: ['return'], waitRelease: false});
      _sound_question_resp_allKeys = _sound_question_resp_allKeys.concat(theseKeys);
      if (_sound_question_resp_allKeys.length > 0) {
        sound_question_resp.keys = _sound_question_resp_allKeys[_sound_question_resp_allKeys.length - 1].name;  // just the last key pressed
        sound_question_resp.rt = _sound_question_resp_allKeys[_sound_question_resp_allKeys.length - 1].rt;
        sound_question_resp.duration = _sound_question_resp_allKeys[_sound_question_resp_allKeys.length - 1].duration;
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
    sound_questionComponents.forEach( function(thisComponent) {
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

function sound_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sound_question' ---
    sound_questionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('sound_question.stopped', globalClock.getTime());
    psychoJS.experiment.addData('sound_question_textbox.text',sound_question_textbox.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sound_question_resp.corr, level);
    }
    psychoJS.experiment.addData('sound_question_resp.keys', sound_question_resp.keys);
    if (typeof sound_question_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sound_question_resp.rt', sound_question_resp.rt);
        psychoJS.experiment.addData('sound_question_resp.duration', sound_question_resp.duration);
        routineTimer.reset();
        }
    
    sound_question_resp.stop();
    // the Routine "sound_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    // Run 'End Routine' code from code_2
    background_sound.stop();
    sound_idx = ((sound_idx + 1) % sound_list.length);
    
    // the Routine "Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
