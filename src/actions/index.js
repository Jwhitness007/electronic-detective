import * as Api from "../api/Api";
import * as Builder from "../utils/builder";

export const RECEIVE_GET_SETUP_DATA = "RECEIVE_GET_SETUP_DATA";
export const BUILD_GAME = "BUILD_GAME";
export const CHANGE_GAME_SCREEN = "CHANGE_GAME_SCREEN";
export const SET_PLAYER_TURN = "SET_PLAYER_TURN";
export const UPDATE_PLAYER_CLUES = "UPDATE_PLAYER_CLUES";
export const UPDATE_SUSPECT_STATEMENT = "UPDATE_SUSPECT_STATEMENT";

export const getSetupData = () => dispatch => {
  Api.getSetupData().then(data => {
    dispatch(receiveGetSetupData(data));
  });
};

export const receiveGetSetupData = setupData => {
  return {
    type: RECEIVE_GET_SETUP_DATA,
    setupData
  };
};

export const buildGame = (setupData, players = []) => dispatch => {
  dispatch(finalizeBuildGame(Builder.buildGame(setupData, players)));
};

export const finalizeBuildGame = gameData => {
  return {
    type: BUILD_GAME,
    gameData
  };
};

export const changeGameScreen = screen => {
  return {
    type: CHANGE_GAME_SCREEN,
    screen
  };
};

export const setPlayerTurn = playerId => {
  return {
    type: SET_PLAYER_TURN,
    playerId
  };
};

export const updatePlayerClues = (playerId, sheet) => {
  return {
    type: UPDATE_PLAYER_CLUES,
    playerId,
    sheet
  };
};

export const updateSuspectStatement = (playerId, suspectId, statement) => {
  return {
    type: UPDATE_SUSPECT_STATEMENT,
    playerId,
    data: {
      suspectId,
      statement
    }
  };
};
