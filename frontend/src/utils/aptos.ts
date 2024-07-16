import { Network, Provider, Types } from "aptos";

export const provider = new Provider(Network.TESTNET);
export const moduleAddress = "0xb611addd177ad6191bd7de5a5bb1f15893dfbff8782e6a1f05a6bca5297984e7";

export const initializeGame = async (signAndSubmitTransaction: any) => {
  const payload: Types.TransactionPayload = {
    type: "entry_function_payload",
    function: `${moduleAddress}::hangman::initialize_game`,
    type_arguments: [],
    arguments: [],
  };
  const response = await signAndSubmitTransaction(payload);
  await provider.waitForTransaction(response.hash);
};

export const makeGuess = async (signAndSubmitTransaction: any, guess: string) => {
  const guessAscii = guess.charCodeAt(0);
  const payload: Types.TransactionPayload = {
    type: "entry_function_payload",
    function: `${moduleAddress}::hangman::make_guess`,
    type_arguments: [],
    arguments: [guessAscii],
  };
  const response = await signAndSubmitTransaction(payload);
  await provider.waitForTransaction(response.hash);
};

export const resetGame = async (signAndSubmitTransaction: any) => {
  const payload: Types.TransactionPayload = {
    type: "entry_function_payload",
    function: `${moduleAddress}::hangman::reset_game`,
    type_arguments: [],
    arguments: [],
  };
  const response = await signAndSubmitTransaction(payload);
  await provider.waitForTransaction(response.hash);
};

export const fetchGameState = async (account: any) => {
  try {
    const resource = await provider.getAccountResource(
      account.address,
      `${moduleAddress}::hangman::GameState`
    );
    const { word, guessed_letters, remaining_attempts, game_over } = resource.data as any;
    
    const hexToAscii = (hex: string): string => {
      let ascii = '';
      for (let i = 2; i < hex.length; i += 2) {
        ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      return ascii;
    };

    const decodedWord = hexToAscii(word);
    const decodedGuessedLetters = hexToAscii(guessed_letters).split('');
    
    return {
      word: decodedWord,
      guessedLetters: decodedGuessedLetters,
      remainingAttempts: remaining_attempts,
      gameOver: game_over
    };
  } catch (e) {
    console.error("Error fetching game state:", e);
    return null;
  }
};