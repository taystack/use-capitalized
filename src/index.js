/*
React.js HOOK
useCapitalized ( STRING text )
Capitalizes and returns a text argument during the render process.
This is an optimization step during the render process of a React Component.
ARGUMENTS:
  STRING text
  - String to capitalize.
   "hello world" -> "Hello world"
USAGE:
  const capped = useCapitalized("hello world");
  // "Hello world"
*/

import { useState, useEffect } from "react";

export default function useCapitalized(text) {
  // Track the capitalized text
  const [capitalized, setCapitalized] = useState("");

  // When text changes
  useEffect(() => {

    // Split the text into an array of letters, explicitly name the first letter
    const [firstLetter, ...rest] = text.split("");

    // Ensure we have a letter to capitalize
    if (firstLetter) {

      // Update the capitalized value we return
      setCapitalized([firstLetter.toUpperCase(), ...rest].join(""));
    }
  }, [text]);

  return capitalized;
}
